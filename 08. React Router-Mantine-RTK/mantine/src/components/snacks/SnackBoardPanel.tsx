import { Group, Paper, ScrollArea, Stack, Title } from "@mantine/core";
import { snacks } from "../../data/gameNightData";
import SnackBoardCard from "./SnackBoardCard";
import SnackSuppliesTable from "./SnackSuppliesTable";
import SnackBoardFilters from "./SnackBoardFilters";

const TABLE_HEIGHT = 180;

export default function SnackBoardPanel() {
  return (
    <Paper
      withBorder
      radius="md"
      p="md"
      style={{ height: `calc(100vh - ${TABLE_HEIGHT}px)`, overflow: "hidden" }}
    >
      <Stack h="100%">
        <Group justify="space-between">
          <Title order={4}>Snack Board</Title>
          <SnackBoardFilters />
        </Group>

        <ScrollArea>
          <Stack>
            {snacks.map((snack) => (
              <SnackBoardCard key={snack.name} snack={snack} />
            ))}
          </Stack>
        </ScrollArea>

        <SnackSuppliesTable height={TABLE_HEIGHT} />
      </Stack>
    </Paper>
  );
}
