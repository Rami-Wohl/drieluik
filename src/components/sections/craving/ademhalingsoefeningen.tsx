import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "~/components/ui/dialog";

export function AdemhalingsOefening1() {
  return (
    <Dialog>
      <DialogTrigger className="w-full gap-2 rounded-none bg-white bg-opacity-30 px-4 py-2 hover:bg-opacity-70 hover:shadow-sm">
        <div className="text-center font-sans text-sm font-light tracking-[1px] text-[#333333] text-opacity-90">
          Bewuste ademhaling en gedachten observeren
        </div>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-scroll rounded-md bg-opacity-70 bg-gradient-to-b from-[#ffffff] to-blue-50 lg:w-2/3">
        <DialogHeader className="mb-2 mt-4">
          <DialogTitle className="w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Bewuste ademhaling en gedachten observeren
          </DialogTitle>
        </DialogHeader>
        <div className="mb-6 flex flex-col gap-8 lg:px-4">
          <table className="mb-2">
            <tbody>
              <tr className="h-6">
                <td className="text-wrap pr-2 text-start align-top font-sans text-sm font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Duur:
                </td>
                <td className="text-wrap text-start align-top font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90">
                  15-20 minuten
                </td>
              </tr>
              <tr className="h-auto">
                <td className="text-wrap pr-2 text-start align-top font-sans text-sm font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Doel:
                </td>
                <td className="text-wrap text-start align-top font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90">
                  Helpen om controle over aandacht en focus te krijgen, impulsen
                  te herkennen, en afstand te nemen van onmiddellijke
                  verlangens.
                </td>
              </tr>
            </tbody>
          </table>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="w-full font-semibold">
              Stap 1: Voorbereiding en zitpositie
            </span>{" "}
            Zoek een rustige plek waar je ongestoord kunt zitten. Zit op een
            stoel met een rechte rug of in kleermakerszit op de grond. Zorg dat
            je comfortabel zit, maar houd je rug recht om alert te blijven. Leg
            je handen ontspannen op je knieën of in je schoot. Sluit zachtjes je
            ogen of richt je blik op een punt voor je.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="w-full font-semibold">
              Stap 2: Bewustwording van het lichaam{" "}
            </span>{" "}
            Begin met een paar diepe ademhalingen. Adem langzaam in door je
            neus, houd even vast, en adem dan uit door je mond. Breng je
            aandacht naar je lichaam. Merk hoe je zit en waar je lichaam contact
            maakt met de stoel of de vloer. Observeer eventuele spanning in je
            lichaam, zoals in je schouders, nek, of kaak. Als je spanning voelt,
            probeer deze zachtjes los te laten bij elke uitademing.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              Stap 3: Focus op de ademhaling{" "}
            </span>{" "}
            Verplaats je aandacht naar je ademhaling zonder deze te veranderen.
            Volg je adem terwijl deze vanzelf in- en uitstroomt. Let op waar je
            de ademhaling het duidelijkst voelt: in je neusgaten, borstkas, of
            buik. Blijf de ademhaling volgen en probeer de opkomst en de
            ondergang ervan te voelen. Dit is je &apos;ankerpunt&apos; waar je
            telkens naar terug kunt keren.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              Stap 4: Gedachten observeren zonder oordeel{" "}
            </span>{" "}
            Terwijl je blijft ademen, merk je misschien dat gedachten komen en
            gaan. Dit is normaal. Visualiseer elke gedachte of impuls als een
            wolk die voorbijdrijft. Laat de gedachte komen, observeer deze
            zonder oordeel, en laat deze weer los. Probeer jezelf eraan te
            herinneren dat je gedachten geen directe waarheid zijn. Je hoeft er
            niets mee te doen – ze mogen er simpelweg zijn zonder dat je actie
            onderneemt.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              Stap 5: Het observeren van impulsen{" "}
            </span>{" "}
            Sta jezelf toe om elke impuls die je voelt op te merken. Dit kan een
            impuls zijn om iets te doen, zoals op te staan, je telefoon te
            pakken, of iets te eten of drinken. In plaats van te reageren, breng
            je aandacht naar de lichamelijke sensaties van deze impuls. Waar
            voel je deze impuls in je lichaam? Misschien voel je spanning in je
            handen, druk in je borst, of iets anders. Merk op dat je de neiging
            hebt om iets te willen doen, maar dat je niet direct hoeft te
            reageren. Laat het verlangen bestaan zonder actie te ondernemen.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              Stap 6: Het versterken van de focus{" "}
            </span>{" "}
            Richt je aandacht opnieuw op je ademhaling, het ankerpunt dat je
            eerder hebt gekozen. Herhaal in stilte de woorden &apos;hier en
            nu&apos; bij elke ademhaling, om je aandacht steeds terug te brengen
            naar het huidige moment. Stel jezelf de vraag: &quot;Wat heb ik op
            dit moment werkelijk nodig?&quot; Dit kan helpen om jezelf te
            herinneren aan je diepere waarden en doelen.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              Stap 7: Afsluiten met zelfcompassie{" "}
            </span>{" "}
            Wanneer je klaar bent om de oefening te beëindigen, breng je je
            aandacht terug naar je hele lichaam en neem een paar diepe
            ademhalingen. Voel de grond onder je en de ruimte om je heen. Open
            langzaam je ogen en herinner jezelf eraan dat het oefenen van
            aandacht iets is wat je elke dag kunt versterken. Bedenk dat het
            normaal is om afgeleid te raken of impulsen te voelen, en dat het
            observeren hiervan je helpt om sterker te worden.{" "}
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">Reflectie na de oefening:</span>{" "}
            Neem na de oefening even de tijd om na te denken over wat je hebt
            ervaren. Heb je gemerkt dat je gedachten of impulsen sterker werden,
            of juist dat ze vervaagden? Wat was het effect van het observeren
            zonder direct te reageren? Het is normaal als deze oefening
            uitdagend is in het begin. Met regelmatige oefening zul je merken
            dat je beter wordt in het herkennen van gedachten en impulsen zonder
            automatisch te reageren, wat je helpt om je eigen keuzes te maken en
            je aandacht te sturen.
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function AdemhalingsOefening2() {
  return (
    <Dialog>
      <DialogTrigger className="w-full gap-2 rounded-none bg-white bg-opacity-30 px-4 py-2 hover:bg-opacity-70 hover:shadow-sm">
        <div className="text-center font-sans text-sm font-light tracking-[1px] text-[#333333] text-opacity-90">
          Lichaamsverkenning en bewust zijn van emoties
        </div>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-scroll rounded-md bg-opacity-70 bg-gradient-to-b from-[#ffffff] to-blue-50 lg:w-2/3">
        <DialogHeader className="mb-2 mt-4">
          <DialogTitle className="w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Lichaamsverkenning en bewust zijn van emoties
          </DialogTitle>
        </DialogHeader>
        <div className="mb-6 flex flex-col gap-6 lg:px-4">
          <table className="mb-2">
            <tbody>
              <tr className="h-6">
                <td className="text-wrap pr-2 text-start align-top font-sans text-sm font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Duur:
                </td>
                <td className="text-wrap text-start align-top font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90">
                  15-20 minuten
                </td>
              </tr>
              <tr className="h-auto">
                <td className="text-wrap pr-2 text-start align-top font-sans text-sm font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Doel:
                </td>
                <td className="text-wrap text-start align-top font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90">
                  Verhoogde lichaamsbewustzijn, het loskoppelen van gedachten en
                  impulsen, en het versterken van zelfbeheersing.
                </td>
              </tr>
            </tbody>
          </table>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              Stap 1: Comfortabele zit- of lighouding
            </span>{" "}
            Vind een plek waar je ongestoord kunt zitten of liggen. Kies wat
            voor jou het prettigst voelt. Sluit je ogen en haal een paar keer
            rustig adem. Voel hoe je lichaam gedragen wordt door de stoel, bank
            of grond. Laat je ademhaling op een natuurlijke manier in- en
            uitstroomt. Probeer niets te forceren – laat je lichaam ademen zoals
            het wil.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              Stap 2: Volledige lichaamsscan
            </span>{" "}
            Breng je aandacht naar je voeten. Voel het contact van je voeten met
            de grond of ondergrond. Merk de warmte, druk, en sensaties op zonder
            iets te veranderen. Verplaats je aandacht langzaam omhoog door je
            lichaam: van je voeten naar je benen, heupen, buik, borst, rug,
            schouders, armen, nek, en tenslotte je hoofd. Sta jezelf toe om elk
            deel van je lichaam te voelen zonder oordeel. Wat je ook voelt –
            spanning, warmte, koude – laat het er zijn.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              Stap 3: Het observeren van emoties
            </span>{" "}
            Nadat je je lichaam hebt gescand, merk je op hoe je je voelt. Dit
            kan een specifieke emotie zijn (zoals frustratie, onrust, kalmte) of
            juist geen uitgesproken gevoel. Stel jezelf de vraag: "Hoe voelt
            deze emotie in mijn lichaam?" Emoties manifesteren zich vaak fysiek,
            zoals spanning in je borst, een knoop in je maag, of een lichte druk
            in je keel. Observeer deze gevoelens zonder er iets aan te
            veranderen. Laat de sensaties bestaan zonder erop te reageren.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              {" "}
              Stap 4: Gedachten observeren als een buitenstaander
            </span>{" "}
            Gedachten kunnen vanzelf naar boven komen, zeker als er emoties
            betrokken zijn. Merk deze gedachten op zonder ze verder te volgen.
            Visualiseer elke gedachte als een blad dat op een rivier drijft.
            Stel je voor dat je aan de rand van de rivier zit en de bladeren
            voorbij ziet stromen, zonder ze vast te pakken of te analyseren.
            Blijf aanwezig als een buitenstaander, alsof je naar je eigen
            gedachten kijkt zonder dat ze jouw aandacht opeisen.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              Stap 5: Focus op je adembeweging
            </span>{" "}
            Breng je aandacht terug naar je ademhaling, specifiek naar de
            beweging van je buik of borstkas. Let op de kleine bewegingen die je
            ademhaling in je lichaam veroorzaakt. Observeer hoe je lichaam
            vanzelf ademt zonder dat je dit hoeft te sturen. Visualiseer bij
            elke inademing een lichte ontspanning die zich door je lichaam
            verspreidt, en bij elke uitademing het loslaten van spanning en
            zorgen.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              Stap 6: De impuls om te handelen waarnemen
            </span>
            Gedachten of gevoelens kunnen je misschien verleiden om iets te doen
            of om je focus te verleggen. Dit kunnen verlangens zijn, zoals de
            impuls om je telefoon te pakken of een craving om een bepaalde
            handeling te verrichten. Erken deze impulsen zonder erop te
            reageren. Zeg in gedachten tegen jezelf: "Dit is een impuls. Ik hoef
            er nu niets mee te doen." Blijf rustig aanwezig in je lichaam,
            zonder iets te veranderen of aan te passen aan deze verlangens. Laat
            ze bestaan zonder dat ze een onmiddellijke reactie vereisen.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              Stap 7: Afsluiten met zelfwaardering
            </span>
            Neem aan het eind van de oefening een moment om jezelf waardering te
            geven voor het geduld en de aandacht die je hebt getoond. Adem een
            paar keer diep in en uit en merk het effect van de oefening op je
            lichaam en geest. Open langzaam je ogen wanneer je er klaar voor
            bent en beweeg zachtjes je vingers en tenen om terug in het moment
            te komen.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">Reflectie na de oefening</span>
            Probeer even stil te staan bij wat je hebt waargenomen. Welke
            gevoelens of impulsen kwamen er naar voren? Hoe voelde het om deze
            emoties en gedachten simpelweg te observeren zonder erop te
            reageren?
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function AdemhalingsOefening3() {
  return (
    <Dialog>
      <DialogTrigger className="w-full gap-2 rounded-none bg-white bg-opacity-30 px-4 py-2 hover:bg-opacity-70 hover:shadow-sm">
        <div className="text-center font-sans text-sm font-light tracking-[1px] text-[#333333] text-opacity-90">
          Aandachtsoefening: bewuste omgevingsobservatie
        </div>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-scroll rounded-md bg-opacity-70 bg-gradient-to-b from-[#ffffff] to-blue-50 lg:w-2/3">
        <DialogHeader className="mb-2 mt-4">
          <DialogTitle className="w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Aandachtsoefening: bewuste omgevingsobservatie
          </DialogTitle>
        </DialogHeader>
        <div className="mb-6 flex flex-col gap-6 lg:px-4">
          <table className="mb-2">
            <tbody>
              <tr className="h-6">
                <td className="text-wrap pr-2 text-start align-top font-sans text-sm font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Duur:
                </td>
                <td className="text-wrap text-start align-top font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90">
                  10-15 minuten
                </td>
              </tr>
              <tr className="h-auto">
                <td className="text-wrap pr-2 text-start align-top font-sans text-sm font-semibold tracking-[1px] text-[#333333] text-opacity-90">
                  Doel:
                </td>
                <td className="text-wrap text-start align-top font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90">
                  Het versterken van geduld, het loskoppelen van automatische
                  reacties, en het vergroten van bewustzijn van de omgeving.
                </td>
              </tr>
            </tbody>
          </table>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              Stap 1: Zoek een plek in een rustige omgeving
            </span>
            Kies een plek waar je rustig kunt zitten, zoals bij een raam, buiten
            in de natuur, of een rustige kamer. Ga comfortabel zitten met je
            voeten stevig op de grond en je rug recht. Plaats je handen in je
            schoot of op je knieën. Sluit je ogen even en haal diep adem. Adem
            een paar keer rustig in en uit om tot rust te komen.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              Stap 2: Open je ogen en observeer je omgeving
            </span>
            Open je ogen en laat je blik zachtjes rondgaan in de ruimte of
            omgeving om je heen. Probeer elk detail op te merken: de kleuren,
            vormen, en texturen. Kijk naar objecten zonder te oordelen, alsof je
            ze voor het eerst ziet. Kies een object in je omgeving, zoals een
            plant, muur, of voorwerp, en besteed 1-2 minuten aan het simpelweg
            observeren. Let op de kleinste details zonder af te dwalen.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              Stap 3: Gebruik al je zintuigen
            </span>
            Nadat je je blik hebt gebruikt om de omgeving te verkennen, probeer
            je aandacht naar je andere zintuigen te verleggen. Luister naar de
            geluiden om je heen. Hoor je iets in de verte, of dichtbij? Merk het
            volume, de toonhoogte, en het ritme op van de geluiden. Richt je
            aandacht daarna op eventuele geuren. Is er een subtiele geur in de
            ruimte? Misschien iets van de natuur, of iets in huis? Neem de tijd
            om te ervaren zonder te oordelen. Als je iets in de omgeving kunt
            aanraken, zoals de stoel waar je op zit of je kleding, voel dan de
            textuur. Hoe voelt het? Is het ruw, zacht, warm of koud?
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              {" "}
              Stap 4: Gedachten en impulsen loslaten
            </span>
            Terwijl je je omgeving verkent, zullen er waarschijnlijk gedachten
            en verlangens opkomen. Dit is normaal. Visualiseer elke gedachte als
            een wolkje dat voorbijdrijft aan een heldere lucht. Merk het op,
            maar laat het voorbijgaan zonder erin mee te gaan. Als je een impuls
            voelt om iets te doen, zoals je telefoon pakken, stel jezelf dan de
            vraag: “Waarom wil ik dit nu doen? Wat zou het me brengen?” Merk de
            impuls op en probeer het niet direct te bevredigen. Laat de impuls
            er zijn zonder erop in te gaan.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              Stap 5: Breng de aandacht terug naar je ademhaling
            </span>
            Verplaats je aandacht naar je ademhaling. Adem langzaam in en uit,
            en probeer de luchtstroom op te merken terwijl deze door je neus,
            keel en longen beweegt. Visualiseer bij elke inademing een gevoel
            van kalmte dat je hele lichaam vult. Laat bij elke uitademing alle
            restspanning los. Adem een paar keer rustig in en uit en merk op hoe
            het voelt om simpelweg aanwezig te zijn zonder iets te doen of te
            willen bereiken.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">
              Stap 6: Afsluiten met intentie
            </span>
            Sluit je ogen weer, en neem even de tijd om te voelen wat deze
            oefening met je heeft gedaan. Stel jezelf de vraag: “Hoe kan ik deze
            rust en bewustzijn meenemen in de rest van mijn dag?” Kies eventueel
            een woord, zoals ‘geduld’ of ‘bewustzijn’, om jezelf eraan te
            herinneren dat je deze rust in je dagelijkse leven kunt brengen.
            Open langzaam je ogen, beweeg je vingers en tenen, en kom rustig
            terug in het moment.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            <span className="font-semibold">Reflectie na de oefening</span>
            Na de oefening kun je kort overdenken wat je hebt ervaren. Waren er
            impulsen die sterk naar voren kwamen? Hoe voelde het om simpelweg te
            observeren zonder actie te ondernemen?
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
}
