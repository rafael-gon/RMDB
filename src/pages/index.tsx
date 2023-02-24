import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import Movies from "../components/movies";
import Gender from "../components/gender";
import PageSelector from "../components/pageSelector";
import Logo from "../components/logo";


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
  const [genres, setGenres] = useState([]);
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

    api
      .get("genre/movie/list")
      .then((res) => {
        setGenres(res.data.genres);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [currentPage]);


  return (
    <div className='flex flex-col gap-8 p-6 bg-background-primary text-foreground items-center'>
      <Logo />

      <PageSelector back={() => setCurrentPage(currentPage - 1)} forward={() => setCurrentPage(currentPage + 1)} page={currentPage} total={totalPages}/>
      

      {movies.map((movie) => (
        <div key={movie.id}>
          <p></p>
          <Movies id={movie.id} title={movie.title} adult={movie.adult} year={movie.release_date} desc={movie.overview} rate={movie.vote_average} poster={movie.poster_path} gender={movie.genre_ids.map((genreId) => (
            <Gender key={genreId} gender={genres.find((genre) => genre.id === genreId)?.name} />
          ))}
          />
        </div>
      ))}

      <PageSelector up="#" back={() => setCurrentPage(currentPage - 1)} forward={() => setCurrentPage(currentPage + 1)} page={currentPage} total={totalPages}/>
    </div>
  );
}
