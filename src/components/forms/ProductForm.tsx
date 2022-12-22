import React, { Dispatch, SetStateAction, FormEvent, useRef } from 'react';
import Card from '../utility/Card';
import upload from '../../assets/upload.jpg';
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
  setDescription: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  saveProduct: (e: FormEvent<HTMLFormElement>) => void;
};
const ProductForm = ({ product, productImage, imagePreview, description, setDescription, handleInputChange, handleImageChange, saveProduct }: ProductFormProps) => {
  console.log(description);
  const fileInputRef = useRef<HTMLInputElement>(null);
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

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
          // disabled={isPending ? true : false}
        />
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
      />
    </form>
  );
};

export default ProductForm;

{
  /* <input name="adminCode" value={} onChange={handleInputChange} type="password" placeholder="Admin code" required />
              <input name="name" value={} onChange={handleInputChange} type="text" placeholder="Name" required />
              <input name="email" value={} onChange={handleInputChange} type="email" placeholder="Email" required />
              {/* password */
}
// <div className="relative flex items-center">
//   <input name="password" value={password} onChange={handleInputChange} type={showPassword ? 'text' : 'password'} placeholder="Password" required />
//   {password.length > 0 && (
//     <button type="button" className="absolute right-3 top-2 font-semibold" onClick={() => setShowPassword(!showPassword)}>
//       {showPassword ? 'Hide' : 'Show'}
//     </button>
//   )}
// </div>
{
  /* confirm password */
}
// <div className="relative flex items-center">
//   <input name="confirmPassword" value={confirmPassword} onChange={handleInputChange} type={showConfirmPassword ? 'text' : 'password'} placeholder="Confirm password" required />
//   {confirmPassword.length > 0 && (
//     <button type="button" className="absolute right-3 top-2 font-semibold" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
//       {showConfirmPassword ? 'Hide' : 'Show'}
//     </button>
//   )}
// </div>
// {isLoading ? (
//   <Button type="button">
//     <p className="p-1 font-semibold">
//       <Loading />
//     </p>
//   </Button>
// ) : (
//   <Button type="submit">
//     <p className="p-1 font-semibold">Sign up</p>
//   </Button>
// )} */}
