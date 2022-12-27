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

// GET ALL BOOKINGS.
export const getAllBookings = createAsyncThunk('booking/getAllBookings', async (_, thunkAPI) => {
  try {
    return await bookingService.getAllBookings();
  } catch (error: any) {
    // error message format
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});

// GET A SINGLE BOOKING
export const getBooking = createAsyncThunk('booking/getBooking', async (id: string, thunkAPI) => {
  try {
    return await bookingService.getBooking(id);
  } catch (error: any) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});

type UpdateStatusProps = {
  id: string;
  status: boolean;
};
// UPDATE BOOKING STATUS
export const updateStatus = createAsyncThunk('booking/updateStatus', async ({ id, status }: UpdateStatusProps, thunkAPI) => {
  try {
    return await bookingService.updateStatus(id, status);
  } catch (error: any) {
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
      }) //GET A SINGLE BOOKING
      .addCase(getBooking.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.booking = action.payload;
      })
      .addCase(getBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload as string);
      }) // UPDATE BOOKING STATUS
      .addCase(updateStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success('Status updated!');
      })
      .addCase(updateStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload as string);
      });
  },
});

export const {} = bookingSlice.actions;

export default bookingSlice.reducer;
