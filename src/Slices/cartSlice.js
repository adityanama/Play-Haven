import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    total: localStorage.getItem("total")
        ? JSON.parse(localStorage.getItem("total"))
        : 0,
    totalItems: localStorage.getItem("totalItems")
        ? JSON.parse(localStorage.getItem("totalItems"))
        : 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        setTotalItems(state,value){
            if(value.payload == 1)
                state.totalItems++;
            else if(value.payload == -1)
                state.totalItems--;
            else
                state.totalItems = 0
        },
    }
});

export const { setTotalItems, resetTotal } = cartSlice.actions;
export default cartSlice.reducer