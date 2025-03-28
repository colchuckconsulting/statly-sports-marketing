"use client";
import {
  IconBook,
  IconChartPie3,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from "@tabler/icons-react";
import {
  Anchor,
  Box,
  Burger,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderMegaMenu.module.css";

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const handleNavClick = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      closeDrawer();
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 100); // Small delay to ensure drawer is closed first
    }
  };

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Image
            src="statlysports-logo-1.svg"
            alt="Statly Sports Logo"
            height={35}
          />
          <Box>
            <Group h="100%" gap={0} visibleFrom="sm">
              <Anchor
                href="#whoWeAre"
                className={classes.link}
                underline="never"
              >
                About
              </Anchor>
              <Anchor
                href="#hittrax"
                className={classes.link}
                underline="never"
              >
                Hittrax
              </Anchor>
              <Anchor
                href="#trainingPackages"
                className={classes.link}
                underline="never"
              >
                Training Packages
              </Anchor>
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
            height={30}
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
          <Anchor
            href="#hittrax"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hittrax");
            }}
            className={classes.link}
            underline="never"
          >
            Hittrax
          </Anchor>
          <Anchor
            href="#trainingPackages"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#trainingPackages");
            }}
            className={classes.link}
            underline="never"
          >
            Training Packages
          </Anchor>
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
