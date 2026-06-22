import { ScrollProgressIndicator } from "./components/shared/ScrollProgressIndicator";
import { HeaderNavigationBar } from "./components/layout/HeaderNavigationBar";
import { HeroForensicsIntro } from "./components/sections/HeroForensicsIntro";
import { EvidenceScatteringScroll } from "./components/sections/EvidenceScatteringScroll";
import { NexFusionCorrelationSVG } from "./components/sections/NexFusionCorrelationSVG";
import { SevenDivisionsHorizontalScroll } from "./components/sections/SevenDivisionsHorizontalScroll";
import { NexCaseCommandDashboard } from "./components/sections/NexCaseCommandDashboard";
import { RigorTrustStatements } from "./components/sections/RigorTrustStatements";
import { InstitutionalResearchGrid } from "./components/sections/InstitutionalResearchGrid";
import { FutureOfForensicsQuote } from "./components/sections/FutureOfForensicsQuote";
import { ExecutiveBriefingCallToAction } from "./components/sections/ExecutiveBriefingCallToAction";
import { FooterNavigationGrid } from "./components/layout/FooterNavigationGrid";

export default function App() {
  return (
    <main className="nexgen-home">
      <ScrollProgressIndicator />
      <HeaderNavigationBar />

      <HeroForensicsIntro />
      <EvidenceScatteringScroll />
      <NexFusionCorrelationSVG />
      
      <div id="platform">
        <SevenDivisionsHorizontalScroll />
      </div>
      
      <NexCaseCommandDashboard />
      
      <div id="validation">
        <RigorTrustStatements />
      </div>
      
      <div id="research">
        <InstitutionalResearchGrid />
      </div>
      
      <FutureOfForensicsQuote />
      
      <div id="briefing">
        <ExecutiveBriefingCallToAction />
      </div>

      <FooterNavigationGrid />
    </main>
  );
}
