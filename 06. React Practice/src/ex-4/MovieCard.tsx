export default function MovieCard({
  movie,
  isFavorite,
  toggleFavorite,
}: {
  movie: { id: number; imageUrl: string; title: string };
  isFavorite: boolean;
  toggleFavorite: (movieId: number) => void;
}) {
  const toggle = () => toggleFavorite(movie.id);

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
          onClick={toggle}
        >
          {isFavorite ? "★" : "☆"}
        </button>
      </div>
    </div>
  );
}
