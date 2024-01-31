
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
    const languageKey = useSelector(store => store?.lang?.language)
    return (
        <div className="p-[10%] flex justify-center">
            <form className="bg-black w-1/2 grid grid-cols-12">
                <input className="p-4 m-4 col-span-8" type="text" placeholder={lang[languageKey].gptSearchPlaceHolder} />
                <button className="py-2 px-4 col-span-4 m-4 bg-red-600 text-white rounded-lg"> {lang[languageKey].search} </button>
            </form>
        </div>
    )
}

export default GptSearchBar;