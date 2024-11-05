"use client";

import { type Dispatch, type SetStateAction, useState } from "react";
import { Pageheader } from "~/components/ui/pageheader";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { psychologicalScoreLabels } from "./data";

function HeaderRow() {
  return (
    <thead>
      <tr className="h-8 w-full border border-black border-opacity-70">
        <th className="border-black border-opacity-70 px-4 text-left font-sans font-bold">
          Categorie
        </th>
        <th className="w-12 border border-black border-opacity-70 px-4 text-left font-sans font-bold">
          Score
        </th>
        {/* {Array.from({ length: 7 }, (_, i) => i + 1).map((n) => {
          return (
            <th
              key={`header-${n}`}
              className="w-8 border border-black border-opacity-70 font-sans font-medium"
            >
              {n}
            </th>
          );
        })} */}
      </tr>
    </thead>
  );
}

function ValueRow({
  label,
  value,
  setValue,
  tooltips,
}: {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  tooltips?: string[];
}) {
  return (
    <tr className="relative h-8 w-full border border-black border-opacity-70">
      <td className="border border-black border-opacity-70 text-left text-xs md:text-base">
        <ScoreSelectMenu
          label={label}
          value={value}
          setValue={setValue}
          tooltips={psychologicalScoreLabels}
        />
      </td>
      {/* {Array.from({ length: 7 }, (_, i) => i + 1).map((n) => {
        return (
          <td
            key={`${label}-button-${n}`}
            className={`h-8 w-8 cursor-pointer border border-black border-opacity-70 p-1 text-center text-3xl font-thin text-opacity-70 ${value === String(n) ? "bg-red-600 bg-opacity-30" : "bg-transparent"}`}
            onClick={() => setValue(String(n))}
          >
            {value === String(n) ? "X" : null}
          </td>
        );
      })} */}
      {value && (
        <td
          className={`h-8 w-12 cursor-pointer border border-black border-opacity-70 p-1 text-center text-xl font-thin text-opacity-70`}
        >
          {value}
        </td>
      )}
    </tr>
  );
}

export default function InstrumentPage() {
  const [substancesScore, setSubstancesScore] = useState<string>("");
  const [financesScore, setFinancesScore] = useState<string>("");
  const [healthScore, setHealthScore] = useState<string>("");
  const [meaningScore, setMeaningScore] = useState<string>("");
  const [psychologicalScore, setPsychologicalScore] = useState<string>("");
  const [socialScore, setSocialScore] = useState<string>("");

  return (
    <div className="mt-32 flex w-full max-w-[500px] flex-col items-center justify-center gap-12 px-6">
      <Pageheader text="Meet instrument" />

      <table className="h-auto w-full border-collapse">
        <HeaderRow />
        <tbody>
          <ValueRow
            label="Middelengebruik"
            value={substancesScore}
            setValue={setSubstancesScore}
          />
          <ValueRow
            label="Financieën"
            value={financesScore}
            setValue={setFinancesScore}
          />
          <ValueRow
            label="Gezondheid"
            value={healthScore}
            setValue={setHealthScore}
          />
          <ValueRow
            label="Zingeving"
            value={meaningScore}
            setValue={setMeaningScore}
          />
          <ValueRow
            label="Psychisch welbevinden"
            value={psychologicalScore}
            setValue={setPsychologicalScore}
          />
          <ValueRow
            label="Sociale situatie"
            value={socialScore}
            setValue={setSocialScore}
          />
        </tbody>
      </table>
    </div>
  );
}

function ScoreSelectMenu({
  label,
  value,
  setValue,
  tooltips,
}: {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  tooltips: string[];
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-full flex-row justify-start rounded-none hover:bg-opacity-50 focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          {label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        className="ml-2 bg-gradient-to-b from-red-50 to-green-50 px-0 py-4"
      >
        {Array.from({ length: 7 }, (_, i) => i + 1).map((n) => {
          return (
            <DropdownMenuItem
              key={`${label}-button-${n}`}
              className={`max-w-[calc(100vw-24px)] cursor-pointer px-4 py-1`}
              onClick={() => setValue(String(n))}
            >
              {tooltips[n - 1]}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
