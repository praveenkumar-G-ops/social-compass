import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: 'Guest',
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    logoutUser: (state) => {
      state.username = 'Guest'; 
    }
  }
});

export const { setUsername,logoutUser } = userSlice.actions;
export default userSlice.reducer;
