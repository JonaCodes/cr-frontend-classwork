import { Container, Divider, Stack } from "@mantine/core";
import MovieNightControls from "./components/MovieNightControls";
import MovieNightList from "./components/MovieNightList";
import MovieNightSummary from "./components/MovieNightSummary";

export default function MovieNightPage() {
  return (
    <Container size="md" py="xl">
      <Stack gap="md">
        <MovieNightSummary />
        <Divider />

        <MovieNightControls />
        <MovieNightList />
      </Stack>
    </Container>
  );
}
