/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import request from "../request";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(request.requestPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const randomMovie =
    movies.length > 0
      ? movies[Math.floor(Math.random() * movies.length)]
      : null;

  console.log(randomMovie);

  const overviewText = (text, num) => {
    if (text?.length > num) {
      return text.slice(0, num) + " ...";
    } else {
      return text;
    }
  };

  return (
    <>
      <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path}`}
            alt={randomMovie?.title}
          />
          <div className="absolute w-full top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-semibold">
              {randomMovie?.title}
            </h1>
            <div className="my-4">
              <button className="bg-white border border-black text-black px-4 py-2">
                Play
              </button>
              <button className="bg-black border  border-white ml-4  px-4 py-2">
                Watch Later
              </button>
            </div>
            <p className="text-gray-400 text-sm">
              Released : {randomMovie?.release_date}
            </p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] text-gray-200">
              {overviewText(randomMovie?.overview, 140)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
