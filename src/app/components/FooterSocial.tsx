import { Container, Group, Image } from "@mantine/core";
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
          <Image
            src="linkedin.svg"
            alt="linkedin icon"
            className={classes.iconHover}
          />
          <Image
            src="facebook.svg"
            alt="facebook icon"
            ml="md"
            className={classes.iconHover}
          />
          <Image
            src="twitter.svg"
            alt="twitter icon"
            ml="md"
            className={classes.iconHover}
          />
          <Image
            src="youtube.svg"
            alt="youtube icon"
            ml="md"
            className={classes.iconHover}
          />
          <Image
            src="instagram.svg"
            alt="instagram icon"
            ml="md"
            className={classes.iconHover}
          />
        </Group>
      </Container>
    </div>
  );
}
