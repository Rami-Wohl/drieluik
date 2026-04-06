import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import InfoIcon from "~/components/icons/info-icon";
import { Button } from "~/components/ui/button";

export function MeetInstrumentInfo() {
  return (
    <Dialog>
      <DialogTrigger>
        <InfoIcon fill="none" className="h-5 w-5 md:h-6 md:w-6" />
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[1300px] overflow-x-hidden overflow-y-scroll rounded-md bg-opacity-80 bg-gradient-to-b from-[#ffffff] to-blue-50">
        <DialogHeader className="mb-2 mt-4">
          <DialogTitle className="w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Info hier
          </DialogTitle>
        </DialogHeader>
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
