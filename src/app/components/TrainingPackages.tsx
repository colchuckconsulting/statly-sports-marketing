"use client";
import {
  Container,
  Text,
  Title,
  Grid,
  Image,
  Box,
  useMantineTheme,
  Center,
} from "@mantine/core";
import classes from "./TrainingPackages.module.css";

const cardData = [
  {
    colorClass: "one",
    icon: "baseball-bat.svg",
    title: "Hitting Lesson",
    description:
      "Personalized one-on-one hitting instruction designed to improve your swing mechanics, timing, and power at the plate.",
  },
  {
    colorClass: "two",
    icon: "baseball-pitcher.svg",
    title: "Pitching Lesson",
    description:
      "Focused training on pitching mechanics, accuracy, velocity, and pitch variety to help dominate on the mound.",
  },
  {
    colorClass: "three",
    icon: "catch.svg",
    title: "Fielding Lesson",
    description:
      "Sharpen your defensive skills with drills and instruction tailored to improve reaction time, footwork, and glove work.",
  },
  {
    colorClass: "four",
    icon: "baseball-catcher.svg",
    title: "Catching Lesson",
    description:
      "Develop elite catching skills with sessions focused on framing, blocking, throwing mechanics, and game management.",
  },
];

export function TrainingPackages() {
  const theme = useMantineTheme();

  return (
    <Container size="xl" mt="lg">
      <Center>
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
          fz={70}
          ta={"center"}
          id="trainingPackages"
        >
          Training Packages
        </Text>
      </Center>
      <Container size="sm" mb="lg">
        <Text mb="md">
          With Statly Sports, administrators have full control to create and
          customize training packages for their clients. Whether it&apos;s
          speed, strength, agility, or a combination of all three — you can
          build a package that fits your athletes&apos; needs.
        </Text>
        <Text mb="xl">
          Set pricing, define the number of sessions, and adjust availability
          for each package, all from your admin dashboard.
        </Text>
        <Text mb="md">Your Lesson Options:</Text>
      </Container>
      <Box mt="xl">
        <Grid>
          {cardData.map((card, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 6, lg: 3 }}>
              <Box className={classes.cardWrap}>
                <Box
                  className={`${classes.cardHeader} ${
                    classes[card.colorClass]
                  }`}
                >
                  <Center style={{ height: "100%" }}>
                    <Box
                      style={{
                        width: "100px",
                        height: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "-30px",
                      }}
                    >
                      <Image src={card.icon} alt={card.title} />
                    </Box>
                  </Center>
                </Box>
                <Box className={classes.cardContent}>
                  <Title order={3} ta="center" mt="xs">
                    {card.title}
                  </Title>
                  <Text mb="xs" ta="center">
                    {card.description}
                  </Text>
                  {/* <Center mb="xs">
                    <Button
                      className={`${classes.cardBtn} ${
                        classes[card.colorClass]
                      }`}
                    >
                      Purchase
                    </Button>
                  </Center> */}
                </Box>
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
