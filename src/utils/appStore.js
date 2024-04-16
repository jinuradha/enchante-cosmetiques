import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import gptReducer from "./gptSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        gptSlice: gptReducer
    }
});
export default appStore;