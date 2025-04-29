import { Container, Image, Box } from "@mantine/core";
import { Fade } from "react-awesome-reveal";
import classes from "./FooterSocial.module.css";
import Link from "next/link";

export function FooterSocial() {
  return (
    <Fade direction="up" triggerOnce>
      <Box className={classes.footer}>
        <Container className={classes.inner}>
          <Fade delay={200} triggerOnce>
            <Link href="/">
              <Image
                src="statlysports-logo-2.svg"
                alt="Statly Sports Logo"
                height={30}
                style={{
                  // Prevents image cutoff on mobile by ensuring it fills the container
                  objectFit: "fill",
                }}
              />
            </Link>
          </Fade>
          {/* Keep commented until we have social media pages */}
          {/* <Group
            gap={0}
            className={classes.links}
            justify="flex-end"
            wrap="nowrap"
          >
            <Zoom cascade damping={0.1} triggerOnce>
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
            </Zoom>
          </Group> */}
        </Container>
      </Box>
    </Fade>
  );
}
