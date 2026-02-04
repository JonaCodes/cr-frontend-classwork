import { useState } from "react";
import "./ex4.css";

export default function Ex4() {
  const movies = [
    {
      id: 1,
      title: "The Lion King",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWwKdahmkJpbNfahOGIhiWjHl1UBLKCHOrqO3BLdR-zxHtGMXf1tjX28xeN30fBl-XXz3-AQ&s=10",
    },
    {
      id: 2,
      title: "Fellowship of the Ring",
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSYHuKZScdd6RHhzh-IDKga3wfTTd9cPEe1Y2JUI5gjvaxgJc3O",
    },
    {
      id: 3,
      title: "Shrek",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_Lj-AwA3TKS-FSwZ8c8V0zDIA4cnGrMGz0tGfAzakmcYhWr6ndm6EXpSrYYXCprXW9d6&s=10",
    },
    {
      id: 4,
      title: "Jurassic Park",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1JuD1fDYYs7-IqHydpi304Jr3eZsBW9i58o6yTa7d3tGzKFJvcFGwatAtxLIhTZaWJ8tY&s=10",
    },
    {
      id: 5,
      title: "The Pink Panther",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBuCXHWcMMpM4hPxmTVOdvkQSyz2cnggCJ7AYleUTVs-EueVo6Wpdl0h18qTbROy-8YMtw&s=10",
    },
    {
      id: 6,
      title: "Inglorious Basterds",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BODZhMWJlNjYtNDExNC00MTIzLTllM2ItOGQ2NGVjNDQ3MzkzXkEyXkFqcGc@._V1_.jpg",
    },
  ];

  const [starredMovieIds, setStarredMovieIds] = useState<number[]>([]);

  function toggleFavorite(movieId: number) {
    const isMovieStarred = starredMovieIds.includes(movieId);

    if (!isMovieStarred) {
      setStarredMovieIds([...starredMovieIds, movieId]);
    } else {
      setStarredMovieIds(starredMovieIds.filter((id) => id !== movieId));
    }
  }

  const starredMovies = movies.filter((movie) =>
    starredMovieIds.includes(movie.id),
  );

  return (
    <div className="movies-page">
      <div className="favorites-header">
        <h3>Favorites ({starredMovieIds.length})</h3>

        <button className="clear-button" onClick={() => setStarredMovieIds([])}>
          Clear
        </button>
      </div>

      <div className="favorites-row">
        {starredMovies.length === 0 && (
          <p className="empty-text">No favorites yet</p>
        )}

        {starredMovies.map((movie) => (
          <img
            key={movie.id}
            className="favorite-image"
            src={movie.imageUrl}
            alt={movie.title}
          />
        ))}
      </div>

      <h3>All Movies</h3>

      <div className="movies-grid">
        {movies.map((movie) => {
          const isFavorite = starredMovieIds.includes(movie.id);

          return (
            <div
              key={movie.id}
              className={`movie-card ${isFavorite ? "favorite" : ""}`}
            >
              <img className="movie-image" src={movie.imageUrl} alt="" />

              <div className="movie-footer">
                <p className="movie-title">{movie.title}</p>

                <button
                  className={`favorite-button ${isFavorite ? "favorite" : ""}`}
                  onClick={() => toggleFavorite(movie.id)}
                >
                  {isFavorite ? "★" : "☆"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
