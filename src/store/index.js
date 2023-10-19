import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './slices/todoSlice.js';

export default configureStore({
    reducer: {
      todo: todoSlice,
  }
})