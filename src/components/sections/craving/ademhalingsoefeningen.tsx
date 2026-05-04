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
import { Divider } from "~/components/ui/text-components/divider";
import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { SubSectionHeader } from "~/components/ui/text-components/subsection-header";

export function AdemhalingsOefening1() {
  return (
    <Dialog>
      <DialogTrigger className="w-full gap-2 rounded-none bg-white bg-opacity-30 px-4 py-2 hover:bg-opacity-70 hover:shadow-sm">
        <div className="text-center font-sans text-sm font-light tracking-[1px] text-[#333333] text-opacity-90">
          Basis ademhalingsoefening
        </div>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-x-hidden overflow-y-scroll rounded-md bg-gradient-to-b from-backgroundStart to-background lg:w-2/3">
        <DialogHeader className="mb-2 mt-4">
          <DialogTitle className="w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Basis ademhalingsoefening
          </DialogTitle>
        </DialogHeader>
        <div className="mb-6 flex flex-col lg:px-4">
          <table className="mb-8">
            <tbody>
              <tr className="h-6">
                <td className="text-wrap pr-2 text-start align-top font-sans text-sm font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Duur:
                </td>
                <td className="w-full text-wrap text-start align-top font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90">
                  1-5 minuten
                </td>
              </tr>
            </tbody>
          </table>
          <StyledParagraph>
            Onderzoek laat zien dat ademhaling direct invloed heeft op je
            lichaam en geest. Bij stress, spanning of craving gaan mensen vaak
            snel, hoog en oppervlakkig ademen. Dit kan onrust en angst
            versterken. Rustig en langzaam ademen via je neus helpt om je
            zenuwstelsel te kalmeren en meer ontspanning te voelen.
          </StyledParagraph>
          <SubSectionHeader>Je ademhaling waarnemen:</SubSectionHeader>

          <StyledParagraph marginBottom="mb-2">
            Neem even de tijd om je aandacht op je ademhaling te richten, zonder
            iets te veranderen. Adem gewoon zoals je nu doet.{" "}
          </StyledParagraph>
          <ul className="mb-10 flex flex-col gap-2 px-4">
            <ListItem>Adem je door je neus, je mond of beide?</ListItem>
            <ListItem>Is je ademhaling snel of langzaam?</ListItem>
            <ListItem>
              Adem je vooral in je borst of meer naar je buik?
            </ListItem>
            <ListItem>
              Voel je spanning in je schouders, nek of ergens anders?
            </ListItem>
            <ListItem>
              Probeer nu rustiger te ademen via je neus en meer naar je buik.
              Adem licht en ontspannen.
            </ListItem>
            <ListItem>
              Tel bij het inademen tot (bijvoorbeeld) vier en bij het uitademen
              tot zes.
            </ListItem>
            <ListItem>
              Je kunt je uitademing verlengen door zachtjes door getuite lippen
              uit te ademen.
            </ListItem>
            <ListItem>
              Welke veranderingen merk je in je lichaam of gevoel?
            </ListItem>
            <ListItem>
              Oefen hier meerdere keren per dag kort mee, vooral bij stress,
              onrust of craving.
            </ListItem>
          </ul>
          <SubSectionHeader>Langzame buikademhaling:</SubSectionHeader>
          <ul className="mb-6 flex flex-col gap-2 px-4">
            <ListItem>Ga comfortabel zitten of liggen.</ListItem>
            <ListItem>Leg één hand op je buik.</ListItem>
            <ListItem>
              Adem langzaam in door je neus en voel je buik omhoog komen.
            </ListItem>
            <ListItem>
              Adem rustig uit door je neus en voel je buik weer zakken.
            </ListItem>
            <ListItem>Houd je ademhaling rustig, licht en langzaam.</ListItem>
            <ListItem>Oefen dit een paar minuten.</ListItem>
            <ListItem>
              Probeer ook overdag regelmatig je ademhaling rustiger te maken.
            </ListItem>
          </ul>
          <Divider />

          <StyledParagraph marginBottom="mb-2">
            De eerste keer is het handig om een heel vast ritme aan te leren.
            Het ritme moet rustig en constant zijn. Je kan bijvoorbeeld met pen
            zachtjes op de tafel tikken. Inademen gaat vaak iets sneller dan
            uitademen en bouw altijd twee tikken in na het inademen en één of
            twee na het uitademen.
          </StyledParagraph>
          <StyledParagraph marginBottom="mb-2">
            Een voorbeeld ritme kan dan zijn:
          </StyledParagraph>
          <div className="relative mb-10 flex h-60 w-full flex-col items-center justify-center lg:h-60 lg:scale-100 lg:px-6">
            <table
              className={`relative h-full w-full border-collapse border-2 border-black border-opacity-70 bg-slate-300 p-2 text-center font-sans text-base font-semibold tracking-wide text-[#333] text-opacity-90 lg:text-lg`}
            >
              <tbody>
                <tr className="w-full border-2 border-black border-opacity-70">
                  <th className="w-1/2 border-2 border-black border-opacity-70 px-4 text-center">
                    Adem in
                  </th>
                  <th className="w-1/2 border-2 border-black border-opacity-70 px-4 text-center">
                    3 tikken
                  </th>
                </tr>
                <tr className="w-full border-2 border-black border-opacity-70">
                  <th className="w-1/2 border-2 border-black border-opacity-70 px-4 text-center">
                    Vasthouden
                  </th>
                  <th className="w-1/2 border-2 border-black border-opacity-70 px-4 text-center">
                    2 tikken
                  </th>
                </tr>
                <tr className="w-full border-2 border-black border-opacity-70">
                  <th className="w-1/2 border-2 border-black border-opacity-70 px-4 text-center">
                    Adem uit
                  </th>
                  <th className="w-1/2 border-2 border-black border-opacity-70 px-4 text-center">
                    4 tikken
                  </th>
                </tr>
                <tr className="w-full border-2 border-black border-opacity-70">
                  <th className="w-1/2 border-2 border-black border-opacity-70 px-4 text-center">
                    Vasthouden
                  </th>
                  <th className="w-1/2 border-2 border-black border-opacity-70 px-4 text-center">
                    1 tik
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <StyledParagraph marginBottom="mb-2">
            Het meetikken en überhaupt het nastreven van een rigide ritme is
            iets wat je alleen tijdens deze oefeningen doet. Zodra hier mee
            geoefend is, is het meestal juist weer handig om het tellen los te
            laten en de focus voor iets anders te gebruiken.
          </StyledParagraph>
          <Divider />
          <StyledParagraph marginBottom="mb-2">
            De oefeningen zijn geïnspireerd door/ gebaseerd op: Het wijze
            lichaam, Pat Ogden, Sensorimotor Psychotherapy-oefeningen voor
            bewustwording, regulatie en groei, Uitgeverij Mens! (2025).{" "}
          </StyledParagraph>
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
