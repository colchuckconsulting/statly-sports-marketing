"use client";

import {
  Container,
  Text,
  Title,
  Grid,
  Image,
  Box,
  useMantineTheme,
} from "@mantine/core";
export function TrainingPackages() {
  const theme = useMantineTheme();
  return (
    <Container size="xl">
      <Title order={1} ta="center" c={theme.other.statlySportsGray} mb="md">
        Training Packages
      </Title>
      <Text mb="md">
        With Statly Sports, administrators have full control to create and
        customize training packages for their clients. Whether it's speed,
        strength, agility, or a combination of all three — you can build a
        package that fits your athletes' needs.
      </Text>
      <Text mb="xl">
        Set pricing, define the number of sessions, and adjust availability for
        each package, all from your admin dashboard.
      </Text>
      <Grid>
        <Image src="/images/speed.jpg" alt="Speed Training" />
        <Image src="/images/strength.jpg" alt="Strength Training" />
        <Image src="/images/agility.jpg" alt="Agility Training" />
      </Grid>
      <Box>
        <Text>Our training packages include:</Text>
        <ul>
          <li>Speed Training</li>
          <li>Strength Training</li>
          <li>Agility Training</li>
        </ul>
      </Box>
    </Container>
  );
}
