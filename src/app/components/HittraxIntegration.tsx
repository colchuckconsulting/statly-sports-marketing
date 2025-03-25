"use client";
import {
  Container,
  Title,
  List,
  Text,
  Box,
  useMantineTheme,
  Image,
} from "@mantine/core";
import { CompositeChart } from "@mantine/charts";
import { HittraxData } from "./HittraxData";

export function HittraxIntegration() {
  const theme = useMantineTheme();
  return (
    <Container size="xl">
      <Box
        bg={"black"}
        style={{
          borderRadius: "var(--mantine-radius-xl)",
        }}
      >
        <Image src="hittrax-logo-light.svg" alt="Hittrax Logo" />
      </Box>
      <Text mt={"xl"} mb="lg">
        Hittrax is a revolutionary tool that provides real-time data and
        analytics for baseball and softball players. By integrating Hittrax into
        our system, we offer players and coaches detailed insights into
        performance metrics, helping them to improve their game.
      </Text>
      <List>
        <List.Item>Realtime data capture</List.Item>
        <List.Item>Advanced analytics</List.Item>
        <List.Item>Performance tracking</List.Item>
        <List.Item>Player development</List.Item>
      </List>
      <Box mt={"xl"} mb={"xl"}>
        <Text mb="md">
          The chart below visualizes the key performance metrics recorded over a
          series of dates. It compares{" "}
          <Text span td="underline">
            Maximum Exit Velocity (MEV)
          </Text>{" "}
          &ndash; representing the fastest hit achieved &ndash; with{" "}
          <Text span td="underline">
            Average Exit Velocity (AEV)
          </Text>
          , which gives an overall indication of consistent hitting performance.
          Use this data to track trends, assess player progress, and fine-tune
          training strategies.
        </Text>
        <CompositeChart
          h={400}
          data={HittraxData}
          dataKey="date"
          yAxisLabel="Exit Velocity (MPH)"
          xAxisLabel="Date"
          maxBarWidth={30}
          withLegend
          tooltipAnimationDuration={300}
          series={[
            {
              name: "MEV",
              label: "Max Exit Velocity",
              color: theme.other.statlySportsBlue,
              type: "area",
            },
            {
              name: "AEV",
              label: "Average Exit Velocity",
              color: theme.other.statlySportsRed,
              type: "area",
            },
          ]}
          curveType="linear"
        />
      </Box>
    </Container>
  );
}
