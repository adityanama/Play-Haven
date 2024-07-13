import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    cartItems : 0,
    loading: false,
};

const profileSlice = createSlice({
    name: "profile",
    initialState: initialState,
    reducers: {
        setUser(state, value) {
            state.user = value.payload;
            localStorage.setItem("user", JSON.stringify(value.payload));
        },
        setCartItems(state, value){
            state.cartItems = value.payload;
        },
        setLoading(state, value){
            state.loading = value.payload;
        }
    }
});

export const { setUser, setLoading, setCartItems } = profileSlice.actions;
export default profileSlice.reducer