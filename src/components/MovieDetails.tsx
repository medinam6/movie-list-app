import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface MovieDetailsData {
    title: string;
    overview: string;
    // popularity: number;
    // release_data: string;
    // vote_average: number;
    // vote_count: number; 
}

const MovieDetails: React.FC = () => {
    const { movieId } = useParams<{ movieId: string }>();
    const [movieDetails, setMovieDetails] = useState<MovieDetailsData | null>(null);
    const [loading, setLoading] = useState(true);


useEffect(() => {
    const fetchMovieDetails = async () => {
        try {
            const apiKey = process.env.REACT_APP_API_KEY;
            const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

            const response = await axios.get(apiUrl);

            setMovieDetails(response.data);
        } catch (error) {
            console.error('Error fetching movie details:', error);
        } finally {
            setLoading(false);
        }
    };

    fetchMovieDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <p>{movieDetails.overview}</p>
    </div>
  )
  
}

export default MovieDetails;