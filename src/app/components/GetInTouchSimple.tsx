"use client";
import {
  Button,
  Group,
  SimpleGrid,
  Textarea,
  TextInput,
  Title,
  Container,
  useMantineTheme,
  Center,
  Text,
} from "@mantine/core";
import classes from "./GetInTouchSimple.module.css";
import { useForm } from "@mantine/form";
import { IconSend } from "@tabler/icons-react";

export function GetInTouchSimple() {
  const theme = useMantineTheme();
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})} id="contactUs">
      <Container size="lg" mt="xl" mb="xl">
        {/* <Title
          order={2}
          size="h1"
          fw={900}
          ta="center"
          c={theme.other.statlySportsGray}
        >
          Contact Us
        </Title> */}

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
          >
            Contact Us{" "}
          </Text>
        </Center>

        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="filled"
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
            {...form.getInputProps("email")}
          />
        </SimpleGrid>

        <TextInput
          label="Subject"
          placeholder="Subject"
          mt="md"
          name="subject"
          variant="filled"
          {...form.getInputProps("subject")}
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps("message")}
        />

        <Group justify="center" mt="xl">
          {/* Todo update primary styling for button */}
          <Button
            type="submit"
            size="lg"
            className={classes.sendMessageBtn}
            radius="xl"
            rightSection={
              <IconSend
                stroke={2}
                style={{
                  marginBottom: "-3px",
                }}
              />
            }
          >
            Send message
          </Button>
        </Group>
      </Container>
    </form>
  );
}
