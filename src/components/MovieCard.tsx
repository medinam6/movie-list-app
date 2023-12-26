import React from "react";
import { Link } from 'react-router-dom';

interface MovieCardProps {
  id: string;
  title: string;
  altText: string;
  imageUrl: string;
  largeImageUrl: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  altText,
  imageUrl,
  largeImageUrl,
}) => {
  return (
    <div className="movie-card">
      <Link to={`/movies/${id}`}>
        <h3>{title}</h3>
      </Link>
      <a href={largeImageUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={altText} />
      </a>
    </div>
  );
};

export default MovieCard;
