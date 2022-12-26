import React, { FormEvent, SetStateAction, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Layout from '../../components/utility/Layout';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import usePageRedirect from '../../hooks/usePageRedirect';
import { toast } from 'react-hot-toast';
import ProductForm from '../../components/products/ProductForm';
import { getProduct, selectIsLoading, selectProduct, updateProduct } from '../../redux/features/products/productSlice';
import { Product } from '../../ts/productTypes';
import Loading from '../../components/utility/Loading';

const EditProduct = () => {
  const { id } = useParams();
  // redux global state
  const dispatch = useAppDispatch();
  const productEdit = useAppSelector(selectProduct);
  const isLoading = useAppSelector(selectIsLoading);
  // local state
  const [product, setProduct] = useState<Product | null | undefined>();
  const [productImage, setProductImage] = useState<File | string>('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [description, setDescription] = useState<string>('');
  usePageRedirect('/login');
  const navigate = useNavigate();

  useEffect(() => {
    const getDetails = async () => {
      await dispatch(getProduct(id));
    };
    getDetails();
  }, [dispatch, id]);

  useEffect(() => {
    if (productEdit) {
      setProduct(productEdit as Product);
      setImagePreview(productEdit && productEdit.image ? `${productEdit.image.imageURL}` : null);
      setDescription(productEdit && productEdit.description ? productEdit.description : '');
    }
  }, [productEdit, id, description]);

  // Handling input changes on product
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setProduct({ ...product!, [name]: value }); //set name to its value (name should be equal to value in input)
  };

  // Handling image input
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files != null) {
      setProductImage(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };
  // Handle Submit product
  const saveProduct = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!description || description.length < 40) {
      return toast.error('please add a description greater than 30 characters');
    }
    const formData = new FormData() as FormData | any; //use this for the image
    formData.append('country', product?.country);
    formData.append('city', product?.city);
    formData.append('price', product?.price);
    formData.append('date', product?.date);
    formData.append('description', description);
    if (productImage) {
      formData.append('image', productImage);
    }
    await dispatch(updateProduct({ id, formData }));
    await dispatch(getProduct());
    navigate('/'); //navigate to products dashboard
  };

  return (
    <Layout>
      <div className="min-h-[50rem]">
        <div className="flex mb-6">
          <Link to="/">
            <p className="flex items-center gap-2 hover:text-blue-500 cursor-pointer mb-2 bg-gray-200 px-3 rounded-md py-2">&larr; Back to products list</p>
          </Link>
        </div>
        <h3 className="text-xl font-medium">Add New Product</h3>
        <hr />
        {isLoading || !productEdit ? (
          <div className="flex justify-center item-center">
            <Loading />
          </div>
        ) : (
          <ProductForm
            product={product}
            productImage={productImage}
            imagePreview={imagePreview}
            description={description}
            setDescription={setDescription}
            handleInputChange={handleInputChange}
            handleImageChange={handleImageChange}
            saveProduct={saveProduct}
          />
        )}
      </div>
    </Layout>
  );
};

export default EditProduct;
