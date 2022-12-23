import { Product } from '../../../ts/productTypes';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/products`;
// CREATE NEW PRODUCT
const createProduct = async (formData: Product | void) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};

// GET ALL PRODUCTS
const getAllProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const productService = {
  createProduct,
  getAllProducts,
};

export default productService;
