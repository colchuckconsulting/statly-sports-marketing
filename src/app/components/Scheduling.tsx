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
  Stack,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import { IconCheck } from "@tabler/icons-react";

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
      </Center>

      <Container size="sm" mb="lg">
        <Text ta="center" mb="md">
          Use our scheduling tool to easily manage classes, sessions, and
          bookings. Facilities can streamline their scheduling process, reduce
          administrative tasks, and provide an efficient and user-friendly
          booking experience for clients. With real-time availability updates,
          intuitive calendar views, and automated notifications, facilities and
          their customers can stay effortlessly organized and informed.
        </Text>
        <Text ta="center" mb="md">
          Whether you're a facility manager or a client, our scheduling tool
          simplifies the process of booking and managing appointments, ensuring
          that everyone stays on the same page.
        </Text>
      </Container>

      <Center mb="md">
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
      </Center>

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
        />{" "}
        <Center>
          <Text fz="lg" mb="md">
            Select Date:
          </Text>
        </Center>
        <Center>
          <DatePicker value={date} onChange={setDate} mb="md" />
        </Center>
        <Group justify="center">
          <Button
            onClick={handleSubmit}
            disabled={!facility || !service || !date}
          >
            Submit
          </Button>
        </Group>
      </Box>
    </Container>
  );
}
