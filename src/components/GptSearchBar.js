import openai from "../utils/openai";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { addGptMovies } from "../utils/gptSlice";
import { API_OPTIONS } from "../utils/constants";

const GptSearchBar = () => {
    const searchText = useRef();
    const languageKey = useSelector(store => store?.lang?.language)
    const dispatch = useDispatch();

    const getTMDBResultsForGptMovies = async (movie) => {
        const tmdbData = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS)
        const tmdbMovieResults = await tmdbData.json();
        console.log(tmdbMovieResults.results);
        return tmdbMovieResults.results;
    }
    const handleSearchButtonClick = async () => {
        const gptQuery = "Act as a Movie Recommendation system and give me results for query :" + searchText.current.value + "give me 5 results with comma seperated like Ex: Dhruva, Jalsa, khushi, Mass, Sye"
        const gptData = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });

        const gptMovieResults = gptData?.choices[0]?.message?.content.split(",");
        console.log(gptMovieResults);
        const promiseArray = gptMovieResults.map(movie => {
            return getTMDBResultsForGptMovies(movie)
        })

        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults)
        dispatch(addGptMovies({movieNames: gptMovieResults, movieResults: tmdbResults}));


    }
    return (
        <div className="p-[10%] flex justify-center">
            <form className="bg-black w-1/2 grid grid-cols-12" onSubmit={e => e.preventDefault()}>
                <input ref = {searchText} className="p-4 m-4 col-span-8" type="text" placeholder={lang[languageKey].gptSearchPlaceHolder} />
                <button className="py-2 px-4 col-span-4 m-4 bg-red-600 text-white rounded-lg" onClick = {handleSearchButtonClick}> {lang[languageKey].search} </button>
            </form>
        </div>
    )
}

export default GptSearchBar;