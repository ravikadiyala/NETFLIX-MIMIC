import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({movie}) => {
    console.log(movie);
    return (
        <div className="w-40 pr-4">
            <img className = "" alt = "movie-poster" src = {IMG_CDN_URL + movie.poster_path} />
        </div>
    )
}

export default MovieCard;