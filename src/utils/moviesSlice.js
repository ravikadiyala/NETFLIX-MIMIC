import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        moviesList : null,
        trailerList : null
    },
    reducers : {
        addMovies : (state, action) => {
            state.moviesList = action.payload;
        },
        addTrailers: (state, action) => {
            state.trailerList = action.payload;
        } 
    }
})

export const {addMovies , addTrailers} = moviesSlice.actions;

export default moviesSlice.reducer;