import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    email: '',
    gender: null,
  },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateGender: (state, action) => {
      state.gender = action.payload;
    },
  },
});

export const { updateName, updateEmail, updateGender } = formSlice.actions;
