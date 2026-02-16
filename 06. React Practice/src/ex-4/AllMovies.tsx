import MovieCard from "./MovieCard";

export default function AllMovies({
  movies,
  starredMovieIds,
  toggleFavorite,
}: {
  movies: { id: number; imageUrl: string; title: string }[];
  starredMovieIds: number[];
  toggleFavorite: (movieId: number) => void;
}) {
  return (
    <>
      <h3>All Movies</h3>

      <div className="movies-grid">
        {movies.map((movie) => {
          const isFavorite = starredMovieIds.includes(movie.id);

          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={isFavorite}
              toggleFavorite={toggleFavorite} // callback function
            />
          );
        })}
      </div>
    </>
  );
}
