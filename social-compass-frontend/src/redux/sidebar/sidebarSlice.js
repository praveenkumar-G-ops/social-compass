import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebarItem: 'Dashboard',
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setSidebarItem: (state, action) => {
      state.sidebarItem = action.payload;
    },
  },
});

export const { setSidebarItem } = sidebarSlice.actions;
export default sidebarSlice.reducer;
