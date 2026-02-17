import { SimpleGrid } from "@mantine/core";
import SnackBoardPanel from "./snacks/SnackBoardPanel";
import SnackPlannerPanel from "./snacks/SnackPlannerPanel";

export default function SnacksTab() {
  return (
    <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
      <SnackBoardPanel />
      <SnackPlannerPanel />
    </SimpleGrid>
  );
}
