import {
  Button,
  Group,
  SegmentedControl,
  Stack,
  TextInput,
} from "@mantine/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, setFilter, type MovieFilter } from "../movieNightSlice";
import type { RootState } from "../../../app/store";

export default function MovieNightControls() {
  const currentFilter = useSelector(
    (state: RootState) => state.movieNight.filter,
  );

  const dispatch = useDispatch();

  const [newMovieTitle, setNewMovieTitle] = useState("");

  const handleAddMovie = () => {
    const title = newMovieTitle.trim();
    if (!title) return;

    dispatch(addMovie(title));
    setNewMovieTitle("");
  };

  const handleFilterChange = (value: string) => {
    dispatch(setFilter(value as MovieFilter));
  };

  return (
    <Stack gap="sm">
      <Group align="end" wrap="nowrap">
        <TextInput
          style={{ flex: 1 }}
          label="Suggest a movie"
          placeholder="The Matrix"
          value={newMovieTitle}
          onChange={(event) => setNewMovieTitle(event.currentTarget.value)}
        />
        <Button color="grape" onClick={handleAddMovie}>
          Add
        </Button>
      </Group>

      <SegmentedControl
        fullWidth
        color="grape"
        value={currentFilter}
        onChange={handleFilterChange}
        data={[
          { label: "All", value: "all" },
          { label: "Unwatched", value: "unwatched" },
          { label: "Watched", value: "watched" },
        ]}
      />
    </Stack>
  );
}
