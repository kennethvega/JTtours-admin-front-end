import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { Customer, CustomerType } from '../../../ts/testimonialTypes';
import { RootState } from '../../store';
import testimonialService from './testimonialServices';

type State = {
  customer: Customer | null;
  testimonials: CustomerType[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string | unknown;
};

const initialState: State = {
  customer: null,
  testimonials: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

// CREATE NEW CUSTOMER REVIEW
export const createTestimonial = createAsyncThunk('testimonial/create', async (formData: FormData, thunkAPI) => {
  try {
    return await testimonialService.createTestimonial(formData);
  } catch (error: any) {
    // error message format
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});

const testimonialSlice = createSlice({
  name: 'testimonial',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTestimonial.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTestimonial.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.testimonials.push(action.payload);
        toast.success('Customer review added successfully!');
      })
      .addCase(createTestimonial.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload as string);
      });
  },
});

export const {} = testimonialSlice.actions;
export const selectIsLoading = (state: RootState) => state.testimonial.isLoading;
export default testimonialSlice.reducer;
