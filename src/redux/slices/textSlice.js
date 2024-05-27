import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: localStorage.getItem("texts")
    ? JSON.parse(localStorage.getItem("texts"))
    : [],
};
// console.log(JSON.parse(localStorage.getItem("texts"))); // array

const textSlice = createSlice({
  name: "texts",
  initialState,
  reducers: {
    onAddText: (state, action) => {
      // console.log(state.data);
      // console.log(action.payload);
      state.data = [...state.data, action.payload];
    },
  },
});

export const { onAddText } = textSlice.actions;
export default textSlice.reducer;
