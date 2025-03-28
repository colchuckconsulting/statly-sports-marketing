import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { ActionIcon, Container, Group, Image } from "@mantine/core";
// import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./FooterSocial.module.css";

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Image
          src="statlysports-logo-2.svg"
          alt="Statly Sports Logo"
          height={30}
        />
        <Group
          gap={0}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <Image src="linkedin.svg" className={classes.iconHover} />
          <Image src="facebook.svg" ml="md" className={classes.iconHover} />
          <Image src="twitter.svg" ml="md" className={classes.iconHover} />
          <Image src="youtube.svg" ml="md" className={classes.iconHover} />
          <Image src="instagram.svg" ml="md" className={classes.iconHover} />
        </Group>
      </Container>
    </div>
  );
}
