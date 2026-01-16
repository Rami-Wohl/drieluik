"use client";

import { type Dispatch, type SetStateAction, useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "~/components/ui/dialog";

export function ScoreSelectDialog({
  label,
  value,
  setValue,
}: {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}) {
  const [tempVal, setTempVal] = useState(value);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* Trigger button */}
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="h-full w-full justify-start rounded-none hover:bg-opacity-50 focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          {label}
        </Button>
      </DialogTrigger>

      {/* Dialog content */}
      <DialogContent className="w-full max-w-md p-4">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">{label}</DialogTitle>
        </DialogHeader>

        <div className="mt-2 flex flex-col gap-4">
          <textarea
            autoFocus
            className="min-h-[120px] w-full resize-y rounded border p-2"
            value={tempVal}
            onChange={(e) => setTempVal(e.target.value)}
          />

          <Button
            variant="outline"
            onClick={() => {
              setValue(tempVal);
              setIsOpen(false);
            }}
          >
            Opslaan
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-6">
      <h2 className="border border-black border-opacity-70 px-4 py-2 text-center font-sans font-bold">
        {title}
      </h2>
      <div className="flex flex-col border-l border-r border-black border-opacity-70">
        {children}
      </div>
    </section>
  );
}

function ValueRow({
  label,
  value,
  setValue,
  background,
}: {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  background: "bg-green-300" | "bg-yellow-300" | "bg-red-300";
}) {
  return (
    <div className="grid grid-cols-[10rem_1fr] border-b border-black border-opacity-70">
      <div className={`${background} border-r border-black border-opacity-70`}>
        <ScoreSelectDialog label={label} value={value} setValue={setValue} />
      </div>

      <div className="overflow-hidden text-ellipsis whitespace-nowrap p-2 text-start text-base font-thin text-opacity-70 lg:overflow-auto lg:text-wrap lg:text-lg">
        {value}
      </div>
    </div>
  );
}

export function Signaleringsplan() {
  const [ik_doen_goed, set_ik_doen_goed] = useState("");
  const [ik_doen_mid, set_ik_doen_mid] = useState("");
  const [ik_doen_slecht, set_ik_doen_slecht] = useState("");

  const [ander_doen_goed, set_ander_doen_goed] = useState("");
  const [ander_doen_mid, set_ander_doen_mid] = useState("");
  const [ander_doen_slecht, set_ander_doen_slecht] = useState("");

  const [ik_merk_goed, set_ik_merk_goed] = useState("");
  const [ik_merk_mid, set_ik_merk_mid] = useState("");
  const [ik_merk_slecht, set_ik_merk_slecht] = useState("");

  const [ander_merk_goed, set_ander_merk_goed] = useState("");
  const [ander_merk_mid, set_ander_merk_mid] = useState("");
  const [ander_merk_slecht, set_ander_merk_slecht] = useState("");

  const enableDownloadReport =
    ik_doen_goed &&
    ik_doen_mid &&
    ik_doen_slecht &&
    ander_doen_goed &&
    ander_doen_mid &&
    ander_doen_slecht &&
    ik_merk_goed &&
    ik_merk_mid &&
    ik_merk_slecht &&
    ander_merk_goed &&
    ander_merk_mid &&
    ander_merk_slecht;

  return (
    <Dialog>
      <DialogTrigger className="w-full rounded-none bg-white bg-opacity-30 px-4 py-2 hover:bg-opacity-70 hover:shadow-sm">
        <div className="text-center font-sans text-sm font-light tracking-[1px] text-[#333333]">
          Open het signaleringsplan
        </div>
      </DialogTrigger>

      <DialogContent className="max-h-[80vh] w-11/12 max-w-[800px] overflow-y-auto rounded-md bg-gradient-to-b from-white to-blue-50 lg:w-2/3">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-center font-sans text-2xl font-semibold tracking-wide lg:text-3xl">
            Signaleringsplan
          </DialogTitle>
        </DialogHeader>

        <div className="relative flex max-w-full flex-col px-2">
          <Section title="Wat kan ik doen?">
            <ValueRow
              background="bg-green-300"
              label="Het gaat goed"
              value={ik_doen_goed}
              setValue={set_ik_doen_goed}
            />
            <ValueRow
              background="bg-yellow-300"
              label="Het gaat niet goed"
              value={ik_doen_mid}
              setValue={set_ik_doen_mid}
            />
            <ValueRow
              background="bg-red-300"
              label="Het gaat slecht"
              value={ik_doen_slecht}
              setValue={set_ik_doen_slecht}
            />
          </Section>

          <Section title="Wat kan een ander doen?">
            <ValueRow
              background="bg-green-300"
              label="Het gaat goed"
              value={ander_doen_goed}
              setValue={set_ander_doen_goed}
            />
            <ValueRow
              background="bg-yellow-300"
              label="Het gaat niet goed"
              value={ander_doen_mid}
              setValue={set_ander_doen_mid}
            />
            <ValueRow
              background="bg-red-300"
              label="Het gaat slecht"
              value={ander_doen_slecht}
              setValue={set_ander_doen_slecht}
            />
          </Section>

          <Section title="Wat merk ik?">
            <ValueRow
              background="bg-green-300"
              label="Het gaat goed"
              value={ik_merk_goed}
              setValue={set_ik_merk_goed}
            />
            <ValueRow
              background="bg-yellow-300"
              label="Het gaat niet goed"
              value={ik_merk_mid}
              setValue={set_ik_merk_mid}
            />
            <ValueRow
              background="bg-red-300"
              label="Het gaat slecht"
              value={ik_merk_slecht}
              setValue={set_ik_merk_slecht}
            />
          </Section>

          <Section title="Wat merkt een ander?">
            <ValueRow
              background="bg-green-300"
              label="Het gaat goed"
              value={ander_merk_goed}
              setValue={set_ander_merk_goed}
            />
            <ValueRow
              background="bg-yellow-300"
              label="Het gaat niet goed"
              value={ander_merk_mid}
              setValue={set_ander_merk_mid}
            />
            <ValueRow
              background="bg-red-300"
              label="Het gaat slecht"
              value={ander_merk_slecht}
              setValue={set_ander_merk_slecht}
            />
          </Section>
        </div>

        <Button
          variant="secondary"
          disabled={!enableDownloadReport}
          className="mt-4 w-full border bg-transparent"
          onClick={() => console.log("download")}
        >
          Downloaden
        </Button>
      </DialogContent>
    </Dialog>
  );
}
