import React, { Dispatch, SetStateAction, FormEvent } from 'react';

type Product = {
  country: string;
  city: string;
  price: string;
  date: string;
};
type ProductFormProps = {
  product: Product;
  productImage: string | Blob;
  imagePreview: string | null;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  handleInputChange: (e: React.ChangeEvent<HTMLFormElement>) => void;
  handleImageChange: (e: React.ChangeEvent<HTMLFormElement>) => void;
  saveProduct: (e: FormEvent<HTMLFormElement>) => void;
};

const ProductForm = ({ product, productImage, imagePreview, description, setDescription, handleInputChange, handleImageChange, saveProduct }: ProductFormProps) => {
  return <div>ProductForm</div>;
};

export default ProductForm;
