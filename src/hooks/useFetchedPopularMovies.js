import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useFetchedPopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovieListFromTMDBAPI = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
    const json = await data.json();
    console.log(json.results);
    dispatch(addPopularMovies(json.results));
}
useEffect(() => {
    getPopularMovieListFromTMDBAPI();
}, []);
}

export default useFetchedPopularMovies;