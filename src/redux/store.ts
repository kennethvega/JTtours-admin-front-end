import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import productReducer from './features/products/productSlice';
import filterReducer from './features/products/filterSlice';
import bookingReducer from './features/bookings/bookingSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    filter: filterReducer,
    booking: bookingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
