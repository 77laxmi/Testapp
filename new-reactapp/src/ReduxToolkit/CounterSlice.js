


// import { createSlice } from "@reduxjs/toolkit";


// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0,
//   },
//   reducers: {
//     increment: (state) => {
//       state.value ++;
//     },
//     decrement: (state) => {
//       state.value --;
//     },
//     asyncVal:(state,action)=>{
//       state.value = action.payload
//     }
//   },
// });

// export const { increment, decrement ,asyncVal} = counterSlice.actions;

//  export const getAsyncNum = (value) => (dispatch)=> {
//   setTimeout(()=>{
//    dispatch(asyncVal(value))
//   },1000)

// }
// export default counterSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const counterSlice = createSlice({
//   name:'counter',
//   initialState:{
//     value:0,
//   },
//   reducers:{
//     increment:(state)=>{
//     state.value++
//     },
//     decrement:(state)=>{
//       state.value--

//     }
//   }

// })
//  export const {increment,decrement} = counterSlice.actions;

//  export default counterSlice.reducer

//-----------------------------------------------------------------------------------------

import { createSlice } from "@reduxjs/toolkit";

 export const counterSlice = createSlice({
  name:'counter',
  initialState:{
    value:0
  },
  reducers:{
    increment:(state)=>{
       state.value++
    },
    decrement:(state)=>{
       state.value--
    }
  }

})

export const {increment,decrement} = counterSlice.actions;
export default counterSlice.reducer;




























