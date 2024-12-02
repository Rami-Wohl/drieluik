import { AlcoholSection } from "~/components/sections/middelen/alcohol";
import { CannabisSection } from "~/components/sections/middelen/cannabis";
import { CocaineSection } from "~/components/sections/middelen/cocaine";
import { HeroineSection } from "~/components/sections/middelen/heroine";
import { Accordion } from "~/components/ui/accordion";
import { AccordionSection } from "~/components/ui/accordion-section";
import { Pageheader } from "~/components/ui/pageheader";

export default function MiddelenPage() {
  return (
    <>
      <div className="mt-32 flex w-full max-w-[800px] flex-col items-center gap-8 px-4">
        <Pageheader text="Middelen" />
        <h2 className="px-2 font-sans text-sm text-[#333333] text-opacity-90 lg:text-lg">
          Dit luik gaat over de verschillende middelen. Per middel vind je
          algemene kennis, informatie voor voorlichting en tips voor afbouwen.{" "}
        </h2>

        <Accordion type="single" collapsible className="w-full text-black">
          <AccordionSection
            value="cannabis"
            title="Cannabis"
            section={<CannabisSection />}
          />
          <AccordionSection
            value="alcohol"
            title="Alcohol"
            section={<AlcoholSection />}
          />
          <AccordionSection
            value="opiaten"
            title="Heroïne (en andere opiaten)"
            section={<HeroineSection />}
          />
          <AccordionSection
            value="cocaine"
            title="Cocaïne"
            section={<CocaineSection />}
          />
          <AccordionSection
            value="ghb"
            title="GHB"
            section={"...binnenkort beschikbaar..."}
          />
          <AccordionSection
            value="speed"
            title="Speed"
            section={"...binnenkort beschikbaar..."}
          />
          <AccordionSection
            value="lachgas"
            title="Lachgas"
            section={"...binnenkort beschikbaar..."}
          />
          <AccordionSection
            value="overig"
            title="Overig"
            section={"...binnenkort beschikbaar..."}
          />
        </Accordion>
      </div>
    </>
  );
}
