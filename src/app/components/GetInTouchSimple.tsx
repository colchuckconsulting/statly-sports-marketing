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
} from "@mantine/core";
import { useForm } from "@mantine/form";

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
    <form onSubmit={form.onSubmit(() => {})}>
      <Container size="lg" mt="xl" mb="xl">
        <Title
          order={2}
          size="h1"
          fw={900}
          ta="center"
          c={theme.other.statlySportsGray}
        >
          Contact Us
        </Title>

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
          <Button type="submit" size="md" color={theme.other.statlySportsBlue}>
            Send message
          </Button>
        </Group>
      </Container>
    </form>
  );
}
