import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import InfoIcon from "~/components/icons/info-icon";
import { Button } from "./button";

interface InfoPanelProps {
  content: JSX.Element;
  title: JSX.Element;
}

export const InfoPanel = ({ content, title }: InfoPanelProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <InfoIcon fill="none" className="h-5 w-5 md:h-6 md:w-6" />
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[1300px] overflow-x-hidden overflow-y-scroll rounded-md bg-opacity-80 bg-gradient-to-b from-[#ffffff] to-blue-50">
        <DialogHeader className="my-4">
          <DialogTitle className="w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="relative w-full px-12">{content}</div>
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
};
