import { SubSectionParagraph } from "~/components/ui/text-components/subsection-paragraph";
import { ListItem } from "~/components/ui/list-item";
import { Pageheader } from "~/components/ui/pageheader";

export default function MissiePage() {
  return (
    <>
      <div className="relative mt-32 flex w-full max-w-full flex-col items-center justify-center gap-1 px-6 md:max-w-[600px] lg:gap-10">
        <Pageheader text="Missie & visie" />
        <div className="flex flex-col items-center justify-start gap-6">
          <h2 className="mt-4 w-full font-sans text-sm font-semibold text-[#333333] text-opacity-90 lg:text-lg">
            Verslaving begrijpen: meer dan alleen stoppen met gebruiken
          </h2>
          <SubSectionParagraph>
            Het behandelen van mensen met een ernstige psychiatrische aandoening
            (EPA) en verslaving vraagt meer dan simpelweg een behandelprotocol
            volgen. Elke patiënt is uniek, en dat maakt creativiteit van de
            behandelaar onmisbaar. Dat inzicht inspireerde Devi Hisgen,
            verslavings- en hersteldeskundige, om dit <b>Drieluik</b> te
            ontwikkelen: een hulpmiddel dat bestaande interventies bundelt
            binnen een nieuwe structuur en visie.
          </SubSectionParagraph>
          <SubSectionParagraph>
            Die visie draait om één belangrijk uitgangspunt:{" "}
            <b>het middel zelf is niet het centrale probleem</b>. Gebruik is
            vaak een manier om met andere problemen om te gaan. Daarom ligt de
            focus niet alleen op stoppen met middelen, maar ook op{" "}
            <b>triggers, craving en zingeving.</b>
          </SubSectionParagraph>
          <SubSectionParagraph>
            Sommige patiënten voelen zich geholpen door complete abstinentie,
            bijvoorbeeld via het bekende <b>Minnesota 12-stappenprogramma.</b>{" "}
            Voor anderen werkt dat juist averechts, en zijn alternatieve
            interventies noodzakelijk.
          </SubSectionParagraph>
          <h2 className="mt-4 w-full font-sans text-sm font-semibold text-[#333333] text-opacity-90 lg:text-lg">
            Wat is verslaving?{" "}
          </h2>

          <SubSectionParagraph>
            Verslaving betekent afhankelijkheid van een middel of gedrag. Dat
            kan gaan om alcohol of drugs, maar ook om gokken, gamen, seks of
            eten. Om de complexiteit van verslaving te begrijpen, kun je het
            zien als een probleem met verschillende lagen:
          </SubSectionParagraph>
          <SubSectionParagraph>
            <span className="font-medium">
              1. Het middel en gebruik (oppervlakte)
            </span>
          </SubSectionParagraph>
          <ul className="flex flex-col gap-3 px-4">
            {" "}
            <ListItem>
              Het zichtbare deel: welk middel gebruikt iemand, en wat ziet de
              omgeving daarvan?
            </ListItem>
          </ul>
          <SubSectionParagraph>
            <span className="font-semibold">
              2. Geestelijke afhankelijkheid
            </span>
          </SubSectionParagraph>
          <ul className="flex flex-col gap-3 px-4">
            {" "}
            <ListItem>
              Het gebruik is niet meer een vrije keuze. Stoppen lukt vaak niet,
              of pas veel later dan gepland.
            </ListItem>
          </ul>
          <SubSectionParagraph>
            <span className="font-semibold">
              3. Lichamelijke afhankelijkheid
            </span>
          </SubSectionParagraph>
          <ul className="flex flex-col gap-3 px-4">
            {" "}
            <ListItem>
              Bij middelen als alcohol, heroïne of GHB kan stoppen
              levensgevaarlijk zijn.
            </ListItem>
            <ListItem>
              Bovendien hebben sommige mensen een genetische of neurobiologische
              aanleg waardoor ze sneller verslaafd raken.
            </ListItem>
          </ul>
          <SubSectionParagraph>
            <span className="font-semibold">
              4. Psychische en emotionele laag
            </span>
          </SubSectionParagraph>
          <ul className="flex flex-col gap-3 px-4">
            {" "}
            <ListItem>
              Hoe ga je om met verdriet, frustratie of leegte?
            </ListItem>
            <ListItem>
              Deze diepste laag is persoonlijk en gevormd door
              levensgeschiedenis, genetica en psychische kwetsbaarheid.
            </ListItem>
          </ul>
          <SubSectionParagraph>
            <span className="font-semibold">5. De maatschappelijke laag</span>
          </SubSectionParagraph>
          <ul className="flex flex-col gap-3 px-4">
            {" "}
            <ListItem>
              Verslaving is ook een sociaal fenomeen. Voorbeelden zijn de
              heroïne-epidemie in Utrecht (jaren ‘70), de opioïdencrisis in de
              VS of hoestdrankmisbruik in Nigeria.
            </ListItem>
            <ListItem>
              Beleidskeuzes en cultuur kunnen het verschil maken, zoals Portugal
              liet zien met hun succesvolle decriminalisatiebeleid.
            </ListItem>
          </ul>

          <h2 className="mt-4 w-full font-sans text-sm font-semibold text-[#333333] text-opacity-90 lg:text-lg">
            Alleen focussen op gebruik schiet tekort, waarom?
          </h2>
          <SubSectionParagraph>
            Veel behandelingen richten zich vooral op laag 1: het stoppen met
            middelengebruik. Maar het echte probleem ligt vaak dieper. Het is
            bijvoorbeeld niet erg om af en toe een glas wijn te drinken, wél als
            iemand er de controle over verliest.
          </SubSectionParagraph>
          <SubSectionParagraph>
            Succes wordt in onderzoek vaak afgemeten aan abstinentie. Maar dat
            zegt weinig over <b>kwaliteit van leven</b> of{" "}
            <b>herstel van compulsief gedrag</b>.
          </SubSectionParagraph>
          <SubSectionParagraph>
            De schrijver Johann Hari verwoordde het treffend:
          </SubSectionParagraph>
          <SubSectionParagraph>
            <i>“The opposite of addiction isn’t sobriety, it’s connection.”</i>
          </SubSectionParagraph>
          <SubSectionParagraph>
            Verslaving draait dus niet om het middel zelf, maar om een gebrek
            aan verbinding en betekenis. Dat idee sluit aan bij het beroemde Rat
            Park-experiment van Bruce K. Alexander: ratten in een sociale,
            prikkelrijke omgeving raakten nauwelijks verslaafd, terwijl
            geïsoleerde ratten juist wel bleven gebruiken.
          </SubSectionParagraph>
          <h2 className="mt-4 w-full font-sans text-sm font-semibold text-[#333333] text-opacity-90 lg:text-lg">
            Missie: een humane en praktische benadering
          </h2>
          <SubSectionParagraph>
            Een goede definitie van verslaving én van herstel maakt het mogelijk
            om behandelingen beter af te stemmen. Daarvoor zijn betrouwbare
            onderzoeksinstrumenten nodig die meer meten dan alleen gebruik:
            bijvoorbeeld de impact op relaties, werk, gezondheid en welzijn.
          </SubSectionParagraph>
          <SubSectionParagraph>
            Het uitgangspunt is dat{" "}
            <b>
              het middel vaak niet het probleem is, maar een tijdelijke
              oplossing
            </b>{" "}
            die uiteindelijk veel schade veroorzaakt.
          </SubSectionParagraph>
          <SubSectionParagraph>
            Met het Drieluik wil Devi Hisgen behandelaren praktische handvatten
            geven om verslavingszorg <b>humaan en werkbaar</b> te maken.
          </SubSectionParagraph>
        </div>
      </div>
    </>
  );
}
