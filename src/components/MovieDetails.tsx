import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface MovieDetailsData {
  title: string;
  overview: string;
  popularity: number;
  release_date: string;
  vote_average: number;
  vote_count: number;
}

const MovieDetails: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movieDetails, setMovieDetails] = useState<MovieDetailsData | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

        const response = await axios.get(apiUrl);

        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movieDetails) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h2>{movieDetails.title}</h2>

      <div>
        <h3>Overview</h3>
        <p>{movieDetails.overview}</p>
      </div>

      <div>
        <h3>Popularity</h3>
        <div>{movieDetails.popularity}</div>
      </div>

      <div>
        <h3>Release Date</h3>
        <div>{movieDetails.release_date}</div>
      </div>

      <div>
        <h3>Vote Average</h3>
        <div>{movieDetails.vote_average}</div>
      </div>

      <div>
        <h3>Vote Count</h3>
        <div>{movieDetails.vote_count}</div>
      </div>

      <Link to="/">
        <h3>Back to Home</h3>
      </Link>
    </div>
  );
};

export default MovieDetails;
