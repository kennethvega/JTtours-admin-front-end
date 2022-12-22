import Layout from '../../components/utility/Layout';
import usePageRedirect from '../../hooks/usePageRedirect';
import { Link, useNavigate } from 'react-router-dom';
import { useState, FormEvent } from 'react';

import { createProduct, selectIsLoading } from '../../redux/features/products/productSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import ProductForm from '../../components/ProductForm';

type InitialState = {
  country: string;
  city: string;
  price: string;
  date: string;
};

const initialState: InitialState = {
  country: '',
  city: '',
  price: '',
  date: '',
};
const AddProduct = () => {
  // redux global state
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  // local state
  const [product, setProduct] = useState(initialState);
  const [productImage, setProductImage] = useState<string | Blob>('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const { country, city, price, date } = product; //destructure
  usePageRedirect('/login');
  const navigate = useNavigate();

  // Handling input changes on product
  const handleInputChange = (e: React.ChangeEvent<HTMLFormElement>): void => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value }); //set name to its value (name should be equal to value in input)
  };
  // Handling image input
  const handleImageChange = (e: React.ChangeEvent<HTMLFormElement>): void => {
    if (e.target.files != null) {
      setProductImage(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };
  // Handle Submit product
  const saveProduct = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData() as FormData | any; //use this for the image
    formData.append('country', country);
    formData.append('city', city);
    formData.append('price', price);
    formData.append('date', date);
    formData.append('description', description);
    formData.append('image', productImage);
    console.log(...formData);
    await dispatch(createProduct(formData));
    navigate('/'); //navigate to products dashboard
  };

  return (
    <Layout>
      <div className="min-h-[50rem]">
        <Link to="/">
          <p className="flex items-center gap-2 hover:text-blue-500 cursor-pointer mb-2">&larr; Back to products list</p>
        </Link>
        <hr />
        <h3>Add a new product</h3>
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
      </div>
    </Layout>
  );
};

export default AddProduct;
