import { HeaderMegaMenu } from "./components/HeaderMegaMenu";
import { HeroImageBackground } from "./components/HeroImageBackground";
import { HittraxIntegration } from "./components/HittraxIntegration";
import { WhoWeAre } from "./components/WhoWeAre";
import { Box } from "@mantine/core";
export default function Page() {
  return (
    <Box>
      <HeaderMegaMenu />
      <HeroImageBackground />
      <WhoWeAre />
      <HittraxIntegration />
    </Box>
  );
}
