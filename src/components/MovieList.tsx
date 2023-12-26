import React, { useState, useEffect } from "react";
import axios from "axios";

import MovieCard from "./MovieCard";


interface Movie {
  id: string;
  title: string;
  poster_path: string;
}

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

        const response = await axios.get(apiUrl);

        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movieds: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movies) {
    return <div>List not found</div>;
  }

  return (
    <div>
      <h2>Popular Movies</h2>
      <ul>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            altText={movie.title}
            imageUrl={`https://www.themoviedb.org/t/p/w300/${movie.poster_path}`}
            largeImageUrl={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
          />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;