import React, { useEffect } from 'react';
import { selectIsLoggedIn } from '../../redux/features/auth/authSlice';
import { getAllProducts } from '../../redux/features/products/productSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ProductType } from '../../ts/productTypes';
import Loading from '../utility/Loading';
import ProductItem from './ProductItem';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const { products, isLoading, isError, message } = useAppSelector((state) => state.product);
  useEffect(() => {
    // get all products
    if (isLoggedIn) {
      dispatch(getAllProducts());
    }
  }, []);
  return (
    <>
      {!isLoading ? (
        <div className="block gap-3 mt-3">
          {products.map((product: ProductType) => (
            <ProductItem product={product} key={product._id} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center mt-10">
          <Loading />
        </div>
      )}
    </>
  );
};

export default ProductList;
