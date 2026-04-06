import InfoIcon from "~/components/icons/info-icon";
import { middelenRoutes } from "~/components/nav/routes";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Pageheader } from "~/components/ui/pageheader";
import { MiddelenLink } from "./middelen-link";
import { StyledParagraph } from "~/components/ui/text-components/paragraph";
import { ListItem } from "~/components/ui/list-item";

function MiddelenInfo() {
  return (
    <Dialog>
      <DialogTrigger className="">
        <InfoIcon fill="none" className="h-5 w-5 md:h-6 md:w-6" />
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[1300px] overflow-x-hidden overflow-y-scroll rounded-md bg-opacity-80 bg-gradient-to-b from-[#ffffff] to-blue-50">
        <DialogHeader className="mb-2 mt-4">
          <DialogTitle className="w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Over het <b>middelen</b> luik
          </DialogTitle>
        </DialogHeader>
        <div className="px-12">
          <StyledParagraph marginBottom="mb-2">
            In dit luik vind je informatie over de verschillende soorten
            middelen. Ieder middel is opgedeeld in drie onderwerpen:
          </StyledParagraph>{" "}
          <ul className="mb-6 mt-2 flex flex-col gap-2">
            <ListItem>
              <b>Algemeen: </b>
              hier vind je voornamelijk informatie die je voor algemene
              voorlichting kan gebruiken.
            </ListItem>
            <ListItem>
              <b>Afbouwtips: </b>
              Hier vind je afbouwschema’s en andere zaken die belangrijk kunnen
              zijn bij afbouwen.
            </ListItem>
            <ListItem>
              <b>Overig: </b>
              Dit kan alles zijn dat niet onder de andere categorieën valt.
              Bijvoorbeeld maatschappelijke context of interessante weetjes.
            </ListItem>
          </ul>
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

export default function MiddelenPage() {
  return (
    <>
      <div className="relative mt-32 flex w-full max-w-full flex-col items-center justify-center gap-1 px-6 md:max-w-[600px] lg:gap-10">
        <div className="flex items-baseline gap-2 md:gap-4">
          <Pageheader text="Middelen" />
          <MiddelenInfo />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="my-4 font-sans text-sm text-[#333333] text-opacity-90 lg:text-lg">
            Dit luik gaat over de verschillende middelen. Per middel vind je
            algemene kennis, informatie voor voorlichting en tips voor
            afbouwen.{" "}
          </h2>
          <div className="grid w-fit grid-cols-2 items-center justify-items-center gap-4 md:grid-cols-3 lg:gap-10">
            {middelenRoutes.map((route) => {
              return (
                <MiddelenLink
                  key={route.name}
                  title={route.name}
                  href={route.href}
                  icon={route.icon}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
