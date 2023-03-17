import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from './counterSlice'
import { formSlice } from "./formSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    form: formSlice
  },
})

export default store;
