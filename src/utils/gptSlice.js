import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSearchView : false,
        movieNames : null,
        movieResults: null
    },
    reducers : {
        toggleShowGptSearchView : (state, action) => {
            state.showGptSearchView = !state.showGptSearchView;
        },
        addGptMovies : (state, action) => {
            const {movieNames, movieResults} = action.payload
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
})

export const {toggleShowGptSearchView, addGptMovies} = gptSlice.actions;

export default gptSlice.reducer;