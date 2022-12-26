import { TbEdit } from 'react-icons/tb';
import { MdDeleteForever } from 'react-icons/md';
import { ProductType } from '../../ts/productTypes';
import DOMPurify from 'dompurify';
type ProductItemProps = {
  product: ProductType;
};

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="mt-6 bg-gray-200 p-2 border rounded-md">
      <div className="grid product-grid">
        <img className="w-[250px] rounded-md" src={product?.image?.imageURL} />
        <div className="flex flex-col justify-between">
          <div className="flex justify-between">
            <h3>
              <span className="font-bold">Package:</span> {product?.country} | {product?.city} | {product?.price}
            </h3>
            <div className="flex gap-3 text-2xl">
              <TbEdit className="text-green-700 cursor-pointer" title="edit" />
              <MdDeleteForever className="text-red-700 cursor-pointer" title="delete" />
            </div>
          </div>

          <p>
            <span className="font-bold">Description:</span>
            <div
              className="scrollbar"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product?.description.substring(0, 200)),
              }}
            ></div>
          </p>

          <p>
            <span className="font-bold">Tour Date:</span> {product?.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
