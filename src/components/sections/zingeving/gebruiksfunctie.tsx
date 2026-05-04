import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { GameContainer } from "./kernquadranten";
import { Button } from "~/components/ui/button";
import { ListItem } from "~/components/ui/list-item";
import GebruikIcon from "~/components/icons/zingeving/gebruik-icon";
import { SubSectionHeader } from "~/components/ui/text-components/subsection-header";
import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { Divider } from "~/components/ui/text-components/divider";
import { TableHeaderCellStyled } from "~/components/ui/table-components/table-header-cell";
import { TableCellStyled } from "~/components/ui/table-components/table-cell";

export function Gebruiksfunctie() {
  return (
    <Dialog>
      <GameContainer
        icon={<GebruikIcon height={72} width={72} />}
        title="Gebruiksfunctie"
      />
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-x-hidden overflow-y-scroll rounded-md bg-gradient-to-b from-backgroundStart to-background lg:w-2/3">
        <DialogHeader className="mb-2 lg:mb-3">
          <DialogTitle className="mb-1 w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            De functie van gebruik
          </DialogTitle>
        </DialogHeader>
        <div className="mb-6 flex flex-col font-sans text-base tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
          <table className="mb-6 p-3">
            <tbody>
              <tr className="h-auto border border-black border-opacity-30">
                <td className="text-wrap border border-black border-opacity-30 p-2 pr-6 text-start align-top font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Doel:
                </td>
                <td className="text-wrap border border-black border-opacity-30 p-2 text-start align-top font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
                  De cliënt inzicht geven in de onderliggende functies van
                  zijn/haar gebruik, zodat hij/zij alternatieve, gezondere
                  strategieën kan ontwikkelen.
                </td>
              </tr>
              <tr className="h-auto border border-black border-opacity-30">
                <td className="text-wrap border border-black border-opacity-30 p-2 pr-6 text-start align-top font-sans text-base font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Benodigdheden:
                </td>
                <td className="text-wrap border border-black border-opacity-30 p-2 text-start align-top font-sans text-base tracking-[1px] text-[#333333] text-opacity-90">
                  Whiteboard, schrijfblok, stiften/pennen, eventueel
                  functiekaart of schema.
                </td>
              </tr>
            </tbody>
          </table>
          <SubSectionHeader size="large">Stappen</SubSectionHeader>
          <SubSectionHeader>
            Stap 1: Introductie van de oefening
          </SubSectionHeader>
          <ol className="mb-6 flex flex-col gap-1 px-6">
            <ListItem ordered>
              Leg uit dat gebruik vaak een functie of doel heeft, zoals het
              verminderen van stress, vermijden van emoties of vergroten van
              zelfvertrouwen.
            </ListItem>
            <ListItem ordered>
              Benadruk dat het herkennen van deze functies de eerste stap is
              naar effectieve verandering.
            </ListItem>
            <ListItem ordered>
              Voorbeelduitleg aan de cliënt:
              <br />
              <br />
              <i>
                “Gebruik is niet zomaar iets dat je doet. Het vervult vaak een
                belangrijke functie, zoals stress verlichten, emoties
                onderdrukken of je beter voelen. Als we begrijpen waarom je
                gebruikt, kunnen we manieren vinden om dezelfde functie op een
                andere manier te vervullen.”
              </i>
            </ListItem>
          </ol>

          <SubSectionHeader>
            Stap 2: Kernvragen voor verkenning
          </SubSectionHeader>
          <StyledParagraph marginBottom="mb-2">
            Gebruik de volgende drie vragen om het gesprek te structureren:
          </StyledParagraph>
          <ol className="mb-6 flex flex-col gap-1 px-6">
            <ListItem ordered>
              <b>Wat levert het gebruik je op?</b>
              <ul className="mb-6 mt-2 flex flex-col gap-1 px-4">
                <ListItem>
                  Positieve effecten, zoals ontspanning, plezier, energie,
                  zelfvertrouwen.
                </ListItem>
              </ul>
            </ListItem>

            <ListItem ordered>
              <b>Wat probeer je te vermijden door te gebruiken?</b>
              <ul className="mb-6 mt-2 flex flex-col gap-1 px-4">
                <ListItem>
                  Negatieve gevoelens of situaties, zoals stress, eenzaamheid,
                  verveling, angst.
                </ListItem>
              </ul>
            </ListItem>

            <ListItem ordered>
              <b>Wat zou er gebeuren als je niet zou gebruiken?</b>
              <ul className="mt-2 flex flex-col gap-1 px-4">
                <ListItem>
                  Inzicht in onderliggende angsten of overtuigingen die
                  verandering bemoeilijken.
                </ListItem>
              </ul>
            </ListItem>
          </ol>

          <StyledParagraph
            marginBottom="mb-2"
            header="Stap 3: Voorbeelden van functies"
          >
            Bespreek mogelijke functies van gebruik om bewustzijn te vergroten:
          </StyledParagraph>
          <ul className="mb-6 flex flex-col gap-1 px-6">
            <ListItem>
              <b>Emotieregulatie:</b> verminderen van negatieve emoties (stress,
              angst, verdriet).
            </ListItem>
            <ListItem>
              <b>Ontsnappen of vermijden:</b> pijnlijke gedachten of situaties
              vermijden.
            </ListItem>
            <ListItem>
              <b>Sociale connectie:</b> erbij horen of sociale angst
              verminderen.
            </ListItem>
            <ListItem>
              <b>Zelfbeeld verbeteren:</b> zich zelfverzekerder of sterker
              voelen.
            </ListItem>
            <ListItem>
              <b>Fysieke redenen:</b> vermoeidheid verminderen of pijn
              verlichten.
            </ListItem>
            <ListItem>
              <b>Verveling bestrijden:</b> leegte of doelloosheid opvullen.
            </ListItem>
          </ul>
          <SubSectionHeader>
            Stap 4: Persoonlijke functie verkennen (functiekaart)
          </SubSectionHeader>

          <ol className="mb-6 flex flex-col gap-1 px-6">
            <ListItem ordered>
              Vraag de cliënt te reflecteren op zijn/haar laatste
              gebruiksmoment:
              <ul className="mb-6 mt-2 flex flex-col gap-1 px-4">
                <ListItem>Wat voelde je?</ListItem>
                <ListItem>Wat dacht je?</ListItem>
                <ListItem>
                  Wat hoopte je dat het gebruik zou opleveren?
                </ListItem>
              </ul>
            </ListItem>

            <ListItem ordered>
              Vul samen een tabel in:
              <table className="mb-8 mt-6 w-full">
                <thead>
                  <tr>
                    <TableHeaderCellStyled className="py-2 align-top">
                      Situatie
                    </TableHeaderCellStyled>
                    <TableHeaderCellStyled className="py-2 align-top">
                      Functie van gebruik
                    </TableHeaderCellStyled>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <TableCellStyled className="py-2 align-top">
                      Voorbeeld: ruzie met partner
                    </TableCellStyled>
                    <TableCellStyled className="py-2 align-top">
                      Stress verminderen, gedachten uitschakelen
                    </TableCellStyled>
                  </tr>
                  <tr>
                    <TableCellStyled className="py-2 align-top">
                      Voorbeeld: verveling op een vrije avond
                    </TableCellStyled>
                    <TableCellStyled className="py-2 align-top">
                      Tijd doden, opwinding ervaren
                    </TableCellStyled>
                  </tr>
                </tbody>
              </table>
            </ListItem>
          </ol>

          <SubSectionHeader>Stap 5: Alternatieven verkennen</SubSectionHeader>

          <ol className="mb-6 flex flex-col gap-1 px-6">
            <ListItem ordered>
              Bespreek bij elke functie gezondere manieren om dezelfde behoefte
              te vervullen.
              <ul className="mb-6 mt-2 flex flex-col gap-1 px-4">
                <ListItem>
                  Voorbeeld: stress → ademhalingsoefeningen of sporten.
                </ListItem>
                <ListItem>
                  Voorbeeld: eenzaamheid → sociale contacten of hobby’s.
                </ListItem>
              </ul>
            </ListItem>

            <ListItem ordered>
              Laat de cliënt drie alternatieve strategieën opschrijven en één
              uitproberen voor de volgende sessie.
            </ListItem>
          </ol>
          <SubSectionHeader>Stap 6: Reflectie op gevolgen</SubSectionHeader>

          <ol className="mb-4 flex flex-col gap-1 px-6">
            <ListItem ordered>
              Maak twee kolommen om positieve en negatieve gevolgen van gebruik
              te verkennen:
              <table className="mb-8 mt-6 w-full">
                <thead>
                  <tr>
                    <TableHeaderCellStyled className="py-2 align-top">
                      Voordelen van gebruik
                    </TableHeaderCellStyled>
                    <TableHeaderCellStyled className="py-2 align-top">
                      Nadelen van gebruik
                    </TableHeaderCellStyled>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <TableCellStyled className="py-2 align-top">
                      Stress verminderd
                    </TableCellStyled>
                    <TableCellStyled className="py-2 align-top">
                      Schuldgevoel, schaamte
                    </TableCellStyled>
                  </tr>
                  <tr>
                    <TableCellStyled className="py-2 align-top">
                      Sociale situatie makkelijker
                    </TableCellStyled>
                    <TableCellStyled className="py-2 align-top">
                      Gezondheid achteruit
                    </TableCellStyled>
                  </tr>
                  <tr>
                    <TableCellStyled className="py-2 align-top">
                      Controle ervaren
                    </TableCellStyled>
                    <TableCellStyled className="py-2 align-top">
                      Financiële problemen
                    </TableCellStyled>
                  </tr>
                </tbody>
              </table>
            </ListItem>
            <ListItem ordered>
              Bespreek de balans: wegen korte-termijn voordelen op tegen
              lange-termijn nadelen?
            </ListItem>
          </ol>
          <SubSectionHeader>Stap 7: Dieper graven</SubSectionHeader>

          <ol className="mb-6 flex flex-col gap-1 px-6">
            <ListItem ordered>
              Verken de onderliggende behoeften: veiligheid, liefde, autonomie,
              erkenning.
            </ListItem>
            <ListItem ordered>
              Bespreek hoe deze behoeften op een andere manier vervuld kunnen
              worden: relaties verbeteren, grenzen leren stellen, eigen doelen
              nastreven.
            </ListItem>
          </ol>
          <SubSectionHeader>Stap 8: Plan van aanpak</SubSectionHeader>

          <ol className="mb-6 flex flex-col gap-1 px-6">
            <ListItem ordered>
              <b>Kortetermijndoelen:</b> één functie van gebruik aanpakken en
              alternatieve strategie toepassen.
              <ul className="mb-6 mt-2 flex flex-col gap-1 px-4">
                <ListItem>
                  Voorbeeld: stress verlichten door dagelijks 10 minuten
                  ademhalingsoefeningen.
                </ListItem>
              </ul>
            </ListItem>

            <ListItem ordered>
              <b>Langetermijndoelen:</b> werken aan bredere thema’s zoals
              zelfbeeld, sociale vaardigheden of emotieregulatie.
            </ListItem>
          </ol>
          <SubSectionHeader>Stap 9: Reflectie en follow-up</SubSectionHeader>

          <ul className="mb-6 flex flex-col gap-1 px-6">
            <ListItem>
              Bespreek in de volgende sessie hoe het herkennen van functies en
              het toepassen van alternatieven ging.
            </ListItem>
            <ListItem>Bespreek succesmomenten en obstakels.</ListItem>
            <ListItem>
              Moedig aan om nieuwe, gezonde strategieën te blijven ontdekken en
              oefenen.
            </ListItem>
          </ul>
          <Divider />
          <SubSectionHeader>Tips voor de begeleiding</SubSectionHeader>

          <ul className="mb-6 flex flex-col gap-1 px-6">
            <ListItem>
              Gebruik open vragen en laat de cliënt zelf voorbeelden bedenken.
            </ListItem>
            <ListItem>
              Respecteer emoties; sommige functies of onderliggende behoeften
              kunnen gevoelig liggen.
            </ListItem>
            <ListItem>
              Maak de oefening visueel met een schema of tabel.
            </ListItem>
            <ListItem>
              Focus op inzicht en alternatieven, niet op oordeel over gebruik.
            </ListItem>
            <ListItem>
              Stimuleer het uitproberen van alternatieven en reflecteer in
              volgende sessies.
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
