"use client";
import {
  Container,
  List,
  Text,
  Box,
  useMantineTheme,
  Image,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { CompositeChart } from "@mantine/charts";
import { HittraxData } from "./HittraxData";
import {
  IconDatabase,
  IconDeviceAnalytics,
  IconBrandSpeedtest,
  IconPlayHandball,
} from "@tabler/icons-react";
import { Fade } from "react-awesome-reveal";

export function HittraxIntegration() {
  const theme = useMantineTheme();
  return (
    <Container size="xl" id="hittrax" py="xl">
      {/* Section: Header and Intro */}
      <Image src="htrx-logo-default-pms.png" alt="Hittrax Logo" />

      {/* Section: Overview */}
      <Box mb="xl">
        <Text
          component="span"
          inherit
          variant="gradient"
          gradient={{
            from: theme.other.statlySportsBlue,
            to: theme.other.statlySportsRed,
            deg: 160,
          }}
          ff={theme.other.statlySportsFontBebasNeue}
          fz={40}
          ta={"center"}
        >
          Overview
        </Text>
        <Text>
          Hittrax is a revolutionary tool that provides real-time data and
          analytics for baseball and softball players. By integrating Hittrax
          into our system, we offer players and coaches detailed insights into
          performance metrics, helping them to improve their game.
        </Text>
      </Box>

      {/* Section: Key Features */}
      <Box mb="xl">
        <Text
          component="span"
          inherit
          variant="gradient"
          gradient={{
            from: theme.other.statlySportsBlue,
            to: theme.other.statlySportsRed,
            deg: 160,
          }}
          ff={theme.other.statlySportsFontBebasNeue}
          fz={40}
          ta={"center"}
        >
          Key Features
        </Text>
        <List spacing="sm" size="md" mt="sm">
          <List.Item
            icon={
              <ThemeIcon
                color={theme.other.statlySportsBlue}
                size={30}
                radius="xl"
              >
                <IconDatabase size={20} />
              </ThemeIcon>
            }
          >
            Realtime data capture
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon
                color={theme.other.statlySportsBlue}
                size={30}
                radius="xl"
              >
                <IconDeviceAnalytics size={20} />
              </ThemeIcon>
            }
          >
            Advanced analytics
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon
                color={theme.other.statlySportsBlue}
                size={30}
                radius="xl"
              >
                <IconBrandSpeedtest size={20} />
              </ThemeIcon>
            }
          >
            Performance tracking
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon
                color={theme.other.statlySportsBlue}
                size={30}
                radius="xl"
              >
                <IconPlayHandball size={20} />
              </ThemeIcon>
            }
          >
            Player development
          </List.Item>
        </List>
      </Box>

      {/* Section: Chart / Performance Metrics */}
      <Box mb="xl">
        <Text
          component="span"
          inherit
          variant="gradient"
          gradient={{
            from: theme.other.statlySportsBlue,
            to: theme.other.statlySportsRed,
            deg: 160,
          }}
          ff={theme.other.statlySportsFontBebasNeue}
          fz={40}
          ta={"center"}
        >
          Performance Metrics
        </Text>
        <Text mb="md">
          The chart below visualizes key performance metrics recorded over time.
          It compares{" "}
          <Text span td="underline">
            Maximum Exit Velocity (MEV)
          </Text>{" "}
          — the fastest hit achieved — with{" "}
          <Text span td="underline">
            Average Exit Velocity (AEV)
          </Text>
          , which gives an overall indication of consistent hitting performance.
          Use this data to track trends, assess progress, and fine-tune
          training.
        </Text>
        <Box
          p="md"
          style={{
            backgroundColor: theme.colors.gray[1],
            borderRadius: theme.radius.lg,
          }}
        >
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
      </Box>
    </Container>
  );
}
