import { RootState } from './../../store';
import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  isLoggedIn: boolean;
};

const initialState: InitialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

// ACTIONS
export const {} = authSlice.actions;
// STATE
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export default authSlice.reducer;
