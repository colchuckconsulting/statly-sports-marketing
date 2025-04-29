"use client";
import {
  Container,
  Text,
  Box,
  useMantineTheme,
  Center,
  Card,
  Button,
  Group,
  Divider,
  Stack,
  TextInput,
  Notification,
} from "@mantine/core";
import {
  IconCreditCard,
  IconLock,
  IconCheck,
  IconBrandApple,
  IconBrandGoogle,
  IconBrandPaypal,
  IconDiscount,
  IconStarFilled,
  IconClock,
  IconBrandStripe,
  IconFileText,
} from "@tabler/icons-react";

import { Fade, Slide, Zoom } from "react-awesome-reveal";

export function Payments() {
  const theme = useMantineTheme();

  return (
    <Container size="md" my="xl">
      <Center mb="xl">
        <Zoom triggerOnce>
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
            fz={64}
            fw={700}
            id="payments"
          >
            Payments
          </Text>
        </Zoom>
      </Center>

      <Fade cascade damping={0.1} triggerOnce>
        <Card
          shadow="xl"
          padding="xl"
          radius="lg"
          withBorder
          style={{ backgroundColor: theme.colors.gray[0] }}
        >
          <Stack gap="md">
            <Center mb="md">
              <Zoom triggerOnce>
                <IconBrandStripe size={40} color={theme.colors.violet[6]} />
              </Zoom>
            </Center>

            <Fade direction="up" triggerOnce>
              <Text size="lg" ta="center" mb="md">
                At Statly Sports, your payments are securely managed through
                <Text component="span" fw={700}>
                  {" "}
                  Stripe
                </Text>
                —a global leader in payment processing. Stripe offers robust
                security, comprehensive fraud protection, and compatibility with
                numerous payment methods including cards, Apple Pay, Google Pay,
                and PayPal. Your transactions are encrypted and safeguarded,
                ensuring peace of mind and reliability every time you pay.
              </Text>
            </Fade>

            <Divider />

            <Box>
              <Slide direction="left" triggerOnce>
                <Text fw={600} mb="xs">
                  Order Summary:
                </Text>
              </Slide>
              <Stack gap="xs">
                <Fade cascade delay={500} damping={0.1} triggerOnce>
                  <Group justify="space-between">
                    <Text>Subscription (Premium Sports Analytics):</Text>
                    <Text>$99.00</Text>
                  </Group>
                  <Group justify="space-between">
                    <Text>Discount Applied:</Text>
                    <Text color="green">-$10.00</Text>
                  </Group>
                  <Group justify="space-between">
                    <Text>Taxes (8%):</Text>
                    <Text>$7.12</Text>
                  </Group>
                  <Group justify="space-between">
                    <Text>Processing Fee:</Text>
                    <Text>$1.50</Text>
                  </Group>
                  <Divider />
                  <Group justify="space-between" fw={700}>
                    <Text>Total:</Text>
                    <Text>$97.62</Text>
                  </Group>
                </Fade>
              </Stack>
            </Box>

            <Slide direction="up" triggerOnce>
              <TextInput
                placeholder="Enter promo code"
                leftSection={<IconDiscount size={20} />}
                variant="filled"
                radius="md"
              />
            </Slide>

            <Box>
              <Text fw={600} mb="xs">
                Payment Methods:
              </Text>
              <Stack gap="sm">
                <Fade cascade delay={500} damping={0.1} triggerOnce>
                  <Button
                    leftSection={<IconCreditCard size={20} />}
                    variant="outline"
                    size="lg"
                    fullWidth
                    style={{
                      borderColor: theme.colors.blue[5],
                      color: theme.colors.blue[6],
                    }}
                  >
                    Pay with Card
                  </Button>
                  <Button
                    leftSection={<IconBrandApple size={20} />}
                    variant="outline"
                    size="lg"
                    fullWidth
                    style={{
                      borderColor: theme.colors.dark[6],
                      color: theme.colors.dark[6],
                    }}
                  >
                    Apple Pay
                  </Button>
                  <Button
                    leftSection={<IconBrandGoogle size={20} />}
                    variant="outline"
                    size="lg"
                    fullWidth
                    style={{
                      borderColor: theme.colors.red[6],
                      color: theme.colors.red[6],
                    }}
                  >
                    Google Pay
                  </Button>
                  <Button
                    leftSection={<IconBrandPaypal size={20} />}
                    variant="outline"
                    size="lg"
                    fullWidth
                    style={{
                      borderColor: theme.colors.blue[4],
                      color: theme.colors.blue[5],
                    }}
                  >
                    PayPal
                  </Button>
                </Fade>
              </Stack>
            </Box>

            <Zoom triggerOnce>
              <Button
                size="lg"
                radius="md"
                fullWidth
                rightSection={<IconCheck size={20} />}
                style={{ boxShadow: theme.shadows.md }}
              >
                Confirm & Pay
              </Button>
            </Zoom>

            <Slide direction="up" triggerOnce>
              <Notification
                icon={<IconStarFilled size={20} />}
                color="yellow"
                radius="md"
                withCloseButton={false}
              >
                &quot;Statly Sports provides outstanding service and seamless
                payments. Highly recommended!&quot; &ndash; Alex J.
              </Notification>
            </Slide>

            <Fade cascade damping={0.1} triggerOnce>
              <Group justify="center" gap="xl">
                <Group gap="xs">
                  <IconLock size={20} stroke={1.5} />
                  <Text size="sm" c="dimmed">
                    Secure Encryption
                  </Text>
                </Group>
                <Group gap="xs">
                  <IconClock size={20} stroke={1.5} />
                  <Text size="sm" c="dimmed">
                    Fast Processing
                  </Text>
                </Group>
                <Group gap="xs">
                  <IconFileText size={20} stroke={1.5} />
                  <Text size="sm" c="dimmed">
                    Terms & Privacy Policy
                  </Text>
                </Group>
              </Group>
            </Fade>
          </Stack>
        </Card>
      </Fade>
    </Container>
  );
}
