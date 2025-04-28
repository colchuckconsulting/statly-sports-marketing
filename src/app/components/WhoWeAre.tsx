"use client";
import { Box, Text, Container, useMantineTheme, Image } from "@mantine/core";
import { Fade, Slide } from "react-awesome-reveal";

export function WhoWeAre() {
  const theme = useMantineTheme();

  return (
    <Container size="xl" mih={{ base: 300, sm: 500 }} pos="relative">
      <Box pos="relative">
        {/* Background image - faded in only */}
        <Fade delay={700} triggerOnce>
          <Image
            src="baseball-bat-1.svg"
            alt="Statly Sports Logo"
            pos="absolute"
            top={0}
            right={{ base: "-2.75rem", sm: 0 }}
            h="100%"
            w="auto"
            style={{ zIndex: 0, opacity: 0.4 }}
          />
        </Fade>

        {/* Text content - slide in */}
        <Slide direction="left" cascade triggerOnce>
          <Text
            c={theme.other.statlySportsGray}
            mt="xl"
            fz={{ base: "34px", sm: "60px" }}
            ta={{ base: "center", sm: "left" }}
            id="whoWeAre"
            style={{ position: "relative", zIndex: 1 }}
          >
            At Statly Sports, we empower athletes of all levels. Our platform
            tracks performance, provides detailed analytics, and offers
            integrated payment and scheduling—all with real-time updates.
          </Text>
        </Slide>
      </Box>
    </Container>
  );
}
