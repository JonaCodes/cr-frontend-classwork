import {
  Button,
  Group,
  MultiSelect,
  Paper,
  Select,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";

export default function SnackPlannerPanel() {
  return (
    <Paper withBorder radius="md" p="md">
      <Stack>
        <Title order={4}>Snack Planner</Title>
        <TextInput label="Snack item" placeholder="Add snack or drink" />
        <Group grow>
          <Select
            label="Dietary category"
            placeholder="Select one"
            data={["Vegetarian", "Vegan", "Dairy", "Kosher", "Gluten Free"]}
          />
          <Select
            label="Stock status"
            placeholder="Choose status"
            data={["Plenty", "Low", "Restock"]}
          />
        </Group>
        <MultiSelect
          label="Assigned shoppers"
          placeholder="Select players"
          data={["Ari Bloom", "Noa Levi", "Dani Katz", "Maya Cohen"]}
        />
        <Button>Add Snack Item</Button>
      </Stack>
    </Paper>
  );
}
