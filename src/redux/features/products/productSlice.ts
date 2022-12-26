import { Product, ProductType } from '../../../ts/productTypes';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import productService from './productServices';
import { RootState } from '../../store';

type State = {
  product: Product | null;
  products: ProductType[];
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

// GET ALL PRODUCTS
export const getAllProducts = createAsyncThunk('products/getAllProducts', async (_, thunkAPI) => {
  try {
    return await productService.getAllProducts();
  } catch (error: any) {
    // error message format
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});
// DELETE A PRODUCT
export const deleteProduct = createAsyncThunk('products/delete', async (id: string, thunkAPI) => {
  try {
    return await productService.deleteProduct(id);
  } catch (error: any) {
    // error message format
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});

// ProductSlice------------
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
        state.isError = false;
        state.products.unshift(action.payload);
        toast.success('Product added successfully');
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload as string);
      }) //GET ALL PRODUCTS
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload as string);
      }) //DELETE PRODUCT
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success('Product deleted');
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload as string);
      });
  },
});
// ACTIONS-
export const { SET_PRODUCTS } = productSlice.actions;
//STATE
export const selectIsLoading = (state: RootState) => state.product.isLoading;
export default productSlice.reducer;
