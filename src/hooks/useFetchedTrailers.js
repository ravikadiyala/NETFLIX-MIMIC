import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailers } from "../utils/moviesSlice";

const useFetchedTrailers = (movieId) => {
  const dispatch = useDispatch();
  // fetch Trailer
  const getTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const trailers = json.results.filter((obj) => {
      return obj.type === "Trailer";
    });

    const mainTrailer = trailers.length ? trailers[0] : json.results[0];
    dispatch(addTrailers(mainTrailer));
  };
  useEffect(() => {
    getTrailer();
  }, []);
};

export default useFetchedTrailers;
