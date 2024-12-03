import Image from "next/image";
import { AccordionSubSection, StyledParagraph } from "./cocaine";
import { Button } from "~/components/ui/button";
import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "~/components/ui/dialog";
import { ListItem } from "~/components/ui/list-item";
import { type ReactNode } from "react";
import { Accordion } from "~/components/ui/accordion";
import { SubSectionHeader, SubSectionParagraph } from "./ghb";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  description?: string;
  className?: string;
}

const ResponsiveImage = ({
  src,
  alt,
  description,
  className,
}: ResponsiveImageProps) => {
  return (
    <div
      className={`relative mb-10 mt-6 flex h-full items-center justify-center rounded-md lg:my-12 ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        width={128}
        height={128}
        className="h-32 w-32 rounded-md border-2 border-black border-opacity-30 object-cover md:h-48 md:w-48 lg:h-64 lg:w-64"
      />
      {description && (
        <span className="absolute -bottom-4 font-sans text-xs tracking-[1px] text-[#333333] text-opacity-90">
          {description}
        </span>
      )}
    </div>
  );
};

export default ResponsiveImage;

export function CannabisSection() {
  return (
    <Accordion type="single" collapsible className="w-full text-black">
      <AccordionSubSection
        value="algemene-kennis"
        title="Algemene kennis"
        section={
          <>
            <StyledParagraph marginBottom="mb-2">
              <span className="font-semibold">Wiet</span> is de (gedroogde)
              vrucht van de cannabisplant (toppen). THC en CBD zijn de
              hoofd-werkzame stoffen in wiet. THC is de psycho-actieve stof, Het
              effect wordt vaak omschreven als geestverruimend. En CBD heeft een
              meer pijnstillende en slaap opwekkende werking.
            </StyledParagraph>
            <ResponsiveImage
              src="/images/cannabis-1.jpg"
              alt="Plaatje van cannabis"
              description="Cannabis"
            />
            <StyledParagraph marginBottom="mb-2">
              Er zijn drie soorten cannabis planten:
            </StyledParagraph>
            <ul className="mb-8 flex flex-col gap-2 px-4">
              {" "}
              <ListItem>Cannabis Sativa (hoog in THC, laag in CBD)</ListItem>
              <ListItem>
                Cannabis Indica (ongeveer gelijk in THC en CBD)
              </ListItem>
              <ListItem>Cannabis Ruderalis (laag in thc, hoog in CBD)</ListItem>
            </ul>
            <StyledParagraph>
              Deze families worden met elkaar gekruist om tot de bekende
              wietsoorten uit de coffeshop te komen. Deze hybriden hebben namen
              die eindigen op bijvoorbeeld Haze (wat vaak wijst op een Sativa
              dominante hybride) of Kush (wat eerder wijst op een Indica
              dominante hybride).
            </StyledParagraph>
            <StyledParagraph marginBottom="mb-2">
              <span className="font-semibold">Hash</span> wordt gemaakt van
              wiet. De manier van vervaardigen bepaalt het soort hasj. Soms
              wordt bijvoorbeeld eerst de wiet gezeefd en daarna geperst
              (Marokkaanse hasj) of wordt de wiet met de hand van de toppen
              gewreven zodat er een donkere kneedachtige hasj overblijft die
              Charas wordt genoemd.
            </StyledParagraph>
            <ResponsiveImage
              src="/images/hash-1.png"
              alt="Plaatje van hash"
              description="Hash"
            />
          </>
        }
      />
      <AccordionSubSection
        value="voorlichting"
        title="Voorlichting"
        section={
          <>
            <StyledParagraph marginBottom="mb-2">
              <span className="italic">Cannabis en psychose</span>
              <br />
              de hoofd-werkzame stof in cannabis (THC), kan nadelige gevolgen
              hebben voor mensen die gevoelig zijn voor het krijgen van
              psychoses. Terwijl er van CBD redenen zijn om aan te nemen dat het
              juist bescherming kan bieden (MCGuire 2017).
            </StyledParagraph>
            <StyledParagraph marginBottom="mb-2">
              Het nemen van cannabis is dat altijd risicovol voor cliënten met
              een psychose gevoeligheid. Echter is het belangrijk om aan te
              sluiten bij de persoon en geen beslissingen voor iemand te maken.
              Dit werkt namelijk dikwijls averechts. Advies is om samen met de
              cliënt te kijken naar hoe er in stappen kan worden toegewerkt naar
              minder THC inname per dag, bijvoorbeeld door soorten te nemen die
              minder THC (en bij voorkeur juist meer CBD) bevatten. Voor een
              overzicht van soorten en bijbehorende THC en CBD gehaltes; zie de
              cannabis anamnese onder &apos;Afbouwtips&apos;.
            </StyledParagraph>
            <StyledParagraph marginBottom="mb-2">
              <span className="italic">Overige psychische klachten</span>
              <br />
              Er zijn verschillende klachten waar cannabis juist bij lijkt te
              helpen. Mensen nemen cannabis bijvoorbeeld tegen de pijn, om beter
              te slapen of om rustiger te blijven bij angst en spanning. Echter
              blijkt dat op lange termijn cannabis gebruik juist dergelijke
              klachten in stand kan houden, of zelfs kan verergeren. Men heeft
              dan de cannabis nodig om te voorkomen dat de klachten nog erger
              worden. Na een periode dagelijks cannabis gebruiken heeft het
              lichaam ongeveer acht weken nodig om weer tot een natuurlijker
              balans terug te keren.
            </StyledParagraph>
            <StyledParagraph marginBottom="mb-2">
              Tevens kan langdurig cannabisgebruik ook verschillende ritmes
              verstoren. Dit komt doordat THC zich hecht aan de CB1 receptor,
              waar normaal Anandamide neurotransmitters aan hechten, welke een
              grote rol spelen bij onder andere het reguleren van het “honger”
              gevoel, pijn en de vruchtbaarheid.
            </StyledParagraph>
          </>
        }
      />
      <AccordionSubSection
        value="afbouwtips"
        title="Afbouwtips"
        section={
          <>
            <StyledParagraph header="Afbouwtips" marginBottom="mb-2">
              Afbouwen met cannabis kan volgens de volgende methodes:
            </StyledParagraph>
            <div className="mb-8 flex flex-col gap-2">
              {" "}
              <SubSectionParagraph>
                <span className="font-semibold">Sterkte:</span> er kan minder
                sterke cannabis gerookt worden (zie cannabis anamnese)
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold"> Hoeveelheid:</span> er kan
                minder cannabis in de joint worden verwerkt
              </SubSectionParagraph>
              <SubSectionParagraph>
                <span className="font-semibold"> Frequentie:</span> er kan
                minder vaak een joint worden gerookt.
              </SubSectionParagraph>
            </div>
            <div className="mb-10">
              <CannabisAnamnese />
            </div>
          </>
        }
      />
    </Accordion>
  );
}

export function TableHeaderCellStyled({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <th
      className={`${className} min-w-28 border border-black border-opacity-70 px-2 text-left font-sans text-[#333333]`}
    >
      {children}
    </th>
  );
}

export function TableCellStyled({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <td
      className={`${className} min-w-28 border border-black border-opacity-70 px-2 text-left font-sans text-[#333333]`}
    >
      {" "}
      {children}
    </td>
  );
}

function CannabisTableHeaderRow() {
  return (
    <thead>
      <tr className="h-8 w-full font-bold">
        <th className="min-w-28 px-2"></th>
        <TableHeaderCellStyled>Psychose</TableHeaderCellStyled>
        <TableHeaderCellStyled>ADHD</TableHeaderCellStyled>
        <TableHeaderCellStyled>Depressie</TableHeaderCellStyled>
        <TableHeaderCellStyled>Angst</TableHeaderCellStyled>
        <TableHeaderCellStyled>Persoonlijkheid</TableHeaderCellStyled>
        <TableHeaderCellStyled>Slaap</TableHeaderCellStyled>
        <TableHeaderCellStyled>Pijn</TableHeaderCellStyled>
        <TableHeaderCellStyled>Eenzaamheid</TableHeaderCellStyled>
        <TableHeaderCellStyled>Compulsiviteit</TableHeaderCellStyled>
      </tr>
    </thead>
  );
}

function CannabisTableValueRow({
  label,
  colors,
}: {
  label: string;
  colors: ("red" | "orange" | "green" | "blue")[];
}) {
  return (
    <tr className="relative h-8 w-full border border-black border-opacity-70 text-[#333333]">
      <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans font-bold">
        {label}
      </td>
      {colors.map((color, idx) => {
        return (
          <td
            key={`${label}-${idx}`}
            className={`bg-opacity-80 ${color === "red" && "bg-red-500"} ${color === "orange" && "bg-orange-500"} ${color === "green" && "bg-green-500"} ${color === "blue" && "bg-blue-500"} h-8 min-w-28 border border-black border-opacity-70`}
          />
        );
      })}
    </tr>
  );
}

function LegendaRow({
  text,
  backgroundColor,
}: {
  text: string;
  backgroundColor: string;
}) {
  return (
    <div className="flex flex-row items-center gap-6 px-2">
      <div
        className={`h-8 min-w-12 border border-black border-opacity-70 ${backgroundColor} bg-opacity-80 px-2`}
      />
      <div className="font-sans text-sm text-[#333333] text-opacity-90 lg:text-base">
        {" "}
        {text}
      </div>
    </div>
  );
}

function HackyCSSTable({
  title,
  values,
  hasLeftBorder = false,
}: {
  title: string;
  values: string[];
  hasLeftBorder?: boolean;
}) {
  return (
    <table className="min-w-64 border-collapse">
      <tbody>
        <tr
          className={`relative h-8 w-full border border-black border-opacity-70 ${!hasLeftBorder && "lg:border-l-0"}`}
        >
          <td
            className={`min-w-28 border border-black border-opacity-70 px-2 text-left font-sans font-bold text-[#333333] ${!hasLeftBorder && "lg:border-l-0"}`}
          >
            {title}
          </td>
        </tr>
        {values.map((value, idx) => {
          if (value === "") {
            return (
              <tr
                key={`${title}-${idx}`}
                className={`relative hidden h-8 w-full border border-black border-opacity-70 lg:table-row ${!hasLeftBorder && "lg:border-l-0"}`}
              >
                <td
                  className={`min-w-28 border border-black border-opacity-70 px-2 text-left font-sans ${!hasLeftBorder && "lg:border-l-0"}`}
                />
              </tr>
            );
          }

          return (
            <tr
              key={`${title}-${idx}`}
              className={`relative h-8 w-full border border-black border-opacity-70 ${!hasLeftBorder && "lg:border-l-0"}`}
            >
              <td
                className={`min-w-28 border border-black border-opacity-70 px-2 text-left font-sans ${!hasLeftBorder && "lg:border-l-0"}`}
              >
                {value}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function CannabisAnamnese() {
  return (
    <Dialog>
      <DialogTrigger className="w-full gap-2 rounded-none bg-white bg-opacity-30 px-4 py-2 text-[#333333] hover:bg-opacity-80 hover:shadow-sm">
        <div className="text-center font-sans text-sm font-light tracking-[1px] text-[#333333] text-opacity-90">
          Open de cannabis anamnese
        </div>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[1300px] overflow-x-hidden overflow-y-scroll rounded-md bg-opacity-80 bg-gradient-to-b from-[#ffffff] to-blue-50">
        <DialogHeader className="mb-2 mt-4">
          <DialogTitle className="w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Cannabis anamnese
          </DialogTitle>
        </DialogHeader>
        <div className="overflow-x-scroll">
          <table className="relative h-auto w-full border-collapse">
            <CannabisTableHeaderRow />
            <tbody>
              <CannabisTableValueRow
                label="Zeefhasj"
                colors={[
                  "orange",
                  "green",
                  "orange",
                  "orange",
                  "orange",
                  "orange",
                  "orange",
                  "blue",
                  "green",
                ]}
              />
              <CannabisTableValueRow
                label="Charras"
                colors={[
                  "orange",
                  "green",
                  "green",
                  "green",
                  "green",
                  "orange",
                  "orange",
                  "blue",
                  "green",
                ]}
              />
              <CannabisTableValueRow
                label="Sativa"
                colors={[
                  "red",
                  "red",
                  "red",
                  "red",
                  "red",
                  "green",
                  "green",
                  "red",
                  "red",
                ]}
              />
              <CannabisTableValueRow
                label="Indica"
                colors={[
                  "orange",
                  "orange",
                  "orange",
                  "orange",
                  "orange",
                  "green",
                  "green",
                  "orange",
                  "green",
                ]}
              />
              <CannabisTableValueRow
                label="CBD wiet"
                colors={[
                  "green",
                  "blue",
                  "green",
                  "green",
                  "blue",
                  "green",
                  "blue",
                  "green",
                  "blue",
                ]}
              />
            </tbody>
          </table>
          <div className="my-8 flex flex-col gap-4">
            <LegendaRow
              text="Geen directe reden om actie te ondernemen"
              backgroundColor="bg-green-500"
            />
            <LegendaRow
              text="Niet ideaal, overweeg over te stappen op een andere soort"
              backgroundColor="bg-orange-500"
            />
            <LegendaRow
              text="Veel risico, hoge druk om over te stappen"
              backgroundColor="bg-red-500"
            />
            <LegendaRow
              text="Geen informatie beschikbaar over interactie"
              backgroundColor="bg-blue-500"
            />
          </div>
        </div>
        <div className="mb-6">
          <h3 className="mb-4 w-full font-sans text-sm tracking-[1px] text-[#333333] lg:tracking-[0.1rem]">
            <span className="text-base font-semibold">Soorten lijst </span>(Bij
            verkoopnaam, inclusief gemiddelde THC percentages)
          </h3>
          <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:gap-0">
            <HackyCSSTable
              hasLeftBorder
              title="Zeefhasj (laag CBD)"
              values={[
                "Polm (15,7%)",
                "Maroc (27%)",
                "Hya (19,6%)",
                "",
                "",
                "",
              ]}
            />
            <HackyCSSTable
              title="Charras (hoog CBD)"
              values={[
                "Afghan (7,7%)",
                "Nepal (19%)",
                "Kashmir (20-25%)",
                "",
                "",
                "",
              ]}
            />
            <HackyCSSTable
              title="Sativa (weinig tot geen CBD)"
              values={[
                "Amnesia Haze (21%)",
                "Cheese (17%)",
                "Lemon Haze (20%)",
                "Silver Haze (23%)",
                "Mexican Haze (18%)",
                "",
              ]}
            />
            <HackyCSSTable
              title="Indica (hoger in CBD)"
              values={[
                "White Widow (WW) (18%)",
                "Northern Lights Extra (NLX) (10%)",
                "Powerplant (PP) (15%)",
                "Jack Harer (20%)",
                "Bubblegum (19%)",
                "AK-47 (17,5%)",
              ]}
            />
          </div>
          <SubSectionHeader>Afbouw parameters</SubSectionHeader>
          <div className="font-sans text-base tracking-[1px] text-[#333333]">
            <div className="mb-2 flex flex-col lg:mb-0 lg:flex-row">
              <span className="w-48 italic">Eenheid kwantiteit:</span>
              <span> De hoeveelheid joints die worden gerookt</span>
            </div>
            <div className="mb-2 flex flex-col lg:mb-0 lg:flex-row">
              <span className="w-48 italic">Volume:</span>
              <span>
                De hoeveelheid cannabis die dagelijks wordt geconsumeerd
              </span>
            </div>
            <div className="mb-2 flex flex-col lg:mb-0 lg:flex-row">
              <span className="w-48 italic">Sterkte:</span>
              <span>De hoeveelheid THC in de cannabis</span>
            </div>
          </div>
        </div>
        <DialogClose asChild>
          <Button
            type="button"
            variant="secondary"
            className="rounded-md border bg-transparent"
          >
            Sluiten
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
