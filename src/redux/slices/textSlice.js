import { createSlice } from "@reduxjs/toolkit";

// 관리해야하는 데이터가 여러 개일 경우에 객체형태{}로 가져오지만 하나라면 그럴 필요 없음.
// const initialState = {
//   data: localStorage.getItem("texts")
//     ? JSON.parse(localStorage.getItem("texts"))
//     : [],
// };
const initialState = localStorage.getItem("texts")
  ? JSON.parse(localStorage.getItem("texts"))
  : [];
// console.log(JSON.parse(localStorage.getItem("texts"))); // array

const textSlice = createSlice({
  name: "texts",
  initialState,
  reducers: {
    // action 객체를 만들어내는 함수
    addText: (state, action) => {
      // console.log(state.data);
      // console.log(action.payload);
      // state.data = [...state.data, action.payload];
      const newText = action.payload;
      // immers.js가 내장되어있기 때문에 mutable하게 코드를 작성해도 가능
      state.push(newText);
    },
  },
});

export const { addText } = textSlice.actions;
// default로 가져올 경우 import할 때 이름 변경 가능
export default textSlice.reducer;
