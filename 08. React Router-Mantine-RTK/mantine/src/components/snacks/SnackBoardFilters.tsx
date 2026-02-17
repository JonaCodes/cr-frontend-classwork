import { Checkbox, Popover, Stack, ActionIcon, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

export default function SnackBoardFilters() {
  return (
    <Popover withArrow shadow="md" position="bottom-end">
      <Popover.Target>
        <ActionIcon variant="subtle" size="compact-sm">
          <Text size="xs">Filters</Text>
          <IconChevronDown size={16} />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown>
        <Stack>
          <Checkbox label="Only vegetarian" />
          <Checkbox label="Only kosher" />
          <Checkbox label="Hide low stock" />
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}
