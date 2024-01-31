import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSearchView : false
    },
    reducers : {
        toggleShowGptSearchView : (state, action) => {
            state.showGptSearchView = !state.showGptSearchView;
        }
    }
})

export const {toggleShowGptSearchView} = gptSlice.actions;

export default gptSlice.reducer;