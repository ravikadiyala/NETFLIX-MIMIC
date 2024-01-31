
import Header from "./Header";
import useFetchedMovies from "../hooks/useFetchedMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useFetchedPopularMovies from "../hooks/useFetchedPopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {

    useFetchedMovies();
    useFetchedPopularMovies();
    const showGptSearchView = useSelector(store => store.gpt)
    return (
        <div>
            <Header />
            {
                showGptSearchView?.showGptSearchView ? <GptSearch /> :
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            }
            
        </div>
        
    )
}
export default Browse;