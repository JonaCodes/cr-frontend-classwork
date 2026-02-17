import {
  AppShell,
  Container,
  Group,
  Stack,
  Title,
  Text,
  Button,
  ThemeIcon,
  Indicator,
  Badge,
} from "@mantine/core";
import { IconDeviceGamepad2 } from "@tabler/icons-react";

export default function AppHeader() {
  return (
    <AppShell.Header>
      <Container size="lg" h="100%">
        <Group h="100%" justify="space-between">
          <Group>
            <ThemeIcon size={40} radius="md" variant="light">
              <IconDeviceGamepad2 size={22} />
            </ThemeIcon>
            <Stack gap={0}>
              <Title order={3}>Game Night Control Center</Title>
              <Text size="sm" c="dimmed">
                Friday, 8:00 PM
              </Text>
            </Stack>
          </Group>

          <Group align={"baseline"}>
            <Indicator processing offset={4} color="green">
              <Badge color="green" variant="transparent">
                8 Players Confirmed
              </Badge>
            </Indicator>
            <Badge color="violet" variant="transparent">
              3 Matches Planned
            </Badge>
            <Button variant="light">Share Invite</Button>
          </Group>
        </Group>
      </Container>
    </AppShell.Header>
  );
}
