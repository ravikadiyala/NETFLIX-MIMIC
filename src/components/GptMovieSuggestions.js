import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
    const gpt = useSelector(store => store?.gpt)
    const {movieNames, movieResults} = gpt
    return (
        <div className="p-4 m-4 bg-black bg-opacity-80">
            <div>
                {
                    movieNames && movieNames.map((movie, index) => {
                        return <MovieList key = {movie} title = {movie} movies = {movieResults[index]}/>
                    })
                }
                
            </div>
        </div>   
    )
}

export default GptMovieSuggestions;