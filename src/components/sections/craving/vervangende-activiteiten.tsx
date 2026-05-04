import { Button } from "~/components/ui/button";
import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "~/components/ui/dialog";
import { ListItem } from "~/components/ui/list-item";
import { TableCellStyled } from "~/components/ui/table-components/table-cell";
import { TableHeaderCellStyled } from "~/components/ui/table-components/table-header-cell";
import { Divider } from "~/components/ui/text-components/divider";
import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { SubSectionHeader } from "~/components/ui/text-components/subsection-header";

const columns = {
  fysiek: [
    "Wandelen in het park",
    "Strandwandeling",
    "Fietsen door de stad",
    "Hardlopen",
    "Yoga doen",
    "Thuis workout",
    "Dansen op muziek",
    "Zwemmen",
    "Wandelen met een hond",
    "Traplopen (bewust bewegen)",
    "Skaten",
    "Tafeltennissen",
    "Badmintonnen",
    "Voetballen",
    "Basketbal spelen",
    "Klimhal bezoeken",
    "Roeien",
    "Kanoën",
    "Fitnessen in de sportschool",
    "Stretchroutine doen",
    "Wandelen met muziek/podcast",
    "Pilates",
    "Tuinieren",
    "Onkruid wieden",
    "Buiten picknicken",
    "Frisbeeën",
    "Jeu de boules spelen",
    "Geo coaching",
    "Snelwandelen",
    "Intervaltraining doen",
  ],
  creatief: [
    "Tekenen",
    "Schilderen",
    "Kleuren (voor volwassenen)",
    "Bullet journaling",
    "Dagboek schrijven",
    "Gedichten schrijven",
    "Verhalen schrijven",
    "Fotografie",
    "Video’s maken",
    "Knutselen",
    "Origami",
    "Haken",
    "Breien",
    "Muziek maken",
    "Gitaar spelen",
    "Piano oefenen",
    "Zingen",
    "DJ’en (experimenteren)",
    "Collages maken",
    "Moodboard maken",
    "Kalligrafie oefenen",
    "Scrapbook maken",
    "Kaarten maken",
    "DIY-project starten",
    "Meubels opknappen",
    "Koken als creatieve activiteit",
    "Nieuwe recepten bedenken",
    "Bakken",
    "Taarten decoreren",
    "Kaarsen maken",
  ],
  sociaal: [
    "Koffie drinken met iemand",
    "Samen wandelen",
    "Samen koken",
    "Samen eten",
    "Bordspel spelen",
    "Kaartspel spelen",
    "Filmavond organiseren",
    "Sporten met iemand",
    "Familie bezoeken",
    "Vriend(in) bellen",
    "Videobellen",
    "Groepsles volgen",
    "Vrijwilligerswerk doen",
    "Club of vereniging bezoeken",
    "Samen studeren",
    "Pubquiz doen",
    "Spelletjesavond",
    "Samen muziek luisteren",
    "Samen dansen",
    "Nieuwe mensen ontmoeten",
    "Meetup bezoeken",
    "Samen een cursus volgen",
    "Iemand helpen verhuizen",
    "Samen winkelen",
    "Samen wandelen in natuur",
    "Samen koken voor anderen",
    "Huisdieren verzorgen samen",
    "Groepsmeditatie",
    "Samen sporten in park",
    "Samen doelen bespreken",
  ],
  ontspanning: [
    "Boek lezen",
    "Luisteren naar muziek",
    "Podcast luisteren",
    "Mediteren",
    "Ademhalingsoefeningen",
    "Warm bad nemen",
    "Douchen met aandacht",
    "Powernap doen",
    "Mindfulness oefening",
    "Natuurgeluiden luisteren",
    "Kaarsen aansteken",
    "Thee drinken in stilte",
    "Puzzelen",
    "Legpuzzel maken",
    "Sudoku",
    "Kruiswoordpuzzel",
    "Kleurboek invullen",
    "Rustige wandeling zonder telefoon",
    "Liggen in het gras",
    "Wolken kijken",
    "Sterren kijken",
    "Sauna bezoeken",
    "Massage (zelf of professioneel)",
    "Stretch en ontspanning",
    "Rustige muziek opzetten",
    "Digitale detox (telefoon uit)",
    "ASMR luisteren",
    "Visualisatie oefening",
    "Dankbaarheidslijst maken",
    "Stilte moment nemen",
  ],
  zingeving: [
    "Nieuwe taal leren",
    "Online cursus volgen",
    "Persoonlijke doelen opschrijven",
    "Weekplanning maken",
    "Reflecteren op je dag",
    "Dankbaarheidsdagboek bijhouden",
    "Levensdoelen formuleren",
    "Inspirerende boeken lezen",
    "Podcast over zelfontwikkeling",
    "Coaching oefeningen doen",
    "Waarden ontdekken",
    "Vision board maken",
    "Zelfhulpboek lezen",
    "Nieuwe hobby uitproberen",
    "Lezing volgen",
    "Workshop volgen",
    "Vrijwilligerswerk (structureel)",
    "Iemand helpen",
    "Mentor zoeken",
    "Reflectiegesprek voeren",
    "Schrijven over toekomst",
    "Mindset oefeningen doen",
    "Ochtendroutine ontwikkelen",
    "Avondroutine ontwikkelen",
    "Gezonde gewoontes opbouwen",
    "Grenzen leren stellen",
    "Zelfcompassie oefenen",
    "Dag evalueren",
    "Groei bijhouden (journal)",
    "Kleine successen vieren",
  ],
} as const;

export function VervangendeActiviteiten() {
  return (
    <Dialog>
      <DialogTrigger className="w-full gap-2 rounded-none bg-white bg-opacity-30 px-4 py-2 hover:bg-opacity-70 hover:shadow-sm">
        <div className="text-center font-sans text-sm font-light tracking-[1px] text-[#333333] text-opacity-90">
          Vervangende bezigheden tabel
        </div>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] w-11/12 max-w-full overflow-x-hidden overflow-y-scroll rounded-md bg-gradient-to-b from-backgroundStart to-background">
        <DialogHeader className="mb-2 mt-4">
          <DialogTitle className="w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Vervangende bezigheden
          </DialogTitle>
        </DialogHeader>
        <div className="my-6 flex flex-col overflow-scroll lg:px-4">
          <table className="mb-8">
            <thead>
              <tr>
                <TableHeaderCellStyled className="py-2 align-top">
                  Fysiek / actief
                </TableHeaderCellStyled>
                <TableHeaderCellStyled className="py-2 align-top">
                  Creatief
                </TableHeaderCellStyled>
                <TableHeaderCellStyled className="py-2 align-top">
                  Sociaal
                </TableHeaderCellStyled>
                <TableHeaderCellStyled className="py-2 align-top">
                  Ontspanning / rust
                </TableHeaderCellStyled>
                <TableHeaderCellStyled className="py-2 align-top">
                  Zingeving / groei
                </TableHeaderCellStyled>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 30 }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  <TableCellStyled className="py-2 align-top">
                    {columns.fysiek[rowIndex] ?? ""}
                  </TableCellStyled>

                  <TableCellStyled className="py-2 align-top">
                    {columns.creatief[rowIndex] ?? ""}
                  </TableCellStyled>

                  <TableCellStyled className="py-2 align-top">
                    {columns.sociaal[rowIndex] ?? ""}
                  </TableCellStyled>

                  <TableCellStyled className="py-2 align-top">
                    {columns.ontspanning[rowIndex] ?? ""}
                  </TableCellStyled>

                  <TableCellStyled className="py-2 align-top">
                    {columns.zingeving[rowIndex] ?? ""}
                  </TableCellStyled>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <DialogClose asChild>
          <Button
            type="button"
            variant="secondary"
            className="rounded-md border bg-backgroundStart bg-opacity-90"
          >
            Sluiten
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

export function VervangendeActiviteitenBronnen() {
  return (
    <Dialog>
      <DialogTrigger className="w-full gap-2 rounded-none bg-white bg-opacity-30 px-4 py-2 hover:bg-opacity-70 hover:shadow-sm">
        <div className="text-center font-sans text-sm font-light tracking-[1px] text-[#333333] text-opacity-90">
          Toelichting en bronnen
        </div>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] w-11/12 max-w-full overflow-x-hidden overflow-y-scroll rounded-md bg-gradient-to-b from-backgroundStart to-background">
        <DialogHeader className="mb-2 mt-4">
          <DialogTitle className="w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Vervangende bezigheden: toelichting en bronnen
          </DialogTitle>
        </DialogHeader>
        <div className="my-6 flex flex-col overflow-scroll lg:px-4">
          <StyledParagraph>
            Vervangende bezigheden zijn een centrale component van gedragsmatige
            interventies bij verslaving. Dit zijn activiteiten die de cliënt in
            plaats van middelengebruik kan ondernemen, met als doel het
            verminderen van gebruik en het versterken van positieve
            copingstrategieën. Dit kan variëren van sporten, hobby’s, sociale
            activiteiten, vrijwilligerswerk, tot mindfulness- of creatieve
            oefeningen. Vervangende bezigheden richten zich op positieve
            beloning, sociale interactie, copingvaardigheden en
            zelfeffectiviteit, wat cruciaal is voor het voorkomen van terugval.
          </StyledParagraph>
          <SubSectionHeader>
            Belangrijkste doelen en voordelen van vervangende bezigheden
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Versterken van beloningssystemen zonder middelen
          </StyledParagraph>
          <ul className="mb-6 flex flex-col gap-2 px-4">
            <ListItem>
              Middelengebruik activeert het beloningssysteem in de hersenen.
              Vervangende activiteiten bieden op een natuurlijke manier plezier
              en positieve ervaringen, waardoor de drang naar middelen kan
              afnemen.{" "}
            </ListItem>
            <ListItem>
              Ze helpen om gezonde routines weer op te pakken en plezier te
              ervaren zonder afhankelijk te zijn van middelen.{" "}
            </ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            Verminderen van triggers en cravings{" "}
          </StyledParagraph>
          <ul className="mb-6 flex flex-col gap-2 px-4">
            <ListItem>
              Door tijd te besteden aan alternatieve activiteiten, wordt de
              blootstelling aan middelen en verleidende cues verkleind.
            </ListItem>
            <ListItem>
              Ze helpen afleiding te bieden en doorbreken automatische
              gebruikspatronen.
            </ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            Bevorderen van sociale steun en verbondenheid{" "}
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              Deelname aan sociale of groepsactiviteiten vermindert isolement,
              een belangrijke risicofactor voor terugval.{" "}
            </ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            Verbeteren van emotionele regulatie en coping
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              Vervangende activiteiten helpen stress, angst en negatieve emoties
              te verminderen zonder middelen te gebruiken.
            </ListItem>
            <ListItem>
              Ze bieden een praktische manier om cognitieve en copingstrategieën
              die in therapie worden geleerd toe te passen.
            </ListItem>
          </ul>
          <StyledParagraph marginBottom="mb-2">
            Versterken van zelfvertrouwen en motivatie
          </StyledParagraph>
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              Succesvol deelnemen aan alternatieve activiteiten geeft een gevoel
              van controle en competentie, wat zelfvertrouwen en motivatie om
              abstinent te blijven vergroot.{" "}
            </ListItem>
          </ul>
          <Divider />
          <StyledParagraph marginBottom="mb-2" header="Bronnen">
            De inhoud van dit luik is gebaseerd op wetenschappelijke literatuur
            over craving, aandacht en imaginatie, waaronder:
          </StyledParagraph>{" "}
          <ul className="mb-6 mt-2 flex flex-col gap-2 px-4">
            <ListItem>
              Meyers, R. J., Roozen, H. G., & Smith, J. E. (2011).{" "}
              <i>
                The Community Reinforcement Approach: An update of the
                evidence.{" "}
              </i>{" "}
              Alcohol Research: Current Reviews, 33(4), 380–388.
            </ListItem>
            <ListItem>
              Khalid, M. T., Khalily, M. T., Saleem, T., Saeed, F., & Shoib, S.
              (2024).{" "}
              <i>
                The effectiveness of the Community Reinforcement Approach (CRA)
                in the context of quality of life and happiness among people
                using drugs.
              </i>{" "}
              (2015) – Frontiers in Public Health, 12, 1229262. Substitutie van
              belonende activiteiten
            </ListItem>
          </ul>
        </div>
        <DialogClose asChild>
          <Button
            type="button"
            variant="secondary"
            className="rounded-md border bg-backgroundStart bg-opacity-90"
          >
            Sluiten
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
