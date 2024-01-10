import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
       name :"counterApp",
       initialState:{
        value:0
       },
       reducers:{
        increment : (state,action)=>{
            state.value=state.value+action.payload;
        },
        decrement : (state,action)=>{
            state.value<=0 ?
            state.value=state.value:
            state.value=state.value-action.payload;
        },
        reset:(state)=>{
            state.value=0;
        }
       }
});
export const {increment} = counterSlice.actions;
export const {decrement} = counterSlice.actions;
export const {reset} = counterSlice.actions;
export default counterSlice.reducer;