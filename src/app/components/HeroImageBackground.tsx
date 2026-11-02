"use client";
import {
  Button,
  Box,
  Text,
  Title,
  useMantineTheme,
  Anchor,
  BackgroundImage,
} from "@mantine/core";
import classes from "./HeroImageBackground.module.css";
import { IconBallBaseball } from "@tabler/icons-react";
import { Fade } from "react-awesome-reveal";

export function HeroImageBackground() {
  const theme = useMantineTheme();
  return (
    <BackgroundImage src="baseball-backgroundimage.jpg" h="100vh">
      <Box className={classes.inner}>
        <Fade direction="up" duration={900} triggerOnce>
          <Box className={classes.content}>
            <Title
              className={classes.title}
              pl={{ base: "xs", sm: "0" }}
              pr={{ base: "xs", sm: "0" }}
            >
              From{" "}
              <Text component="span" inherit td="underline">
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
              Whether you&apos;re training in the offseason or chasing greatness
              year-round, Statly Sports gives athletes and coaches the tools
              they need to track progress, craft performance-driven sessions,
              and turn potential into performance.
            </Text>
            <Box className={classes.controlContainer}>
              <Anchor
                href="https://app.statlysports.com/players"
                target="_blank"
              >
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
                  Explore the Test Site
                </Button>
              </Anchor>
            </Box>
          </Box>
        </Fade>
      </Box>
    </BackgroundImage>
  );
}
