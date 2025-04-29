import { GameChangerAthleticism } from "./components/GameChangerAthleticism";
import { GetInTouchSimple } from "./components/GetInTouchSimple";
import { HeaderMegaMenu } from "./components/HeaderMegaMenu";
import { HeroImageBackground } from "./components/HeroImageBackground";
import { HittraxIntegration } from "./components/HittraxIntegration";
import { TrainingPackages } from "./components/TrainingPackages";
import { WhoWeAre } from "./components/WhoWeAre";
import { FooterSocial } from "./components/FooterSocial";
import { Box } from "@mantine/core";
import { Payments } from "./components/Payments";
import { Scheduling } from "./components/Scheduling";
export default function Page() {
  return (
    <Box>
      <HeaderMegaMenu />
      <HeroImageBackground />
      <WhoWeAre />
      <HittraxIntegration />
      <GameChangerAthleticism />
      <TrainingPackages />
      <Payments />
      <Scheduling />
      <GetInTouchSimple />
      <FooterSocial />
    </Box>
  );
}
