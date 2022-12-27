import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { Booking, BookingsType } from '../../../ts/bookingTypes';
import { RootState } from '../../store';
import bookingService from './bookingService';

type InitialState = {
  booking: Booking | null;
  bookings: BookingsType[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string | unknown;
};
const initialState: InitialState = {
  booking: null,
  bookings: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

// GET ALL PRODUCTS
export const getAllBookings = createAsyncThunk('products/getAllBookings', async (_, thunkAPI) => {
  try {
    return await bookingService.getAllBookings();
  } catch (error: any) {
    // error message format
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder //GET ALL BOOKINGS
      .addCase(getAllBookings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBookings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.bookings = action.payload;
      })
      .addCase(getAllBookings.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload as string);
      });
  },
});

export const {} = bookingSlice.actions;

export default bookingSlice.reducer;
