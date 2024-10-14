import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState: 0,
    name: 'counter',
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1
    }
})

export const {increment, decrement} = cartSlice.actions;
export default cartSlice.reducer;