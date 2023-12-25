import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieCard from './MovieCard';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    axios.get(apiUrl)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  return (
    <>
      <h2>Popular Movies</h2>
      <div>
        <ul>
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              altText={movie.title}
              imageUrl={`https://www.themoviedb.org/t/p/w300/${movie.poster_path}`}
              largeImageUrl={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
             />
          ))}
        </ul>
      </div>
    </>
  );
};

export default MovieList;

