"use client";

import { Button } from "~/components/ui/button";
import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "~/components/ui/dialog";
import { type ReactNode } from "react";
import { SubSectionHeader } from "./ghb";

export function TableHeaderCellStyled({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <th
      className={`${className} min-w-28 border border-black border-opacity-70 px-2 text-left font-sans text-[#333333]`}
    >
      {children}
    </th>
  );
}

export function TableCellStyled({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <td
      className={`${className} min-w-28 border border-black border-opacity-70 px-2 text-left font-sans text-[#333333]`}
    >
      {" "}
      {children}
    </td>
  );
}

function CannabisTableHeaderRow() {
  return (
    <thead>
      <tr className="h-8 w-full font-bold">
        <th className="min-w-28 px-2"></th>
        <TableHeaderCellStyled>Psychose</TableHeaderCellStyled>
        <TableHeaderCellStyled>ADHD</TableHeaderCellStyled>
        <TableHeaderCellStyled>Depressie</TableHeaderCellStyled>
        <TableHeaderCellStyled>Angst</TableHeaderCellStyled>
        <TableHeaderCellStyled>Persoonlijkheid</TableHeaderCellStyled>
        <TableHeaderCellStyled>Slaap</TableHeaderCellStyled>
        <TableHeaderCellStyled>Pijn</TableHeaderCellStyled>
        <TableHeaderCellStyled>Eenzaamheid</TableHeaderCellStyled>
        <TableHeaderCellStyled>Compulsiviteit</TableHeaderCellStyled>
      </tr>
    </thead>
  );
}

function CannabisTableValueRow({
  label,
  colors,
}: {
  label: string;
  colors: ("red" | "orange" | "green" | "blue")[];
}) {
  return (
    <tr className="relative h-8 w-full border border-black border-opacity-70 text-[#333333]">
      <td className="min-w-28 border border-black border-opacity-70 px-2 text-left font-sans font-bold">
        {label}
      </td>
      {colors.map((color, idx) => {
        return (
          <td
            key={`${label}-${idx}`}
            className={`bg-opacity-80 ${color === "red" && "bg-red-500"} ${color === "orange" && "bg-orange-500"} ${color === "green" && "bg-green-500"} ${color === "blue" && "bg-blue-500"} h-8 min-w-28 border border-black border-opacity-70`}
          />
        );
      })}
    </tr>
  );
}

function LegendaRow({
  text,
  backgroundColor,
}: {
  text: string;
  backgroundColor: string;
}) {
  return (
    <div className="flex flex-row items-center gap-6 px-2">
      <div
        className={`h-8 min-w-12 border border-black border-opacity-70 ${backgroundColor} bg-opacity-80 px-2`}
      />
      <div className="font-sans text-sm text-[#333333] text-opacity-90 lg:text-base">
        {" "}
        {text}
      </div>
    </div>
  );
}

function HackyCSSTable({
  title,
  values,
  hasLeftBorder = false,
}: {
  title: string;
  values: string[];
  hasLeftBorder?: boolean;
}) {
  return (
    <table className="min-w-64 border-collapse">
      <tbody>
        <tr
          className={`relative h-8 w-full border border-black border-opacity-70 ${!hasLeftBorder && "lg:border-l-0"}`}
        >
          <td
            className={`min-w-28 border border-black border-opacity-70 px-2 text-left font-sans font-bold text-[#333333] ${!hasLeftBorder && "lg:border-l-0"}`}
          >
            {title}
          </td>
        </tr>
        {values.map((value, idx) => {
          if (value === "") {
            return (
              <tr
                key={`${title}-${idx}`}
                className={`relative hidden h-8 w-full border border-black border-opacity-70 lg:table-row ${!hasLeftBorder && "lg:border-l-0"}`}
              >
                <td
                  className={`min-w-28 border border-black border-opacity-70 px-2 text-left font-sans ${!hasLeftBorder && "lg:border-l-0"}`}
                />
              </tr>
            );
          }

          return (
            <tr
              key={`${title}-${idx}`}
              className={`relative h-8 w-full border border-black border-opacity-70 ${!hasLeftBorder && "lg:border-l-0"}`}
            >
              <td
                className={`min-w-28 border border-black border-opacity-70 px-2 text-left font-sans ${!hasLeftBorder && "lg:border-l-0"}`}
              >
                {value}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export function CannabisAnamnese() {
  return (
    <Dialog>
      <DialogTrigger className="w-full gap-2 rounded-none bg-white bg-opacity-30 px-4 py-2 text-[#333333] hover:bg-opacity-80 hover:shadow-sm">
        <div className="text-center font-sans text-sm font-light tracking-[1px] text-[#333333] text-opacity-90">
          Open de cannabis anamnese
        </div>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] w-11/12 max-w-[1300px] overflow-x-hidden overflow-y-scroll rounded-md bg-opacity-80 bg-gradient-to-b from-[#ffffff] to-blue-50">
        <DialogHeader className="mb-2 mt-4">
          <DialogTitle className="w-full text-center font-sans text-2xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 lg:text-3xl">
            Cannabis anamnese
          </DialogTitle>
        </DialogHeader>
        <div className="overflow-x-scroll">
          <table className="relative h-auto w-full border-collapse">
            <CannabisTableHeaderRow />
            <tbody>
              <CannabisTableValueRow
                label="Zeefhasj"
                colors={[
                  "orange",
                  "green",
                  "orange",
                  "orange",
                  "orange",
                  "orange",
                  "orange",
                  "blue",
                  "green",
                ]}
              />
              <CannabisTableValueRow
                label="Charras"
                colors={[
                  "orange",
                  "green",
                  "green",
                  "green",
                  "green",
                  "orange",
                  "orange",
                  "blue",
                  "green",
                ]}
              />
              <CannabisTableValueRow
                label="Sativa"
                colors={[
                  "red",
                  "red",
                  "red",
                  "red",
                  "red",
                  "green",
                  "green",
                  "red",
                  "red",
                ]}
              />
              <CannabisTableValueRow
                label="Indica"
                colors={[
                  "orange",
                  "orange",
                  "orange",
                  "orange",
                  "orange",
                  "green",
                  "green",
                  "orange",
                  "green",
                ]}
              />
              <CannabisTableValueRow
                label="CBD wiet"
                colors={[
                  "green",
                  "blue",
                  "green",
                  "green",
                  "blue",
                  "green",
                  "blue",
                  "green",
                  "blue",
                ]}
              />
            </tbody>
          </table>
          <div className="my-8 flex flex-col gap-4">
            <LegendaRow
              text="Geen directe reden om actie te ondernemen"
              backgroundColor="bg-green-500"
            />
            <LegendaRow
              text="Niet ideaal, overweeg over te stappen op een andere soort"
              backgroundColor="bg-orange-500"
            />
            <LegendaRow
              text="Veel risico, hoge druk om over te stappen"
              backgroundColor="bg-red-500"
            />
            <LegendaRow
              text="Geen informatie beschikbaar over interactie"
              backgroundColor="bg-blue-500"
            />
          </div>
        </div>
        <div className="mb-6">
          <h3 className="mb-4 w-full font-sans text-sm tracking-[1px] text-[#333333] lg:tracking-[0.1rem]">
            <span className="text-base font-semibold">Soorten lijst </span>(Bij
            verkoopnaam, inclusief gemiddelde THC percentages)
          </h3>
          <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:gap-0">
            <HackyCSSTable
              hasLeftBorder
              title="Zeefhasj (laag CBD)"
              values={[
                "Polm (15,7%)",
                "Maroc (27%)",
                "Hya (19,6%)",
                "",
                "",
                "",
              ]}
            />
            <HackyCSSTable
              title="Charras (hoog CBD)"
              values={[
                "Afghan (7,7%)",
                "Nepal (19%)",
                "Kashmir (20-25%)",
                "",
                "",
                "",
              ]}
            />
            <HackyCSSTable
              title="Sativa (weinig tot geen CBD)"
              values={[
                "Amnesia Haze (21%)",
                "Cheese (17%)",
                "Lemon Haze (20%)",
                "Silver Haze (23%)",
                "Mexican Haze (18%)",
                "",
              ]}
            />
            <HackyCSSTable
              title="Indica (hoger in CBD)"
              values={[
                "White Widow (WW) (18%)",
                "Northern Lights Extra (NLX) (10%)",
                "Powerplant (PP) (15%)",
                "Jack Harer (20%)",
                "Bubblegum (19%)",
                "AK-47 (17,5%)",
              ]}
            />
          </div>
          <SubSectionHeader>Afbouw parameters</SubSectionHeader>
          <div className="font-sans text-base tracking-[1px] text-[#333333]">
            <div className="mb-2 flex flex-col lg:mb-0 lg:flex-row">
              <span className="w-48 italic">Eenheid kwantiteit:</span>
              <span> De hoeveelheid joints die worden gerookt</span>
            </div>
            <div className="mb-2 flex flex-col lg:mb-0 lg:flex-row">
              <span className="w-48 italic">Volume:</span>
              <span>
                De hoeveelheid cannabis die dagelijks wordt geconsumeerd
              </span>
            </div>
            <div className="mb-2 flex flex-col lg:mb-0 lg:flex-row">
              <span className="w-48 italic">Sterkte:</span>
              <span>De hoeveelheid THC in de cannabis</span>
            </div>
          </div>
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
