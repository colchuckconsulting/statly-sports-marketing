"use client";
import {
  Container,
  Text,
  Select,
  Button,
  Box,
  useMantineTheme,
  Center,
  Group,
  rem,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import { IconCheck } from "@tabler/icons-react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

export function Scheduling() {
  const theme = useMantineTheme();

  const [facility, setFacility] = useState<string | null>(null);
  const [service, setService] = useState<string | null>(null);
  const [date, setDate] = useState<Date | null>(null);

  const handleSubmit = () => {
    notifications.show({
      title: "Scheduled Successfully",
      message: `Your class at ${facility} for ${service} on ${date?.toLocaleDateString()} has been scheduled!`,
      color: "green",
      icon: <IconCheck size={rem(16)} />,
      autoClose: 5000,
      position: "top-center",
      withBorder: true,
      onClose: () => {
        setFacility(null);
        setService(null);
        setDate(null);
      },
    });
  };

  return (
    <Container size="xl" mt="lg">
      <Center mb="lg">
        <Slide direction="down" triggerOnce>
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
            id="scheduling"
          >
            Scheduling
          </Text>
        </Slide>
      </Center>

      <Container size="sm" mb="lg">
        <Fade cascade damping={0.15} triggerOnce>
          <Text ta="center" mb="md">
            Use our scheduling tool to easily manage classes, sessions, and
            bookings...
          </Text>
          <Text ta="center" mb="md">
            Whether you&lsquo;re a facility manager or a client, our scheduling
            tool simplifies the process...
          </Text>
        </Fade>
      </Container>

      <Center mb="md">
        <Slide direction="up" triggerOnce>
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
            fz="30px"
            fw={700}
          >
            Schedule a Class
          </Text>
        </Slide>
      </Center>

      <Fade delay={300} triggerOnce>
        <Box maw={500} mx="auto">
          <Select
            label="Select Facility"
            placeholder="Choose facility"
            data={[
              {
                value: "Elite Baseball Training Center",
                label: "Elite Baseball Training Center",
              },
              {
                value: "Diamond Sports Complex",
                label: "Diamond Sports Complex",
              },
              {
                value: "Premier Athletics Facility",
                label: "Premier Athletics Facility",
              },
            ]}
            value={facility}
            onChange={setFacility}
            mb="md"
          />
          <Select
            label="Select Service"
            placeholder="Choose service"
            data={[
              {
                value: "Private Hitting Lesson",
                label: "Private Hitting Lesson",
              },
              {
                value: "Pitching Mechanics Clinic",
                label: "Pitching Mechanics Clinic",
              },
              {
                value: "Fielding and Defensive Skills Session",
                label: "Fielding and Defensive Skills Session",
              },
              {
                value: "Strength and Conditioning Training",
                label: "Strength and Conditioning Training",
              },
              { value: "Youth Baseball Camp", label: "Youth Baseball Camp" },
            ]}
            value={service}
            onChange={setService}
            mb="md"
          />
          <Center>
            <Text fz="lg" mb="md" fw={700}>
              Select Date:
            </Text>
          </Center>
          <Center>
            <DatePicker value={date} onChange={setDate} mb="md" />
          </Center>
          <Group justify="center">
            <Zoom triggerOnce>
              <Button
                onClick={handleSubmit}
                disabled={!facility || !service || !date}
              >
                Submit
              </Button>
            </Zoom>
          </Group>
        </Box>
      </Fade>
    </Container>
  );
}
