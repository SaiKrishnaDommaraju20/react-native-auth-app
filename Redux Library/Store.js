import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

// Create the Redux store
const store = configureStore({
  reducer: {
    auth: authReducer, // Add the auth slice
  },
});

export default store;