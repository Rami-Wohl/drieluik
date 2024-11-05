"use client";

import { type Dispatch, type SetStateAction, useState } from "react";
import { Pageheader } from "~/components/ui/pageheader";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  financesScoreLabels,
  healthScoreLabels,
  meaningScoreLabels,
  psychologicalScoreLabels,
  socialScoreLabels,
  substancesScoreLabels,
} from "./data";
import InformationIcon from "~/components/icons/information-icon";
import { formatDateTime } from "~/lib/utils";

type Report = {
  substancesScore: string;
  financesScore: string;
  healthScore: string;
  meaningScore: string;
  psychologicalScore: string;
  socialScore: string;
};

function generateReport(props: Report) {
  const dateTimeFormatted = formatDateTime(new Date());
  const reportContent = `
    Rapport gemaakt op: ${dateTimeFormatted}

    Middelengebruik: ${substancesScoreLabels[Number(props.substancesScore) - 1]}
    Financien: ${financesScoreLabels[Number(props.financesScore) - 1]}
    Gezondheid: ${healthScoreLabels[Number(props.healthScore) - 1]}
    Zingeving: ${meaningScoreLabels[Number(props.meaningScore) - 1]}
    Psychisch welbevinden: ${psychologicalScoreLabels[Number(props.psychologicalScore) - 1]}
    Sociale situatie: ${socialScoreLabels[Number(props.socialScore) - 1]}
  `;

  const blob = new Blob([reportContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `Report_${dateTimeFormatted.replace(/[:\s]/g, "_")}.txt`;
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

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
      </tr>
    </thead>
  );
}

function ValueRow({
  label,
  value,
  setValue,
  options,
}: {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  options: string[];
}) {
  return (
    <tr className="relative h-8 w-full border border-black border-opacity-70">
      <td className="border border-black border-opacity-70 text-left text-xs md:text-base">
        <ScoreSelectMenu label={label} setValue={setValue} options={options} />
      </td>
      <td
        className={`h-8 w-12 cursor-pointer border border-black border-opacity-70 p-1 text-center text-xl font-thin text-opacity-70`}
      >
        {value}
      </td>
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

  const enableDownloadReport =
    substancesScore.length > 0 &&
    financesScore.length > 0 &&
    healthScore.length > 0 &&
    meaningScore.length > 0 &&
    psychologicalScore.length > 0 &&
    socialScore.length > 0;

  return (
    <div className="relative mt-32 flex w-full max-w-[500px] flex-col items-center justify-center gap-10 px-6">
      <Pageheader text="Meet instrument" />

      <div className="relative w-full">
        <label className="mb-1 flex flex-row items-center justify-start gap-1 font-sans text-xs font-light text-[#333333] text-opacity-90 sm:text-sm">
          <InformationIcon height={16} width={16} />
          Klik op een categorie om een score te geven:
        </label>
        <table className="relative h-auto w-full border-collapse">
          <HeaderRow />
          <tbody>
            <ValueRow
              label="Middelengebruik"
              value={substancesScore}
              setValue={setSubstancesScore}
              options={substancesScoreLabels}
            />
            <ValueRow
              label="Financieën"
              value={financesScore}
              setValue={setFinancesScore}
              options={financesScoreLabels}
            />
            <ValueRow
              label="Gezondheid"
              value={healthScore}
              setValue={setHealthScore}
              options={healthScoreLabels}
            />
            <ValueRow
              label="Zingeving"
              value={meaningScore}
              setValue={setMeaningScore}
              options={meaningScoreLabels}
            />
            <ValueRow
              label="Psychisch welbevinden"
              value={psychologicalScore}
              setValue={setPsychologicalScore}
              options={psychologicalScoreLabels}
            />
            <ValueRow
              label="Sociale situatie"
              value={socialScore}
              setValue={setSocialScore}
              options={socialScoreLabels}
            />
          </tbody>
        </table>
      </div>
      <Button
        variant="secondary"
        className="border border-black border-opacity-50 bg-opacity-50"
        disabled={!enableDownloadReport}
        onClick={() =>
          generateReport({
            substancesScore,
            financesScore,
            healthScore,
            meaningScore,
            psychologicalScore,
            socialScore,
          })
        }
      >
        Download scores
      </Button>
    </div>
  );
}

function ScoreSelectMenu({
  label,
  setValue,
  options,
}: {
  label: string;
  setValue: Dispatch<SetStateAction<string>>;
  options: string[];
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
        className="flex flex-col gap-2 bg-gradient-to-b from-red-50 to-green-50 px-2 py-2"
      >
        {Array.from({ length: 7 }, (_, i) => i + 1).map((n) => {
          return (
            <div
              key={`${label}-button-${n}`}
              className="z-10 cursor-pointer rounded-lg border-2 border-black border-opacity-20 hover:border-opacity-70"
            >
              <DropdownMenuItem
                className={`max-w-[calc(100vw-24px)] cursor-pointer px-4 py-1`}
                onClick={() => setValue(String(n))}
              >
                {options[n - 1]}
              </DropdownMenuItem>
            </div>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
