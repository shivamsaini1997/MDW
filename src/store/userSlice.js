

// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    items: {
      module_list: [],
      recommended_obj: [],
      trending_obj: []
    }
  },
  reducers: {
    login(state, action) {
      // Update user data based on the payload (assuming appropriate structure)
      state.user = action.payload;
    },
   
    addItem: (state, action) => {
      const { key, data } = action.payload;
     
      if (!state.items[key]) {
        state.items[key] = [];
      }
      state.items[key].push(data);
    },
    removeItem: (state, action) => {
      const { key, id } = action.payload;
      state.items[key] = state.items[key].filter(item => item.id !== id);
    }
  },
});

export const { addItem, removeItem, login } = userSlice.actions;
export default userSlice.reducer;


