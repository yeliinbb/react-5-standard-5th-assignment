import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  //   {
  //     texts: localStorage.getItem("texts")
  //       ? JSON.parse(localStorage.getItem("texts"))
  //       : [],
  //   },
  {
    texts: JSON.parse(localStorage.getItem("texts")),
  },
];

const textSlice = createSlice({
  name: "texts",
  initialState,
  reducers: {
    onAddText: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { onAddText } = textSlice.actions;
export default textSlice.reducer;
