import {
  Avatar,
  AvatarGroup,
  Badge,
  Container,
  Flex,
  Paper,
  Progress,
  Stack,
  Text,
} from "@mantine/core";

function App() {
  return (
    <Container p={"xl"}>
      <Paper withBorder p={"xl"}>
        <Stack gap={"xs"}>
          <Flex justify="space-between">
            <Text fw={"bold"}>Chocolate Chip Cookies</Text>
            <Badge variant={"light"} color={"cyan"}>
              Dairy
            </Badge>
          </Flex>

          <Flex justify="space-between">
            <Text fz={"xs"} c={"dimmed"}>
              Stock health
            </Text>
            <Text fz={"xs"} c={"green"}>
              83%
            </Text>
          </Flex>
          <Progress color={"green"} value={83} />

          <Avatar.Group>
            <Avatar />
            <Avatar />
          </Avatar.Group>
        </Stack>
      </Paper>
    </Container>
  );
}

export default App;
