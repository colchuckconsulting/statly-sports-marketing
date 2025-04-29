"use client";
import {
  Container,
  List,
  Text,
  Box,
  useMantineTheme,
  Image,
  ThemeIcon,
} from "@mantine/core";
import { CompositeChart } from "@mantine/charts";
import {
  IconDatabase,
  IconDeviceAnalytics,
  IconBrandSpeedtest,
  IconPlayHandball,
} from "@tabler/icons-react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

export const HittraxData = [
  { date: "Mar 22", MEV: 60, AEV: 40 },
  { date: "Mar 23", MEV: 80, AEV: 60 },
  { date: "Mar 24", MEV: 80, AEV: 60 },
  { date: "Mar 25", MEV: 100, AEV: 80 },
  { date: "Mar 26", MEV: 80, AEV: 60 },
  { date: "Mar 27", MEV: 100, AEV: 80 },
  { date: "Mar 28", MEV: 80, AEV: 60 },
  { date: "Mar 29", MEV: 120, AEV: 100 },
];

export function HittraxIntegration() {
  const theme = useMantineTheme();

  return (
    <Container size="xl" id="hittrax" py="xl">
      {/* Section: Header and Intro */}
      <Zoom duration={800} triggerOnce>
        <Box
          style={{
            maxWidth: 850,
            margin: "0 auto",
            paddingBottom: theme.spacing.md,
          }}
        >
          <Image
            src="htrx-logo-default-pms.png"
            alt="Hittrax Logo"
            fit="contain"
          />
        </Box>
      </Zoom>

      {/* Section: Overview */}
      <Box mb="xl">
        <Slide direction="left" duration={800} triggerOnce>
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
            ta="center"
          >
            Overview
          </Text>
        </Slide>
        <Fade direction="up" delay={200} duration={800} triggerOnce>
          <Text>
            Hittrax is a revolutionary tool that provides real-time data and
            analytics for baseball and softball players. By integrating Hittrax
            into our system, we offer players and coaches detailed insights into
            performance metrics, helping them to improve their game.
          </Text>
        </Fade>
      </Box>

      {/* Section: Key Features */}
      <Box mb="xl">
        <Slide direction="right" duration={800} triggerOnce>
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
            ta="center"
          >
            Key Features
          </Text>
        </Slide>
        {/* <Fade cascade damping={0.3} direction="up" duration={800} triggerOnce> */}
        <List spacing="sm" size="md" mt="sm">
          <Fade direction="up" damping={0.3} cascade triggerOnce>
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
              mb="xs"
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
              mb="xs"
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
              mb="xs"
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
              mb="xs"
            >
              Player development
            </List.Item>
          </Fade>
        </List>
        {/* </Fade> */}
      </Box>

      {/* Section: Chart / Performance Metrics */}
      <Box mb="xl">
        <Slide direction="up" duration={800} triggerOnce>
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
            ta="center"
          >
            Performance Metrics
          </Text>
        </Slide>
        <Fade delay={200} direction="up" duration={800} triggerOnce>
          <Text mb="md">
            The chart below visualizes key performance metrics recorded over
            time. It compares{" "}
            <Text span td="underline">
              Maximum Exit Velocity (MEV)
            </Text>{" "}
            — the fastest hit achieved — with{" "}
            <Text span td="underline">
              Average Exit Velocity (AEV)
            </Text>
            , which gives an overall indication of consistent hitting
            performance. Use this data to track trends, assess progress, and
            fine-tune training.
          </Text>
        </Fade>
        <Slide direction="up" delay={800} duration={1000} triggerOnce>
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
        </Slide>
      </Box>
    </Container>
  );
}
