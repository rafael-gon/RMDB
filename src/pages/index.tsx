import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import axios from "axios";

const apiKey = "8820f597ad57ecd4cdb03eda10adcbeb";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["api_key"] = apiKey;
  return config;
});

export default function App() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    api
      .get("discover/movie", {
        params: {
          sort_by: "popularity.desc",
          page: currentPage,
        },
      })
      .then((res) => {
        setMovies(res.data.results);
        setTotalPages(res.data.total_pages);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [currentPage]);

  return (
    <div>
      <h1 id="">RMDB</h1>
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <IoIosArrowBack />
      </button>
      {currentPage}
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <IoIosArrowForward />
      </button>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
          <p>{movie.overview}</p>
          <p>{movie.vote_average}</p>
        </div>
      ))}

      <a href="#">

        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <IoIosArrowBack />
        </button>
      </a>
      {currentPage}
      <a href="#">
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <IoIosArrowForward />
        </button>
      </a>
    </div>
  );
}
