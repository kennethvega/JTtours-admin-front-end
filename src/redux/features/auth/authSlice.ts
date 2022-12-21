import { RootState } from './../../store';
import { createSlice } from '@reduxjs/toolkit';

type UserType = {
  name: string;
  email: string;
  admin: boolean;
};
type InitialState = {
  isLoggedIn: boolean;
  name: string;
  user: UserType;
  // userID: string;
};

const name = JSON.parse(localStorage.getItem('name') || '{}');

const initialState: InitialState = {
  isLoggedIn: false,
  name: name ? name : '',
  user: {
    name: '',
    email: '',
    admin: false,
  },
  // userID: '',
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SET_LOGIN(state, action) {
      state.isLoggedIn = action.payload; // boolean
    },
    SET_NAME(state, action) {
      localStorage.setItem('name', JSON.stringify(action.payload)); //set name to localStorage
      state.name = action.payload;
    },
    SET_USER(state, action) {
      const profile = action.payload;
      state.user.name = profile.name;
      state.user.email = profile.email;
      state.user.admin = profile.name;
    },
  },
});

// ACTIONS/SETTER
export const { SET_LOGIN, SET_NAME, SET_USER } = authSlice.actions;
// STATE
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectName = (state: RootState) => state.auth.name;
export const selectUser = (state: RootState) => state.auth.user;
export default authSlice.reducer;
