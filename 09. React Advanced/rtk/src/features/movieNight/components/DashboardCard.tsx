import { Card, Text } from "@mantine/core";

export default function DBCard({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: string;
}) {
  return (
    <Card withBorder radius="md" padding="sm">
      <Text size="xs" c="dimmed">
        {title}
      </Text>
      <Text fw={700} size="lg" c={color}>
        {value}
      </Text>
    </Card>
  );
}
