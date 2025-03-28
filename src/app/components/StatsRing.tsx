import { IconRun, IconHandStop, IconBounceLeft } from "@tabler/icons-react";
import {
  Center,
  Group,
  Paper,
  RingProgress,
  SimpleGrid,
  Text,
} from "@mantine/core";
import classes from "./StatsRing.module.css";

const icons = {
  run: IconRun,
  grab: IconHandStop,
  jump: IconBounceLeft,
};

function normalize60YardDash(time: number): number {
  const min = 6.0; // elite
  const max = 8.0; // slower end
  const normalized = 1 - (time - min) / (max - min); // invert so lower = better
  return Math.max(0, Math.min(1, normalized)) * 100;
}

function normalizeGripStrength(grip: number): number {
  const min = 90;
  const max = 180;
  const normalized = (grip - min) / (max - min);
  return Math.max(0, Math.min(1, normalized)) * 100;
}

function normalizeVerticalJump(inches: number): number {
  const min = 20;
  const max = 40;
  const normalized = (inches - min) / (max - min);
  return Math.max(0, Math.min(1, normalized)) * 100;
}

const data = [
  {
    label: "60 Yard Dash",
    stats: "6.7 s",
    progress: normalize60YardDash(6.7),
    color: "teal",
    icon: "run",
  },
  {
    label: "Grip Strength",
    stats: "150 lbs",
    progress: normalizeGripStrength(140),
    color: "blue",
    icon: "grab",
  },
  {
    label: "Vertical Jump",
    stats: "29 inches",
    progress: normalizeVerticalJump(29),
    color: "red",
    icon: "jump",
  },
] as const;

export function StatsRing() {
  const stats = data.map((stat, index) => {
    const Icon = icons[stat.icon];
    return (
      <Paper
        withBorder
        shadow="md"
        radius="md"
        p="xs"
        key={stat.label}
        mt="sm"
        w={360}
        ml={index * 20} // 0, 16, 32, etc.
        className={classes.card}
      >
        <Center>
          <Group>
            <RingProgress
              size={80}
              roundCaps
              thickness={8}
              sections={[{ value: stat.progress, color: stat.color }]}
              label={
                <Center>
                  <Icon size={20} stroke={1.5} />
                </Center>
              }
            />

            <div>
              <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
                {stat.label}
              </Text>
              <Text fw={700} size="xl">
                {stat.stats}
              </Text>
            </div>
          </Group>
        </Center>
      </Paper>
    );
  });

  return <SimpleGrid cols={{ base: 1 }}>{stats}</SimpleGrid>;
}
