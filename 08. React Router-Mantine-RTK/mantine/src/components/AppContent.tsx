import { AppShell, Container, Tabs } from "@mantine/core";
import { IconApple, IconUsers, IconSwords } from "@tabler/icons-react";
import LobbyTab from "./LobbyTab";
import MatchesTab from "./MatchesTab";
import SnacksTab from "./SnacksTab";

export default function AppContent() {
  return (
    <AppShell.Main>
      <Container size="lg">
        <Tabs defaultValue="snacks" variant="outline" radius="md">
          <Tabs.List>
            <Tabs.Tab value="snacks" leftSection={<IconApple size={16} />}>
              Snacks
            </Tabs.Tab>
            <Tabs.Tab value="lobby" leftSection={<IconUsers size={16} />}>
              Lobby
            </Tabs.Tab>
            <Tabs.Tab value="matches" leftSection={<IconSwords size={16} />}>
              Matches
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="lobby" pt="md">
            <LobbyTab />
          </Tabs.Panel>

          <Tabs.Panel value="matches" pt="md">
            <MatchesTab />
          </Tabs.Panel>

          <Tabs.Panel value="snacks" pt="md">
            <SnacksTab />
          </Tabs.Panel>
        </Tabs>
      </Container>
    </AppShell.Main>
  );
}
