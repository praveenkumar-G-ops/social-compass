import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sidebar/sidebarSlice';
import userReducer from './user/userSlice';

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
    user: userReducer,
  },
});
