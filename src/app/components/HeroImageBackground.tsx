"use client";
import { Button, Box, Text, Title, useMantineTheme } from "@mantine/core";
import classes from "./HeroImageBackground.module.css";
import { IconBallBaseball } from "@tabler/icons-react";

export function HeroImageBackground() {
  const theme = useMantineTheme();
  console.log("theme", theme);
  return (
    <Box className={classes.root}>
      <Box className={classes.inner}>
        <Box className={classes.content}>
          <Title className={classes.title}>
            From{" "}
            <Text component="span" inherit fs="italic" td="underline">
              Practice to Pro
            </Text>{" "}
            Power Your Game with{" "}
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{
                from: theme.other.statlySportsBlue,
                to: theme.other.statlySportsRed,
                deg: 160,
              }}
            >
              Statly Sports
            </Text>
          </Title>

          <Text className={classes.description} mt={30}>
            Build fully functional accessible web applications with ease –
            Mantine includes more than 100 customizable components and hooks to
            cover you in any situation
          </Text>
          <Box className={classes.controlContainer}>
            <Button
              variant="outline"
              size="xl"
              className={classes.control}
              rightSection={
                <IconBallBaseball
                  stroke={2}
                  style={{
                    marginBottom: "-5px",
                  }}
                />
              }
            >
              Get started
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
