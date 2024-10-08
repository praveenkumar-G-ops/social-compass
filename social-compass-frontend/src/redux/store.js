import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './features/sidebar/sidebarSlice';
import userReducer from './features/user/userSlice';

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
    user: userReducer,
  },
});
