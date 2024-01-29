
import Header from "./Header";
import useFetchedMovies from "../hooks/useFetchedMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useFetchedPopularMovies from "../hooks/useFetchedPopularMovies";

const Browse = () => {

    useFetchedMovies();
    useFetchedPopularMovies();
    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
        
    )
}
export default Browse;