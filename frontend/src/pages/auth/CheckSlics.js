// store.js

import { configureStore, createSlice } from '@reduxjs/toolkit';
import { getToken } from '../../services/LocalStorageServices';


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: !!getToken(),
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export const { login, logout } = authSlice.actions;

export default store;
