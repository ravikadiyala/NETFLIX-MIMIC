import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.moviesList)

    if (!movies) return;

    const mainMovie = movies[0];
    
    return (
        <div> 
            <VideoTitle mainMovie={mainMovie}/>
            <VideoBackground movieId = {mainMovie.id}/>
        </div>
    )  
}

export default MainContainer;