import {
  Avatar,
  AvatarGroup,
  Badge,
  Card,
  Group,
  Progress,
  Stack,
  Text,
} from "@mantine/core";

interface SnackBoardCardProps {
  snack: {
    name: string;
    dietary: string;
    status: string;
    stockHealth: number;
    assignedShoppers: string[];
  };
}

const DIET_COLORS = {
  Vegetarian: "green",
  Vegan: "teal",
  Kosher: "violet",
  "Gluten Free": "cyan",
};

const getStockColor = (stockHealth: number) => {
  if (stockHealth >= 70) {
    return "green";
  } else if (stockHealth >= 30) {
    return "yellow";
  } else {
    return "red";
  }
};

export default function SnackBoardCard({ snack }: SnackBoardCardProps) {
  const dietaryColor = DIET_COLORS[snack.dietary as keyof typeof DIET_COLORS];
  const stockColor = getStockColor(snack.stockHealth);

  return (
    <Card withBorder radius="md" padding="sm">
      <Stack gap="sm">
        <Group justify="space-between">
          <Text fw={600}>{snack.name}</Text>
          <Badge color={dietaryColor} variant="light">
            {snack.dietary}
          </Badge>
        </Group>

        <Stack gap={4}>
          <Group justify="space-between">
            <Text size="xs" c="dimmed">
              Stock health
            </Text>
            <Text size="xs" fw={600} c={stockColor}>
              {snack.stockHealth}%
            </Text>
          </Group>
          <Progress value={snack.stockHealth} color={stockColor} radius="xl" />
        </Stack>

        <Group gap={4}>
          <AvatarGroup>
            {snack.assignedShoppers.map((shopper, index) => (
              <Avatar key={`${snack.name}-${index}`} src={shopper} size="sm" />
            ))}
          </AvatarGroup>
          <Text size="xs" c="dimmed">
            {snack.assignedShoppers.length} shoppers
          </Text>
        </Group>
      </Stack>
    </Card>
  );
}
