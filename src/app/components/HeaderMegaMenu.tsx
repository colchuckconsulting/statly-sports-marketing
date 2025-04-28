"use client";
import { useState } from "react";
import {
  Anchor,
  Box,
  Burger,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  Image,
  HoverCard,
  Text,
  UnstyledButton,
  ThemeIcon,
  useMantineTheme,
  Collapse,
  Center,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderMegaMenu.module.css";
import { Fade } from "react-awesome-reveal";
import { IconChevronDown } from "@tabler/icons-react";
import BaseballBatIcon from "/public/baseball-bat-black.svg";
import BaseballFieldIcon from "/public/baseball-field.svg";
import StatsIcon from "/public/stats.svg";
import BaseballFireIcon from "/public/baseball-fire.svg";
import CreditCardIcon from "/public/credit-card.svg";
import CalendarIcon from "/public/calendar.svg";
import BarChartIcon from "/public/bar-chart.svg";

const mockdata = [
  {
    icon: BaseballBatIcon.src,
    title: "Hittrax",
    href: "#hittrax",
  },
  {
    icon: BaseballFieldIcon.src,
    title: "GameChanger",
    href: "#gamechanger",
  },
  {
    icon: BarChartIcon.src,
    title: "Athlete Metrics",
    href: "#athleticism",
  },
  {
    icon: BaseballFireIcon.src,
    title: "Training Packages",
    href: "#trainingPackages",
  },
  {
    icon: CreditCardIcon.src,
    title: "Payments",
    href: "#payments",
  },
  {
    icon: CalendarIcon.src,
    title: "Scheduling",
    href: "#scheduling",
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

  const [isHovering, setIsHovering] = useState(false);
  const theme = useMantineTheme();

  const links = (
    <Stack gap="xs">
      {mockdata.map((item, idx) => (
        <>
          <UnstyledButton className={classes.subLink}>
            <Anchor href={item.href} underline="never" c={theme.colors.dark[9]}>
              <Group>
                <ThemeIcon
                  size={44}
                  variant="default"
                  style={{
                    border: `2px solid ${theme.other.statlySportsLightBlue}`,
                    borderRadius: "50%",
                  }}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={28}
                    height={28}
                  />
                </ThemeIcon>
                <Text fw={500}>{item.title}</Text>
              </Group>
            </Anchor>
          </UnstyledButton>
          {idx < mockdata.length - 1 && <Divider my={2} />}
        </>
      ))}
    </Stack>
  );

  const handleNavClick = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      closeDrawer();
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 100); // Small delay to ensure drawer is closed first
    }
  };

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Fade direction="up" duration={900} triggerOnce>
            <Image
              src="statlysports-logo-1.svg"
              alt="Statly Sports Logo"
              height={35}
            />
          </Fade>
          <Box>
            <Fade direction="up" duration={900} triggerOnce>
              <Group h="100%" gap={0} visibleFrom="sm">
                <Anchor
                  href="#whoWeAre"
                  className={classes.link}
                  underline="never"
                >
                  About
                </Anchor>
                <Group justify="center">
                  <HoverCard
                    width={280}
                    shadow="md"
                    radius={20}
                    onOpen={() => setIsHovering(true)}
                    onClose={() => setIsHovering(false)}
                  >
                    <HoverCard.Target>
                      <Anchor
                        href="#services"
                        className={`${classes.link} ${
                          isHovering ? classes.linkHovered : ""
                        }`}
                        underline="never"
                      >
                        Platform{" "}
                        <IconChevronDown
                          size={16}
                          className={`${classes.caretIcon} ${
                            isHovering ? classes.caretFlipped : ""
                          }`}
                          style={{ marginLeft: 5 }}
                        />
                      </Anchor>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                      <Box>{links}</Box>
                    </HoverCard.Dropdown>
                  </HoverCard>
                </Group>
                <Anchor
                  href="#contactUs"
                  className={classes.link}
                  underline="never"
                >
                  Contact Us
                </Anchor>
              </Group>

              <Group visibleFrom="sm">
                {/* Keep this Group element for proper spacing on desktop */}
              </Group>
            </Fade>
          </Box>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            color={"var(--mantine-color-white)"}
          />
        </Group>
      </header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title={
          <Image
            src="statlysports-logo-1.svg"
            alt="Statly Sports Logo"
            height={35}
          />
        }
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />
          <Anchor
            href="#whoWeAre"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#whoWeAre");
            }}
            className={classes.link}
            underline="never"
          >
            About
          </Anchor>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Platform
              </Box>
              <IconChevronDown
                size={16}
                color={theme.colors.blue[6]}
                className={`${classes.caretIcon} ${
                  linksOpened ? classes.caretFlipped : ""
                }`}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <Anchor
            href="#contactUs"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contactUs");
            }}
            className={classes.link}
            underline="never"
          >
            Contact Us
          </Anchor>

          <Divider my="sm" />
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
