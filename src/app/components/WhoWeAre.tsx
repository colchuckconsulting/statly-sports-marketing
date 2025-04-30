"use client";
import {
  Box,
  Text,
  Container,
  useMantineTheme,
  Image,
  List,
} from "@mantine/core";
import { Fade, Slide } from "react-awesome-reveal";

export function WhoWeAre() {
  const theme = useMantineTheme();

  return (
    <Container size="xl" mih={{ base: 300 }} pos="relative">
      <Box pos="relative">
        {/* Background image - faded in only */}
        <Fade delay={400} triggerOnce>
          <Image
            src="baseball-bat-1.svg"
            alt="Baseball Player Image"
            pos="absolute"
            top={0}
            right={{ base: "-2.75rem", sm: 0 }}
            h="100%"
            w="auto"
            style={{ zIndex: 0, opacity: 0.3 }}
          />
        </Fade>

        {/* Text content - slide in */}
        <Slide delay={500} direction="left" cascade triggerOnce>
          <Text
            c={theme.colors.dark[9]}
            mt="xl"
            fz={{ base: "24px", sm: "34px" }}
            ta={{ base: "center", sm: "left" }}
            id="whoWeAre"
            style={{
              position: "relative",
              zIndex: 1,
            }}
          >
            At Statly Sports, we empower athletes of all levels. Our platform
            tracks performance, provides detailed analytics, and offers
            integrated payment and scheduling—all with real-time updates.
          </Text>

          <Text
            c={theme.colors.dark[9]}
            mt="xl"
            fz={{ base: "24px", sm: "34px" }}
            ta={{ base: "center", sm: "left" }}
            style={{
              position: "relative",
              zIndex: 1,
            }}
          >
            Built specifically with coaches in mind, Statly Sports is your
            one-stop shop for:
          </Text>
        </Slide>
        <List
          spacing="sm"
          size="md"
          mt="md"
          pl="lg"
          fz={{ base: "24px", sm: "34px" }}
          style={{
            color: theme.colors.dark[9],
            // fontSize: "24px",
            zIndex: 1,
            position: "relative",
          }}
        >
          <Slide direction="left" delay={700} cascade triggerOnce>
            <List.Item>Simplifying team management</List.Item>
            <List.Item>Streamlining scheduling and logistics</List.Item>
            <List.Item>
              Analyzing performance with actionable insights
            </List.Item>
            <List.Item>Collecting and managing payments effortlessly</List.Item>
          </Slide>
        </List>
      </Box>
    </Container>
  );
}
