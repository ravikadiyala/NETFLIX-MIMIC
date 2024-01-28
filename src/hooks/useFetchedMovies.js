import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useFetchedMovies = () => {
    const dispatch = useDispatch();
    const getMovieListFromTMDBAPI = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
    const json = await data.json();
    console.log(json.results);
    dispatch(addMovies(json.results));
}
useEffect(() => {
    getMovieListFromTMDBAPI();
}, []);
}

export default useFetchedMovies;