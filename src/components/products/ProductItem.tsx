import React from 'react';
import { ProductType } from '../../ts/productTypes';
type ProductItemProps = {
  product: ProductType;
};

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="mt-6 bg-gray-200 p-2 border rounded-md">
      <div className="grid product-grid">
        <img className="w-[250px]" src={product?.image?.imageURL} />
        <div className="flex flex-col justify-between">
          <div className="flex justify-between">
            <h3>
              <span className="font-bold">Package:</span> {product.country} | {product.city} | {product.price}
            </h3>
            <div className="flex gap-3">
              <p>edit</p>
              <p>delete</p>
            </div>
          </div>
          <p>
            <span className="font-bold">Product Description:</span> {product.description.substring(0, 200)}...
          </p>
          <p>
            <span className="font-bold">Tour Date:</span> {product.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
