import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  myUser: null,
};

const myUserSlice = createSlice({
  name: 'myUser',
  initialState,
  reducers: {
    login(state, action) {
      // Update user data based on the payload (assuming appropriate structure)
      state.myUser = action.payload;
    },
    logout(state) {
      state.myUser = null;
    },
  },
});

// Export the action creators for login and logout
export const { login, logout } = myUserSlice.actions;

// Export the reducer for use in the Redux store
export default myUserSlice.reducer;