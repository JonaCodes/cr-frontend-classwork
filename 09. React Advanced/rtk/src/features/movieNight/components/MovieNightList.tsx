import { Button, Group, Paper, Stack, Text } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { toggleWatched } from "../movieNightSlice";
import type { RootState } from "../../../app/store";
import Movie from "./Movie";

export default function MovieNightList() {
  const movies = useSelector((state: RootState) => state.movieNight.movies);
  const filter = useSelector((state: RootState) => state.movieNight.filter);

  const dispatch = useDispatch();

  const visibleMovies = movies.filter((movie) => {
    if (filter === "watched") {
      return movie.watched;
    }

    if (filter === "unwatched") {
      return !movie.watched;
    }

    return true;
  });

  if (visibleMovies.length === 0) {
    return <Text c="dimmed">No movies in this filter.</Text>;
  }

  return (
    <Stack gap="sm">
      {visibleMovies.map((movie) => (
        <Paper withBorder radius="md" p="md" py={"xs"} key={movie.id}>
          <Group justify="space-between" align="center">
            <Movie movie={movie} />

            <Button
              variant={movie.watched ? "transparent" : "subtle"}
              color={"yellow"}
              bg={movie.watched ? "transparent" : ""}
              disabled={movie.watched}
              onClick={() => dispatch(toggleWatched(movie.id))}
            >
              Mark Watched
            </Button>
          </Group>
        </Paper>
      ))}
    </Stack>
  );
}
