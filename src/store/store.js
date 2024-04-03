import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import myUserSlice from './slices/myUserSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    myUser: myUserSlice
   
  },
});