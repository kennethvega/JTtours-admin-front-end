import React, {  SetStateAction, FormEvent, useRef } from 'react';
import upload from '../../assets/upload.jpg';
import Button from '../utility/Button';
import { useAppSelector } from '../../redux/hooks';
import { selectIsLoading } from '../../redux/features/products/productSlice';
import Loading from '../utility/Loading';
type Product = {
  country: string;
  city: string;
  price: string;
  date: string;
};
type ProductFormProps = {
  product: Product;
  productImage: SetStateAction<string> | File;
  imagePreview: string | null;
  description: string;
  setDescription: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  saveProduct: (e: FormEvent<HTMLFormElement>) => void;
};
const ProductForm = ({ product, productImage, imagePreview, description, setDescription, handleInputChange, handleImageChange, saveProduct }: ProductFormProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isLoading = useAppSelector(selectIsLoading);
  return (
    <form onSubmit={saveProduct} className="py-2">
      <div className="flex flex-col mb-5">
        {/* image */}
        <label className="mb-2">Product Image:</label>
        <div>
          <code className="bg-gray-200 inline p-2 rounded-md">Supported Formats: jpg, jpeg, png and webp</code>
        </div>
        <img
          src={imagePreview ? imagePreview : upload}
          width={200}
          height={200}
          alt="user-profile"
          className="mt-3 cursor-pointer hover:opacity-80 rounded-md"
          onClick={(e) => {
            e.preventDefault();
            fileInputRef.current?.click();
          }}
        />
        <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleImageChange} disabled={isLoading ? true : false} />
      </div>
      <label>Country:</label>
      <input name="country" value={product?.country} onChange={handleInputChange} type="text" placeholder="Country" />
      <label>City:</label>
      <input name="city" value={product?.city} onChange={handleInputChange} type="text" placeholder="City" />
      <label>Price:</label>
      <input name="price" value={product?.price} onChange={handleInputChange} type="text" placeholder="Price" />
      <label>Date:</label>
      <input name="date" value={product?.date} onChange={handleInputChange} type="text" placeholder="Date" />
      <label>Description:</label>
      <textarea
        id="description"
        value={description || ''}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Description"
        className="mb-4"
      />
      {isLoading ? (
        <Button type="submit">
          <Loading />
        </Button>
      ) : (
        <Button type="submit">Add product</Button>
      )}
    </form>
  );
};

export default ProductForm;
