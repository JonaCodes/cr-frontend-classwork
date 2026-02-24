import { Button, Group, SimpleGrid, Stack, Title } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { resetVotes } from "../movieNightSlice";
import type { RootState } from "../../../app/store";
import DBCard from "./DashboardCard";

export default function MovieNightSummary() {
  const movies = useSelector((state: RootState) => state.movieNight.movies);
  const dispatch = useDispatch();

  const watchedCount = movies.filter((movie) => movie.watched).length;
  const totalVotes = movies.reduce((sum, movie) => sum + movie.votes, 0);
  const topMovie = [...movies].sort((a, b) => b.votes - a.votes)[0];

  return (
    <Stack gap="md">
      <Group justify="space-between" align="flex-start">
        <Title order={1}>Movie Night Poll</Title>

        <Button
          variant="subtle"
          color={"grape"}
          onClick={() => dispatch(resetVotes())}
        >
          Reset Votes
        </Button>
      </Group>

      <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="sm">
        <DBCard title="Movies" value={String(movies.length)} color="grape" />
        <DBCard title="Watched" value={String(watchedCount)} color="grape" />
        <DBCard title="Total Votes" value={String(totalVotes)} color="grape" />
        <DBCard title="Top Pick" value={topMovie?.title} color="yellow" />
      </SimpleGrid>
    </Stack>
  );
}
