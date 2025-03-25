import { Button, Box, Text, Title } from "@mantine/core";
import classes from "./HeroImageBackground.module.css";

export function HeroImageBackground() {
  return (
    <Box className={classes.root}>
      <Box className={classes.inner}>
        <Box className={classes.content}>
          <Title className={classes.title}>
            A{" "}
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: "pink", to: "yellow" }}
            >
              fully featured
            </Text>{" "}
            React components library
          </Title>

          <Text className={classes.description} mt={30}>
            Build fully functional accessible web applications with ease –
            Mantine includes more than 100 customizable components and hooks to
            cover you in any situation
          </Text>
          <Box className={classes.controlContainer}>
            <Button
              variant="gradient"
              gradient={{ from: "pink", to: "yellow" }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Get started
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
