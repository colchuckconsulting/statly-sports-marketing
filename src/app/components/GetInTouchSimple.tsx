"use client";
import {
  Button,
  Group,
  SimpleGrid,
  Textarea,
  TextInput,
  Container,
  useMantineTheme,
  Center,
  Text,
} from "@mantine/core";
import classes from "./GetInTouchSimple.module.css";
import { isEmail, useForm, hasLength } from "@mantine/form";
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
      name: hasLength(
        { min: 2 },
        "That's a short one! Try at least 2 characters."
      ),
      email: isEmail(
        "Enter an email like name@example.com. Don't worry, we won't spam you."
      ),
      subject: hasLength(
        { min: 10 },
        "Subject should be more descriptive (at least 10 characters)."
      ),
      message: hasLength(
        { min: 20 },
        "Tell us a bit more — message should be at least 20 characters long."
      ),
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})} id="contactUs">
      <Container size="lg" mt="xl" mb="xl">
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
