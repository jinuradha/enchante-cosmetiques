import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gptSlice",
    initialState: {
        chatWithBot: false,
        searchedResult: null,
        gptProducts: []
    },
    reducers: {
        setChatWithBot: (state, actions) => {
            state.chatWithBot = !state.chatWithBot;
        },
        addBotSearchRes: (state, actions) => {
            state.searchedResult = actions.payload;
        },
        addGptProducts: (state, actions) => {
            state.gptProducts.push(actions.payload);
        }
    }
})

export const { setChatWithBot, addBotSearchRes, addGptProducts } = gptSlice.actions;

export default gptSlice.reducer;