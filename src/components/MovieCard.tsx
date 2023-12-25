import React from "react";

interface MovieCardProps {
  title: string;
  altText: string;
  imageUrl: string;
  largeImageUrl: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  altText,
  imageUrl,
  largeImageUrl,
}) => {
  return (
    <div className="movie-card">
      <h3>{title}</h3>
      <a href={imageUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={altText} />
      </a>
    </div>
  );
};

export default MovieCard;
