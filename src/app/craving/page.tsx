import {
  AandachtsOefening1,
  AandachtsOefening2,
  AandachtsOefening3,
} from "~/components/sections/craving/aandachtsoefeningen";
import { AdemhalingsOefening1 } from "~/components/sections/craving/ademhalingsoefeningen";
import { CravingCheck } from "~/components/sections/craving/craving-check";
import { Signaleringsplan } from "~/components/sections/craving/signaleringsplan/signaleringsplan";
import {
  OntspanningsOefening1,
  OntspanningsOefening2,
} from "~/components/sections/craving/ontspanningsoefeningen";
import {
  VerbeeldingsOefening1,
  VerbeeldingsOefening2,
} from "~/components/sections/craving/verbeeldingsoefeningen";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { ListItem } from "~/components/ui/list-item";
import { Pageheader } from "~/components/ui/pageheader";
import { CravingInfo } from "./craving-info";
import { VervangendeActiviteiten } from "~/components/sections/craving/vervangende-activiteiten";
import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { Divider } from "~/components/ui/text-components/divider";
import { SubSectionHeader } from "~/components/ui/text-components/subsection-header";

export default function CravingPage() {
  return (
    <>
      <div className="relative mt-32 flex w-full max-w-full flex-col items-center justify-center gap-10 px-6 md:max-w-[900px]">
        <div className="flex items-baseline gap-2 md:gap-4">
          <Pageheader text="Craving" />
          <CravingInfo />
        </div>
        <Accordion type="single" collapsible className="w-full text-black">
          <AccordionItem
            value="signaleringsplan"
            className="border-blue-950 border-opacity-5"
          >
            <AccordionTrigger className="mb-1 rounded-md bg-blue-900 bg-opacity-30 p-4 hover:bg-opacity-50 hover:no-underline">
              Signaleringsplan
            </AccordionTrigger>
            <AccordionContent className="bg-blue-900 bg-opacity-5 p-6">
              <Signaleringsplan />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="craving-check"
            className="border-blue-950 border-opacity-5"
          >
            <AccordionTrigger className="mb-1 rounded-md bg-blue-900 bg-opacity-30 p-4 hover:bg-opacity-50 hover:no-underline">
              Craving check
            </AccordionTrigger>
            <AccordionContent className="bg-blue-900 bg-opacity-5 p-6">
              <CravingCheck />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="vervangende-activiteiten"
            className="border-blue-950 border-opacity-5"
          >
            <AccordionTrigger className="mb-1 rounded-md bg-blue-900 bg-opacity-30 p-4 hover:bg-opacity-50 hover:no-underline">
              Vervangende bezigheden
            </AccordionTrigger>
            <AccordionContent className="bg-blue-900 bg-opacity-5 p-6">
              <VervangendeActiviteiten />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="ademhalingsoefeningen"
            className="border-blue-950 border-opacity-5"
          >
            <AccordionTrigger className="mb-1 rounded-md bg-blue-900 bg-opacity-30 p-4 hover:bg-opacity-50 hover:no-underline">
              Ademhalingsoefening
            </AccordionTrigger>
            <AccordionContent className="bg-blue-900 bg-opacity-5 p-6">
              <p className="mb-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                In je lichaam zit veel ervaring opgeslagen. Je lichaam onthoudt
                wat je hebt meegemaakt, ook als je daar niet altijd bewust aan
                denkt. Bij mensen met verslavingsproblemen kan dit zichtbaar
                worden in craving, spanning, lichaamshouding of automatische
                gewoonten.
              </p>{" "}
              <p className="mb-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                Door rustig en met aandacht naar je lichaam te luisteren, kun je
                signalen eerder herkennen. Je leert beter merken wat er in je
                gebeurt, zodat je eerder kunt ingrijpen bij spanning, onrust of
                trek. Oefeningen met ademhaling, beweging en lichaamsbewustzijn
                kunnen helpen om meer rust te krijgen en craving te verminderen.
              </p>
              <div className="my-2 flex flex-col gap-2">
                <AdemhalingsOefening1 />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="ontspanningsoefeningen"
            className="border-blue-950 border-opacity-5"
          >
            <AccordionTrigger className="mb-1 rounded-md bg-blue-900 bg-opacity-30 p-4 hover:bg-opacity-50 hover:no-underline">
              Ontspanningsoefeningen
            </AccordionTrigger>
            <AccordionContent className="bg-blue-900 bg-opacity-5 p-6">
              <p className="mb-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                De ontspanningsoefening is een goede basis om steeds naar terug
                te keren. We zetten ontspanningsoefeningen in, omdat de meeste
                craving een vorm van arousal (spanning) is. Je kan twee stadia
                aanbrengen in het vormgeven van de ontspanningsoefeningen. De
                eerste is meer gericht op bewust spanning uit het lichaam te
                laten en de tweede is meer gericht op het visualiseren.
              </p>
              <p className="mb-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                Klik op een ontspanningsoefening om de instructies te lezen:
              </p>
              <div className="my-2 flex flex-col gap-2">
                <OntspanningsOefening1 />
                <OntspanningsOefening2 />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="aandachtsoefeningen"
            className="border-blue-950 border-opacity-5"
          >
            <AccordionTrigger className="mb-1 rounded-md bg-blue-900 bg-opacity-30 p-4 hover:bg-opacity-50 hover:no-underline">
              Aandachtsoefeningen
            </AccordionTrigger>
            <AccordionContent className="flex flex-col bg-blue-900 bg-opacity-5 p-6">
              <p className="mb-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                Aandachtsoefeningen zijn methoden om de focus en het bewustzijn
                te trainen, gericht op het vergroten van de controle over
                gedachten en impulsen. In de verslavingszorg worden deze
                oefeningen ingezet om cliënten te helpen bewust aanwezig te zijn
                in het moment, waardoor ze minder snel overvallen worden door
                automatische reacties en cravings. Door regelmatige oefening
                kunnen cliënten beter omgaan met stressvolle situaties, hun
                impulsen beter begrijpen, en bewuster keuzes maken die
                aansluiten bij hun herstel.
              </p>
              <p className="mb-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                Klik op een aandachtsoefening om de instructies te lezen:
              </p>
              <div className="my-2 flex flex-col gap-2">
                <AandachtsOefening1 />
                <AandachtsOefening2 />
                <AandachtsOefening3 />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="verbeeldingsoefeningen"
            className="border-blue-950 border-opacity-5"
          >
            <AccordionTrigger className="mb-1 rounded-md bg-blue-900 bg-opacity-30 p-4 hover:bg-opacity-50 hover:no-underline">
              Verbeeldingsoefeningen
            </AccordionTrigger>
            <AccordionContent className="bg-blue-900 bg-opacity-5 p-6">
              <StyledParagraph marginBottom="mb-2">
                Het doel van verbeeldingsoefeningen bij de behandeling van
                verslaving is het ondersteunen van cognitieve, emotionele en
                gedragsmatige veranderingen door middel van mentale
                representaties en visualisaties. Cognitieve processen rond
                aandacht en craving zijn medebepalend voor verslavingsgedrag.
                Dus mentale strategieën (visualisatie, cognitieve
                herstructurering) gericht op aandacht en beelden zijn zinvol in
                therapie
              </StyledParagraph>
              <StyledParagraph marginBottom="mb-2">
                Imaginatie als op zichzelf staande cue-exposure is vaak
                onvoldoende effectief; maar als de verbeeldingsoefening
                gecombineerd worden met coping- en mindfulnessvaardigheden, dan
                is er wetenschappelijke evidentie voor werkzaamheid.{" "}
              </StyledParagraph>
              <Divider />
              <StyledParagraph marginBottom="mb-2">
                Verbeeldingoefeningen (mental imagery of imaginatie) worden
                gebruikt in verslavingsbehandeling om cliënten helpen:
              </StyledParagraph>
              <ol className="mb-4 flex flex-col gap-3 px-4">
                <ListItem ordered>
                  <b>Craving te herkennen en te reguleren </b>– cliënten leren
                  mentale beelden van middelengebruik of triggers te observeren
                  zonder impulsief te handelen.
                </ListItem>
                <ListItem ordered>
                  <b>Copingvaardigheden te versterken </b>– door alternatieve
                  gedragingen in gedachten te oefenen bij blootstelling aan
                  triggers.
                </ListItem>
                <ListItem ordered>
                  <b>Zelfcontrole en motivatie te verhogen </b>– positieve
                  toekomstscenario’s of succeservaringen worden mentaal
                  geoefend.
                </ListItem>
                <ListItem ordered>
                  <b>Emotionele regulatie te verbeteren </b>– het leren omgaan
                  met stress, angst of negatieve emoties zonder middelen.
                </ListItem>
              </ol>
              <Divider />
              <SubSectionHeader>Bronnen</SubSectionHeader>
              <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
                <ListItem>
                  Kavanagh, A. M., Andrade, J., & May, J. (2005).
                  <i>
                    Imaginary relish and exquisite torture: The elaborated
                    intrusion theory of desire.
                  </i>{" "}
                  Psychological Review, 112(2), 446–467.
                </ListItem>
                <ListItem>
                  May, J., Kavanagh, D. J., & Andrade, J. (2015).
                  <i>
                    The elaborated intrusion theory of desire: A 10-year
                    retrospective and implications for addiction treatments.
                  </i>{" "}
                  Addictive Behaviors, 44, 29–34.
                </ListItem>
                <ListItem>
                  Bowen, S., Chawla, N., & Marlatt, G. A. (2011).
                  <i>
                    Mindfulness-based relapse prevention for addictive
                    behaviors: A clinician’s guide.
                  </i>{" "}
                  Guilford Press.
                </ListItem>
                <ListItem>
                  Grant, J. E., & Potenza, M. N. (2006).
                  <i>Neurobiology of gambling behavior. </i> Current Psychiatry
                  Reports, 8(5), 399–404.
                </ListItem>
                <ListItem>
                  Huang, Q., Liao, Z., Wang, X., Wang, W., Chao, L., Nie, Y.,
                  Peng, S., Zhao, L., Shen, H., Qi, J., & Chen, X. (2026).
                  <i>
                    Relationship between attentional bias and psychological
                    craving in methamphetamine use disorder.
                  </i>{" "}
                  Frontiers in Public Health, 13, Article 1659759.
                </ListItem>
              </ul>
              <p className="mb-8 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
                Klik op een verbeeldingsoefening om de instructies te lezen:
              </p>
              <div className="my-2 flex flex-col gap-2">
                <VerbeeldingsOefening1 />
                <VerbeeldingsOefening2 />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
