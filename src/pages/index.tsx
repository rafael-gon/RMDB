import React, { useEffect, useState, useRef } from "react";
import Movies from "../components/movies";
import Gender from "../components/gender";
import api from "../api";
import { FaSearch } from 'react-icons/fa'
import Logo from "../components/logo";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const observer = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const resMovies = await api.get("discover/movie", {
        params: {
          sort_by: "popularity.desc",
          page: currentPage,
          query: `%${search}%`,
        },
      });
      const newMovies = resMovies.data.results.filter((movie) => !movies.find((m) => m.id === movie.id));
      setMovies((prevMovies) => [...prevMovies, ...newMovies]);
      setTotalPages(resMovies.data.total_pages);

      const resGenres = await api.get("genre/movie/list");
      setGenres(resGenres.data.genres);
    };
    fetchData();
  }, [currentPage, search, movies]);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && currentPage < totalPages) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    }, { root: null, rootMargin: "20px", threshold: 1.0 });

    if (observer.current && totalPages > currentPage) {
      observer.current.observe(document.querySelector("#scrollObserver"));
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [currentPage, totalPages]);

  const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));
  const uniqueMovies = filteredMovies.reduce((uniqueMovies, movie) => {
    const isDuplicate = uniqueMovies.find((uniqueMovie) => uniqueMovie.id === movie.id);
    if (!isDuplicate) {
      uniqueMovies.push(movie);
    }
    return uniqueMovies;
  }, []);

  return (
    <div className="flex flex-col min-h-screen gap-8 p-6 bg-background-primary text-foreground items-center">

      <Logo />

      <div className="flex items-center gap-2 bg-white py-1 px-2 rounded">
        <FaSearch className="text-background-primary"/>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-background-primary outline-none"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {uniqueMovies?.map((movie) => (
          <Movies
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.release_date?.slice(0, 4)}
            desc={movie.overview}
            rate={movie.vote_average}
            poster={movie.poster_path}
            gender={movie.genre_ids.map((genreId) => (
              <Gender key={genreId} gender={genres.find((genre) => genre.id === genreId)?.name} />
            ))}
          />
        ))}
      </div>

      <div id="scrollObserver" style={{ visibility: "hidden" }} />
    </div>
  );
}
