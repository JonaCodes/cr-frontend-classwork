import { Badge, Button, Group, Stack, Text } from "@mantine/core";
import { useDispatch } from "react-redux";
import { downvoteMovie, upvoteMovie } from "../movieNightSlice";
import type { Movie } from "../movieNightSlice";

export default function Movie({ movie }: { movie: Movie }) {
  const dispatch = useDispatch();

  return (
    <Stack gap={2}>
      <Badge
        variant="subtle"
        size={"xs"}
        color={movie.watched ? "grape.8" : "grape.2"}
        pl={0}
      >
        {movie.watched ? "Watched" : "Not watched"}
      </Badge>
      <Text fw={600} style={{ flex: 1 }}>
        {movie.title} ({movie.votes})
      </Text>
      <Group gap={0}>
        <Button
          size="xs"
          pl={0}
          variant="transparent"
          color={"yellow.8"}
          onClick={() => dispatch(upvoteMovie(movie.id))}
        >
          Vote
        </Button>
        <Button
          size="xs"
          pr={0}
          variant="transparent"
          color={"yellow.2"}
          onClick={() => dispatch(downvoteMovie(movie.id))}
        >
          Unvote
        </Button>
      </Group>
    </Stack>
  );
}
