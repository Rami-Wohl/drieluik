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

export function AdemhalingsOefening1() {
  return (
    <Dialog>
      <DialogTrigger className="w-full gap-2 rounded-none bg-white bg-opacity-30 px-4 py-2 hover:bg-opacity-70 hover:shadow-sm">
        <div className="text-center font-sans text-sm font-light tracking-[1px] text-[#333333] text-opacity-90">
          Basis ademhalingsoefening
        </div>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-x-hidden overflow-y-scroll rounded-md bg-opacity-70 bg-gradient-to-b from-[#ffffff] to-blue-50 lg:w-2/3">
        <DialogHeader className="mb-2 mt-4">
          <DialogTitle className="w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Basis ademhalingsoefening
          </DialogTitle>
        </DialogHeader>
        <div className="mb-6 flex flex-col gap-8 lg:px-4">
          <table>
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
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            De mate van craving kan beïnvloed worden door middel van de
            ademhaling. Craving en stress gaan vaak samen. Door deze spanning
            gaan mensen vaak oppervlakkiger, sneller of zelfs onregelmatig
            ademhalen, wat de craving kan versterken. Dat komt omdat het lichaam
            in een fight-or-flight toestand verkeert, waarin de behoefte aan
            onmiddellijke bevrediging toeneemt. Bewuste, langzame ademhaling
            helpt om het parasympathische zenuwstelsel te activeren, wat zorgt
            voor ontspanning. Dit verlaagt de hartslag en verlaagt gevoelens van
            stress en spanning. Diep en rustig ademhalen stimuleert gebieden in
            de hersenen die verbonden zijn met zelfcontrole en emotionele
            regulatie. Dit kan helpen om impulsieve verlangens of craving beter
            te weerstaan. Studies tonen aan dat ademhalingsoefeningen ook een
            positief effect kunnen hebben op de prefrontale cortex, het gebied
            dat belangrijk is voor het maken van weloverwogen beslissingen en
            het reguleren van impulsen.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Bewust werken aan de ademhaling geeft een soort biofeedback: je
            merkt hoe het lichaam kalmeert, waardoor de behoefte om de craving
            te vervullen soms afneemt. Het zelf kalmeren door middel van
            ademhaling geeft daarnaast een gevoel van controle, wat juist
            ontbreekt in een situatie van hevige craving.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            De eerste keer is het belangrijk om een heel vast ritme aan te
            leren. Het ritme moet rustig en constant zijn. Je kan bijvoorbeeld
            met pen zachtjes op de tafel tikken. Inademen gaat vaak iets sneller
            dan uitademen en bouw altijd twee tikken in na het inademen en één
            of twee na het uitademen.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Een voorbeeld ritme kan dan zijn:
          </DialogDescription>
          <div className="relative mt-2 flex h-60 w-full flex-col items-center justify-center lg:my-6 lg:mb-4 lg:h-60 lg:scale-100 lg:px-6">
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
          <DialogDescription className="flex flex-col gap-2 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Het meetikken en überhaupt het nastreven van een rigide ritme is
            iets wat je alleen tijdens deze oefeningen doet. Zodra hier mee
            geoefend is, is het meestal juist weer handig om het tellen los te
            laten en de focus voor iets anders te gebruiken.
          </DialogDescription>
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
