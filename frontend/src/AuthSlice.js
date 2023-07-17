import { createSlice } from '@reduxjs/toolkit';
import { removeToken, storeToken, getToken } from './services/LocalStorageServices';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      storeToken('token')
      
    },
    logout: (state) => {
      state.isLoggedIn = false;
      removeToken()
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;