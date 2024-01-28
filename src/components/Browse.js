
import Header from "./Header";
import useFetchedMovies from "../hooks/useFetchedMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

    useFetchedMovies();
    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
            <div> Browse Page</div>
        </div>
        
    )
}
export default Browse;