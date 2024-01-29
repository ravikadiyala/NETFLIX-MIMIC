import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        moviesList : null,
        popularMoviesList: null,
        trailerList : null
    },
    reducers : {
        addMovies : (state, action) => {
            state.moviesList = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.popularMoviesList = action.payload;
        },
        addTrailers: (state, action) => {
            state.trailerList = action.payload;
        } 
    }
})

export const {addMovies , addTrailers, addPopularMovies} = moviesSlice.actions;

export default moviesSlice.reducer;