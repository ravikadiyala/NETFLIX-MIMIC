import { BG_IMG1 } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
    return (
        <div>
            <div className="fixed -z-10">
            <img src= {BG_IMG1}
               className=""
               alt = "background-img" />
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearch;