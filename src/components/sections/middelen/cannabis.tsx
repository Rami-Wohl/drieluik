import Image from "next/image";
import { StyledParagraph } from "./cocaine";
import { Button } from "~/components/ui/button";
import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "~/components/ui/dialog";

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
      className={`relative my-10 flex h-full items-center justify-center rounded-md lg:my-12 ${className ?? ""}`}
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
    <div>
      <StyledParagraph header="Algemene kennis">
        <span className="font-semibold">Wiet</span> is de (gedroogde) vrucht van
        de cannabisplant (toppen). THC en CBD zijn de hoofd-werkzame stoffen in
        wiet. THC is de psycho-actieve stof, Het effect wordt vaak omschreven
        als geestverruimend. En CBD heeft een meer pijnstillende en slaap
        opwekkende werking.
      </StyledParagraph>
      <ResponsiveImage
        src="/images/cannabis-1.jpg"
        alt="Plaatje van cannabis"
        description="Cannabis"
      />
      <StyledParagraph marginBottom="mb-2">
        Er zijn drie soorten cannabis planten:
      </StyledParagraph>
      <ul className="mb-8 flex flex-col gap-3 px-4">
        {" "}
        <li className="list-item list-disc pl-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
          Cannabis Sativa (hoog in THC, laag in CBD)
        </li>
        <li className="list-item list-disc pl-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
          Cannabis Indica (ongeveer gelijk in THC en CBD)
        </li>
        <li className="list-item list-disc pl-4 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
          Cannabis Ruderalis (laag in thc, hoog in CBD)
        </li>
      </ul>
      <StyledParagraph>
        Deze families worden met elkaar gekruist om tot de bekende wietsoorten
        uit de coffeshop te komen. Deze hybriden hebben namen die eindigen op
        bijvoorbeeld Haze (wat vaak wijst op een Sativa dominante hybride) of
        Kush (wat eerder wijst op een Indica dominante hybride).
      </StyledParagraph>
      <StyledParagraph>
        <span className="font-semibold">Hash</span> wordt gemaakt van wiet. De
        manier van vervaardigen bepaalt het soort hasj. Soms wordt bijvoorbeeld
        eerst de wiet gezeefd en daarna geperst (Marokkaanse hasj) of wordt de
        wiet met de hand van de toppen gewreven zodat er een donkere
        kneedachtige hasj overblijft die Charas wordt genoemd.
      </StyledParagraph>
      <ResponsiveImage
        src="/images/hash-1.png"
        alt="Plaatje van hash"
        description="Hash"
      />
      <StyledParagraph header="Afbouwtips" marginBottom="mb-2">
        Afbouwen met cannabis kan volgens de volgende methodes:
      </StyledParagraph>
      <ul className="mb-8 flex flex-col gap-2">
        {" "}
        <li className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
          <span className="font-semibold">Sterkte:</span> er kan minder sterke
          cannabis gerookt worden (zie cannabis anamnese)
        </li>
        <li className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
          <span className="font-semibold"> Hoeveelheid:</span> er kan minder
          cannabis in de joint worden verwerkt
        </li>
        <li className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
          <span className="font-semibold"> Frequentie:</span> er kan minder vaak
          een joint worden gerookt.
        </li>
      </ul>
      <div className="mb-10">
        <CannabisAnamnese />
      </div>
      <StyledParagraph header="Voorlichting" marginBottom="mb-2">
        <span className="italic">Cannabis en psychose</span>
        <br />
        de hoofd-werkzame stof in cannabis (THC), kan nadelige gevolgen hebben
        voor mensen die gevoelig zijn voor het krijgen van psychoses. Terwijl er
        van CBD redenen zijn om aan te nemen dat het juist bescherming kan
        bieden (MCGuire 2017).
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Het nemen van cannabis is dat altijd risicovol voor cliënten met een
        psychose gevoeligheid. Echter is het belangrijk om aan te sluiten bij de
        persoon en geen beslissingen voor iemand te maken. Dit werkt namelijk
        dikwijls averechts. Advies is om samen met de cliënt te kijken naar hoe
        er in stappen kan worden toegewerkt naar minder THC inname per dag,
        bijvoorbeeld door soorten te nemen die minder THC (en bij voorkeur juist
        meer CBD) bevatten. Voor een overzicht van soorten en bijbehorende THC
        en CBD gehaltes; zie cannabis anamnese.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        <span className="italic">Overige psychische klachten</span>
        <br />
        Er zijn verschillende klachten waar cannabis juist bij lijkt te helpen.
        Mensen nemen cannabis bijvoorbeeld tegen de pijn, om beter te slapen of
        om rustiger te blijven bij angst en spanning. Echter blijkt dat op lange
        termijn cannabis gebruik juist dergelijke klachten in stand kan houden,
        of zelfs kan verergeren. Men heeft dan de cannabis nodig om te voorkomen
        dat de klachten nog erger worden. Na een periode dagelijks cannabis
        gebruiken heeft het lichaam ongeveer acht weken nodig om weer tot een
        natuurlijker balans terug te keren.
      </StyledParagraph>
      <StyledParagraph marginBottom="mb-2">
        Tevens kan langdurig cannabisgebruik ook verschillende ritmes verstoren.
        Dit komt doordat THC zich hecht aan de CB1 receptor, waar normaal
        Anandamide neurotransmitters aan hechten, welke een grote rol spelen bij
        onder andere het reguleren van het “honger” gevoel, pijn en de
        vruchtbaarheid.
      </StyledParagraph>
    </div>
  );
}

function CannabisTableHeaderRow() {
  return (
    <thead>
      <tr className="h-8 w-full">
        <th className="min-w-28 px-2 text-left font-sans font-bold"></th>
        <th className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans font-bold">
          Psychose
        </th>
        <th className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans font-bold">
          ADHD
        </th>
        <th className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans font-bold">
          Depressie
        </th>
        <th className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans font-bold">
          Angst
        </th>
        <th className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans font-bold">
          Persoonlijkheid
        </th>
        <th className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans font-bold">
          Slaap
        </th>
        <th className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans font-bold">
          Pijn
        </th>
        <th className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans font-bold">
          Eenzaamheid
        </th>
        <th className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans font-bold">
          Compulsiviteit
        </th>
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
    <tr className="relative h-8 w-full border border-black border-opacity-70">
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

function CannabisAnamnese() {
  return (
    <Dialog>
      <DialogTrigger className="w-full gap-2 rounded-none bg-white bg-opacity-30 px-4 py-2 hover:bg-opacity-80 hover:shadow-sm">
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
            <div className="flex flex-row items-center gap-6 px-2">
              <div
                className={`h-8 min-w-12 border border-black border-opacity-70 bg-green-500 bg-opacity-80 px-2`}
              />
              <div className="font-sans text-sm text-[#333333] text-opacity-90 lg:text-base">
                {" "}
                Geen directe reden om actie te ondernemen
              </div>
            </div>
            <div className="flex flex-row items-center gap-6 px-2">
              <div
                className={`h-8 min-w-12 border border-black border-opacity-70 bg-orange-500 bg-opacity-80 px-2`}
              />
              <div className="font-sans text-sm text-[#333333] text-opacity-90 lg:text-base">
                {" "}
                Niet ideaal, overweeg over te stappen op een andere soort
              </div>
            </div>
            <div className="flex flex-row items-center gap-6 px-2">
              <div
                className={`h-8 min-w-12 border border-black border-opacity-70 bg-red-500 bg-opacity-80 px-2`}
              />
              <div className="font-sans text-sm text-[#333333] text-opacity-90 lg:text-base">
                {" "}
                Veel risico, hoge druk om over te stappen
              </div>
            </div>
            <div className="flex flex-row items-center gap-6 px-2">
              <div
                className={`h-8 min-w-12 border border-black border-opacity-70 bg-blue-500 bg-opacity-80 px-2`}
              />
              <div className="font-sans text-sm text-[#333333] text-opacity-90 lg:text-base">
                {" "}
                Geen informatie beschikbaar over interactie
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="mb-4 w-full font-sans text-sm tracking-[1px] text-[#333333] lg:tracking-[0.1rem]">
            <span className="text-base font-semibold">Soorten lijst </span>(Bij
            verkoopnaam, inclusief gemiddelde THC percentages)
          </h3>
          <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:gap-0">
            <table className="min-w-64 border-collapse">
              <tbody>
                <tr className="relative h-8 w-full border border-black border-opacity-70">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans font-bold">
                    Zeefhasj (laag CBD)
                  </td>
                </tr>
                <tr className="relative h-8 w-full border border-black border-opacity-70">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans">
                    Polm (15,7%)
                  </td>
                </tr>
                <tr className="relative h-8 w-full border border-black border-opacity-70">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans">
                    Maroc (27%)
                  </td>
                </tr>
                <tr className="relative h-8 w-full border border-black border-opacity-70">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans">
                    Hya (19,6%)
                  </td>
                </tr>
                <tr className="relative hidden h-8 w-full border border-black border-opacity-70 lg:table-row">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans"></td>
                </tr>
                <tr className="relative hidden h-8 w-full border border-black border-opacity-70 lg:table-row">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans"></td>
                </tr>
                <tr className="relative hidden h-8 w-full border border-black border-opacity-70 lg:table-row">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans"></td>
                </tr>
              </tbody>
            </table>
            <table className="min-w-64 border-collapse">
              <tbody>
                <tr className="relative h-8 w-full border border-black border-opacity-70 lg:border-l-0">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans font-bold lg:border-l-0">
                    Charras (hoog CBD)
                  </td>
                </tr>
                <tr className="relative h-8 w-full border border-black border-opacity-70 lg:border-l-0">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans lg:border-l-0">
                    Afghan (7,7%)
                  </td>
                </tr>
                <tr className="relative h-8 w-full border border-black border-opacity-70 lg:border-l-0">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans lg:border-l-0">
                    Nepal (19%)
                  </td>
                </tr>
                <tr className="relative h-8 w-full border border-black border-opacity-70 lg:border-l-0">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans lg:border-l-0">
                    Kashmir (20-25%)
                  </td>
                </tr>
                <tr className="relative hidden h-8 w-full border border-black border-opacity-70 lg:table-row lg:border-l-0">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans lg:border-l-0"></td>
                </tr>
                <tr className="relative hidden h-8 w-full border border-black border-opacity-70 lg:table-row lg:border-l-0">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans lg:border-l-0"></td>
                </tr>
                <tr className="relative hidden h-8 w-full border border-black border-opacity-70 lg:table-row lg:border-l-0">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans lg:border-l-0"></td>
                </tr>
              </tbody>
            </table>
            <table className="min-w-64 border-collapse">
              <tbody>
                <tr className="relative h-8 w-full border border-black border-opacity-70 lg:border-l-0">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans font-bold lg:border-l-0">
                    Sativa (weinig tot geen CBD)
                  </td>
                </tr>
                <tr className="relative h-8 w-full border border-black border-opacity-70 lg:border-l-0">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans lg:border-l-0">
                    Amnesia Haze (21%)
                  </td>
                </tr>
                <tr className="relative h-8 w-full border border-black border-opacity-70 lg:border-l-0">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans lg:border-l-0">
                    Cheese (17%)
                  </td>
                </tr>
                <tr className="relative h-8 w-full border border-black border-opacity-70 lg:border-l-0">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans lg:border-l-0">
                    Lemon Haze (20%)
                  </td>
                </tr>
                <tr className="relative h-8 w-full border border-black border-opacity-70 lg:border-l-0">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans lg:border-l-0">
                    Silver Haze (23%)
                  </td>
                </tr>
                <tr className="relative h-8 w-full border border-black border-opacity-70 lg:border-l-0">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans lg:border-l-0">
                    Mexican Haze (18%)
                  </td>
                </tr>
                <tr className="relative hidden h-8 w-full border border-black border-opacity-70 lg:table-row lg:border-l-0">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans lg:border-l-0"></td>
                </tr>
              </tbody>
            </table>
            <table className="min-w-64 border-collapse">
              <tbody>
                <tr className="relative h-8 w-full border border-black border-opacity-70 lg:border-l-0">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans font-bold lg:border-l-0">
                    Indica (hoger in CBD)
                  </td>
                </tr>
                <tr className="relative h-8 w-full border border-black border-opacity-70 lg:border-l-0">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans lg:border-l-0">
                    White Widow (WW) (18%)
                  </td>
                </tr>
                <tr className="relative h-8 w-full border border-black border-opacity-70 lg:border-l-0">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans lg:border-l-0">
                    Northern Lights Extra (NLX) (10%)
                  </td>
                </tr>
                <tr className="relative h-8 w-full border border-black border-opacity-70 lg:border-l-0">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans lg:border-l-0">
                    Powerplant (PP) (15%)
                  </td>
                </tr>
                <tr className="relative h-8 w-full border border-black border-opacity-70 lg:border-l-0">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans lg:border-l-0">
                    Jack Harer (20%)
                  </td>
                </tr>
                <tr className="relative h-8 w-full border border-black border-opacity-70 lg:border-l-0">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans lg:border-l-0">
                    Bubblegum (19%)
                  </td>
                </tr>
                <tr className="relative h-8 w-full border border-black border-opacity-70 lg:border-l-0">
                  <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans lg:border-l-0">
                    AK-47 (17,5%)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="mb-4 w-full font-sans text-base font-semibold tracking-[1px] text-[#333333] lg:tracking-[0.1rem]">
            Afbouw parameters
          </h3>
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
