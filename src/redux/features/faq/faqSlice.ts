import { FaqType } from './../../../ts/faqTypes';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { Faq } from '../../../ts/faqTypes';
import faqService from './faqServices';

type InitialState = {
  faq: Faq | null;
  faqs: [];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string | unknown;
};
const initialState: InitialState = {
  faq: null,
  faqs: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

// GET ALL BOOKINGS.
export const getAllFaqs = createAsyncThunk('faq/getAllFaqs', async (_, thunkAPI) => {
  try {
    return await faqService.getAllFaqs();
  } catch (error: any) {
    // error message format
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});

const faqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder //GET ALL BOOKINGS
      .addCase(getAllFaqs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllFaqs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.faqs = action.payload;
      })
      .addCase(getAllFaqs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload as string);
      });
  },
});

export const {} = faqSlice.actions;

export default faqSlice.reducer;
