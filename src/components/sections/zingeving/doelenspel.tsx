import DoelenspelIcon from "~/components/icons/zingeving/doelenspel-icon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { GameContainer } from "./kernquadranten";

function ListItem({ children }: { children: string }) {
  return (
    <li className="font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
      {children}
    </li>
  );
}

export function Doelenspel() {
  return (
    <Dialog>
      <GameContainer
        icon={<DoelenspelIcon height={72} width={72} />}
        title="Doelenspel"
      />
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-scroll rounded-md bg-opacity-70 bg-gradient-to-b from-[#ffffff] to-blue-50 lg:w-2/3">
        <DialogHeader className="mb-2 lg:mb-3">
          <DialogTitle className="mb-1 w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Doelenspel
          </DialogTitle>
          <h3 className="w-full text-center font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-lg lg:tracking-[0.1rem]">
            Wat wil je graag allemaal doen met je leven?
          </h3>
        </DialogHeader>
        <div className="mb-4 flex flex-col gap-6 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
          <DialogDescription className="flex flex-col gap-6 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Soms zal je je leven compleet nieuw vorm moeten geven als je uit een
            verslaving komt. Het doelenspel kan helpen om in beeld te brengen
            welke dingen je graag wil doen en hoe belangrijk die voor je zijn.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-6 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Je begint met zoveel mogelijk categorieën te definiëren. Je geeft je
            cliënt dan 10 lege briefjes waar ze vervolgens doelen op mogen
            schrijven. Moedig dan vooral aan om de doelen op zo veel mogelijk
            verschillende categorieën te laten baseren.
          </DialogDescription>
          <div className="flex flex-col gap-2">
            <span className="font-sans text-base font-medium tracking-[1px] text-[#333333] text-opacity-90 lg:text-lg">
              Categoriën
            </span>
            <ol className="pl-1 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
              <ListItem>1. Behandeling</ListItem>
              <ListItem>2. Wonen</ListItem>
              <ListItem>3. Financiën</ListItem>
              <ListItem>4. Hobby&apos;s</ListItem>
              <ListItem>5. Werk</ListItem>
              <ListItem>6. Opleiding</ListItem>
              <ListItem>7. Familie</ListItem>
              <ListItem>8. Sport</ListItem>
              <ListItem>9. Voeding</ListItem>
              <ListItem>10. Spiritualiteit</ListItem>
            </ol>
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <DoelenspelKaarten />
          </div>
          <DialogDescription className="flex flex-col gap-6 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Vervolgens leg je alle doelen op een stapel rechts van je (de start
            stapel). Dan pak je twee willekeurige doelen en die leg je recht
            voor je neer, dit zijn dan de strijdende doelen. Laat deze strijd op
            intuïtie gaan en denk er vooral niet te lang over na.
          </DialogDescription>
          <DialogDescription className="flex flex-col gap-6 font-sans text-sm tracking-[1px] text-[#333333] text-opacity-90 lg:text-base">
            Het winnende doel blijft liggen en de verliezer leg je links van je
            neer. Dit doe je tot er één winnaar voor je blijft liggen en alle
            doelen op een stapel links van je liggen. Het winnende doel schuif
            je dan naar boven (en daar schrijf je 1. op) en alle overige doelen
            leg je weer rechts van je neer op de startstapel en je herhaalt
            alles totdat er een rangorde in de doelen is ontstaan.
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Kaart({
  text,
  top,
  left,
  right,
  bottom,
  z,
}: {
  text: string;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  z?: number;
}) {
  return (
    <div
      style={{
        top: top,
        right: right,
        left: left,
        bottom: bottom,
        zIndex: z,
      }}
      className={`absolute flex h-28 w-20 flex-col justify-end rounded-md border-2 border-black border-opacity-70 bg-slate-300 px-1 pb-3 text-center font-sans text-xs font-semibold tracking-wide text-[#333] text-opacity-90 lg:h-36 lg:w-24 lg:px-2 lg:text-sm`}
    >
      {text}
    </div>
  );
}

function DoelenspelKaarten() {
  return (
    <div className="relative mb-4 mt-2 flex h-[260px] w-full max-w-[400px] flex-col items-center lg:my-4 lg:h-[340px]">
      <Kaart text={"Winnaar"} top={5} />
      <Kaart text={"Verliezers"} bottom={5} left={0} />
      <Kaart text={"Strijdende doelen"} bottom={5} z={2} />
      <div
        className={`absolute bottom-3 right-1/3 h-28 w-20 rounded-md border-2 border-black border-opacity-70 bg-slate-300 lg:h-36 lg:w-24`}
      />
      <Kaart text={"Start stapel"} bottom={5} right={0} />
    </div>
  );
}
