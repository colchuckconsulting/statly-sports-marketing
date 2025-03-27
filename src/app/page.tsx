import { GameChangerAthleticism } from "./components/GameChangerAthleticism";
import { GetInTouchSimple } from "./components/GetInTouchSimple";
import { HeaderMegaMenu } from "./components/HeaderMegaMenu";
import { HeroImageBackground } from "./components/HeroImageBackground";
import { HittraxIntegration } from "./components/HittraxIntegration";
import { TrainingPackages } from "./components/TrainingPackages";
import { WhoWeAre } from "./components/WhoWeAre";
import { FooterSocial } from "./components/FooterSocial";
import { Box } from "@mantine/core";
export default function Page() {
  return (
    <Box>
      <HeaderMegaMenu />
      <HeroImageBackground />
      <WhoWeAre />
      <HittraxIntegration />
      <GameChangerAthleticism />
      <TrainingPackages />
      <GetInTouchSimple />
      <FooterSocial />
    </Box>
  );
}
