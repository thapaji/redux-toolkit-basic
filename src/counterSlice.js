import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increase: (state) => {
      state.count++;
    },
    decrease: (state) => {
      state.count--;
    },
  },
});

const { reducer, action } = counterSlice;

export default reducer;
