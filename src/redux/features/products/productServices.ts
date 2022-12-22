import { Product } from '../../../ts/productTypes';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/products`;
// CREATE NEW PRODUCT
const createProduct = async (formData: Product | void) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};

const productService = {
  createProduct,
};

export default productService;
