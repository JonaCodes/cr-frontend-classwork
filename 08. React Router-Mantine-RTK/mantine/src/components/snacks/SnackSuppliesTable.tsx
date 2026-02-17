import { Badge, Paper, ScrollArea, Table, Title } from "@mantine/core";
import { snackSupplyRows } from "../../data/gameNightData";

interface SnackSuppliesTableProps {
  height?: number;
}

const STATUS_COLORS = {
  Packed: "green",
  Shopping: "blue",
  "Low Stock": "yellow",
};

export default function SnackSuppliesTable({
  height = 230,
}: SnackSuppliesTableProps) {
  return (
    <Paper radius="md" p="xs">
      <Title order={5} mb="sm">
        Supply Checklist
      </Title>
      <ScrollArea h={height}>
        <Table striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Item</Table.Th>
              <Table.Th>Category</Table.Th>
              <Table.Th>Owner</Table.Th>
              <Table.Th>Status</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {snackSupplyRows.map((row) => (
              <Table.Tr key={`${row.item}-${row.owner}`}>
                <Table.Td>{row.item}</Table.Td>
                <Table.Td>{row.category}</Table.Td>
                <Table.Td>{row.owner}</Table.Td>
                <Table.Td>
                  <Badge
                    variant="transparent"
                    color={
                      STATUS_COLORS[row.status as keyof typeof STATUS_COLORS]
                    }
                  >
                    {row.status}
                  </Badge>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </Paper>
  );
}
