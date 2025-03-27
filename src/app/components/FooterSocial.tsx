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
        {/* <MantineLogo size={28} /> */}
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
          <ActionIcon size="lg" color="gray" variant="default" radius={"xl"}>
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="default"
            radius={"xl"}
            ml="xs"
          >
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          {/* <ActionIcon
            size="lg"
            // color="gray"
            variant="default"
            radius={"xl"}
            ml="xs"
          > */}
          {/* <IconBrandInstagram size={18} stroke={1.5} /> */}
          <Image src="instagram.svg" width={"20px"} height={"20px"} ml="sm" />
          {/* </ActionIcon> */}
        </Group>
      </Container>
    </div>
  );
}
