
import { Product, ProductType } from '../../../ts/productTypes';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import productService from './productServices';
import { RootState } from '../../store';

type State = {
  product: Product | null;
  products: Product[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string | unknown;
};
const initialState: State = {
  product: null,
  products: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

// CREATE NEW PRODUCT
export const createProduct = createAsyncThunk('products/create', async (formData: Product, thunkAPI) => {
  try {
    return await productService.createProduct(formData);
  } catch (error: any) {
    // error message format
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    SET_PRODUCTS(state, action) {
      console.log('products');
    },
  },
  // loading,success,error state asyncThunk
  extraReducers: (builder) => {
    builder //CREATE PRODUCT
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        console.log(action.payload);
        state.products.push(action.payload);
        toast.success('Product added successfully');
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload as string);
      });
  },
});
// ACTIONS
export const { SET_PRODUCTS } = productSlice.actions;
//STATE
export const selectIsLoading = (state: RootState) => state.product.isLoading;
export default productSlice.reducer;
