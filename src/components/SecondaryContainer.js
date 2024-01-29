import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector(store => store?.movies);

    console.log(movies);
    return (
        <div className="bg-black">
            <div className=" -mt-52 relative z-20 ">
                <MovieList title = {"Now Playing"} movies = {movies.moviesList}/>
                <MovieList title = {"Trending"} movies = {movies.popularMoviesList}/>
                <MovieList title = {"Popular"} movies = {movies.moviesList}/>
                <MovieList title = {"Recommended"} movies = {movies.moviesList}/>
                <MovieList title = {"Documents"} movies = {movies.moviesList}/>
            </div> 
        </div>
    )
}

export default SecondaryContainer;