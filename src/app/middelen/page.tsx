import { AlcoholSection } from "~/components/sections/middelen/alcohol";
import { CannabisSection } from "~/components/sections/middelen/cannabis";
import { CocaineSection } from "~/components/sections/middelen/cocaine";
import { GhbSection } from "~/components/sections/middelen/ghb";
import { HeroineSection } from "~/components/sections/middelen/heroine";
import { LachgasSection } from "~/components/sections/middelen/lachgas";
import { SpeedSection } from "~/components/sections/middelen/speed";
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
          <AccordionSection value="ghb" title="GHB" section={<GhbSection />} />
          <AccordionSection
            value="speed"
            title="Speed"
            section={<SpeedSection />}
          />
          <AccordionSection
            value="lachgas"
            title="Lachgas"
            section={<LachgasSection />}
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
