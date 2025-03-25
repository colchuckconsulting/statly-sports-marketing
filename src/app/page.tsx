import { HeaderMegaMenu } from "./components/HeaderMegaMenu";
import { HeroImageBackground } from "./components/HeroImageBackground";
import { Box } from "@mantine/core";
export default function Page() {
  return (
    <Box>
      <HeaderMegaMenu />
      <HeroImageBackground />
    </Box>
  );
}
