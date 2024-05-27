import { createSlice } from "@reduxjs/toolkit";

const initialState =
  // {
  //   data: localStorage.getItem("texts")
  //     ? JSON.parse(localStorage.getItem("texts"))
  //     : [],
  // };
  {
    data: JSON.parse(localStorage.getItem("texts")),
  };

const textSlice = createSlice({
  name: "texts",
  initialState,
  reducers: {
    onAddText: (state, action) => {
      console.log(state.data);
      console.log(action.payload);
      return [...state, action.payload];
    },
  },
});

export const { onAddText } = textSlice.actions;
export default textSlice.reducer;
