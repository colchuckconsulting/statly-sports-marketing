"use client";
import { useState } from "react";
import {
  Container,
  Text,
  Title,
  Grid,
  useMantineTheme,
  Image,
  Box,
  Table,
  Checkbox,
  Progress,
  Center,
} from "@mantine/core";
import { StatsRing } from "./StatsRing";

const playerStats = [
  { atBats: 55, runs: 28, hits: 29, ops: 1.6, rbi: 25, sb: 7 },
  { atBats: 48, runs: 22, hits: 24, ops: 1.4, rbi: 19, sb: 12 },
  { atBats: 60, runs: 30, hits: 32, ops: 1.7, rbi: 28, sb: 9 },
  { atBats: 42, runs: 18, hits: 20, ops: 1.2, rbi: 16, sb: 5 },
  { atBats: 50, runs: 25, hits: 27, ops: 1.5, rbi: 22, sb: 8 },
  { atBats: 53, runs: 26, hits: 26, ops: 1.3, rbi: 20, sb: 10 },
  { atBats: 58, runs: 27, hits: 30, ops: 1.6, rbi: 24, sb: 11 },
  { atBats: 46, runs: 21, hits: 23, ops: 1.3, rbi: 18, sb: 6 },
  // { atBats: 62, runs: 31, hits: 34, ops: 1.8, rbi: 30, sb: 9 },
];

export function GameChangerAthleticism() {
  const theme = useMantineTheme();

  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const rows = playerStats.map((playerStat, index) => (
    <Table.Tr
      key={index}
      bg={
        selectedRows.includes(playerStat.atBats)
          ? "var(--mantine-color-blue-light)"
          : undefined
      }
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(playerStat.atBats)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, playerStat.atBats]
                : selectedRows.filter((atBats) => atBats !== playerStat.atBats)
            )
          }
        />
      </Table.Td>
      <Table.Td>{playerStat.atBats}</Table.Td>
      <Table.Td>{playerStat.runs}</Table.Td>
      <Table.Td>{playerStat.hits}</Table.Td>
      <Table.Td>{playerStat.ops.toFixed(3)}</Table.Td>
      <Table.Td>{playerStat.rbi}</Table.Td>
      <Table.Td>{playerStat.sb}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Container size="xl" mih={600}>
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          {/* Todo possibly on mobile switch to smaller logo */}
          {/* <Image
            src="gamechanger-logo-5.svg"
            alt="Game Changer Logo"
            mt={"-30px"}
          /> */}
          <Title ta={"center"} c={theme.other.statlySportsLightBlue} fz={60}>
            GameChanger
          </Title>
          <Text mt="md">
            Statly Sports integrates directly with GameChanger, providing
            real-time statistics and detailed performance data. This integration
            allows you to seamlessly view and analyze player metrics alongside
            comprehensive athleticism insights, enhancing your ability to track
            and improve player performance.
          </Text>
          <Box>
            <Table striped highlightOnHover mt="lg">
              <Table.Thead
                style={{
                  backgroundColor: theme.other.statlySportsLightBlue,
                  color: theme.white,
                }}
              >
                <Table.Tr>
                  <Table.Th />
                  <Table.Th>
                    <Box visibleFrom="sm">At Bats</Box>
                    <Box hiddenFrom="sm">AB</Box>
                  </Table.Th>
                  <Table.Th>
                    <Box visibleFrom="sm">Runs</Box>
                    <Box hiddenFrom="sm">R</Box>
                  </Table.Th>
                  <Table.Th>
                    {" "}
                    <Box visibleFrom="sm">Hits</Box>
                    <Box hiddenFrom="sm">H</Box>
                  </Table.Th>
                  <Table.Th>
                    <Box visibleFrom="sm">On-base plus slugging</Box>
                    <Box hiddenFrom="sm">OPS</Box>
                  </Table.Th>
                  <Table.Th>
                    <Box visibleFrom="sm">Runs Batted In</Box>
                    <Box hiddenFrom="sm">RBI</Box>
                  </Table.Th>
                  <Table.Th>
                    {" "}
                    <Box visibleFrom="sm">Stolen Bases</Box>
                    <Box hiddenFrom="sm">SB</Box>
                  </Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </Box>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Title ta={"center"} c={theme.other.statlySportsRed} fz={60}>
            Athleticism
          </Title>
          <Text mt="md">
            Statly Sports Athleticism tracks key metrics like speed, agility,
            and strength, helping coaches and players quickly identify areas for
            improvement, measure ongoing progress, and enhance overall on-field
            performance.
          </Text>
          <Center>
            <StatsRing />
          </Center>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
