"use client";
import { Box, Title, Text, Container, useMantineTheme } from "@mantine/core";

export function WhoWeAre() {
  const theme = useMantineTheme();

  return (
    <Container size="xl" mih={600}>
      <Text
        c={theme.other.statlySportsGray}
        mt={"xl"}
        fz={{ base: "34px", sm: "60px" }}
        ta={{ base: "center", sm: "left" }}
        id="whoWeAre"
      >
        At Statly Sports, we empower athletes of all levels. Our platform tracks
        performance, provides detailed analytics, and offers integrated payment
        and scheduling—all with real-time updates.
      </Text>
    </Container>
  );
}
