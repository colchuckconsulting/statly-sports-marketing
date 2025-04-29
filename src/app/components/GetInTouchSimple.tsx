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
  Notification,
} from "@mantine/core";
import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import classes from "./GetInTouchSimple.module.css";
import { isEmail, useForm, hasLength } from "@mantine/form";
import { IconSend, IconMailCheck } from "@tabler/icons-react";

export function GetInTouchSimple() {
  const theme = useMantineTheme();
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = async (values: typeof form.values) => {
    try {
      const response = await fetch("https://usebasin.com/f/19fec33bd817", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        form.reset();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 7000);
      } else {
        console.error("Submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      {submitted && (
        <Container size="xs" mt="md">
          <Fade direction="down" triggerOnce>
            <Notification
              icon={<IconMailCheck size={20} />}
              title="Message sent!"
              color="var(--mantine-color-green-7)"
              withCloseButton
              withBorder
              onClose={() => setSubmitted(false)}
            >
              Thanks for reaching out — we&apos;ll get back to you shortly.
            </Notification>
          </Fade>
        </Container>
      )}

      <form onSubmit={form.onSubmit(handleSubmit)} id="contactUs">
        <Container size="lg" mt="xl" mb="xl">
          <Center>
            <Fade direction="up" triggerOnce>
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
                Contact Us
              </Text>
            </Fade>
          </Center>

          <Slide direction="up" triggerOnce>
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
          </Slide>

          <Fade direction="up" delay={150} triggerOnce>
            <Group justify="center" mt="xl">
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
          </Fade>
        </Container>
      </form>
    </>
  );
}
