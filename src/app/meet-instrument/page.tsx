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
  gevoelsTemperatuurLabels,
} from "./data";
import InformationIcon from "~/components/icons/information-icon";
import { formatDateTime, formatDateTimeForFilename } from "~/lib/utils";

type Report = {
  substancesScore: string;
  financesScore: string;
  healthScore: string;
  meaningScore: string;
  psychologicalScore: string;
  socialScore: string;
  substancesTemp: string;
  financesTemp: string;
  healthTemp: string;
  meaningTemp: string;
  psychologicalTemp: string;
  socialTemp: string;
};

function generateReport(props: Report) {
  const dateTimeFormatted = formatDateTime(new Date());
  const reportContent = `
Rapport gemaakt op: ${dateTimeFormatted}

Middelengebruik: ${substancesScoreLabels[Number(props.substancesScore) - 1]}. De gevoelstemperatuur voor deze categorie is ${gevoelsTemperatuurLabels[Number(props.substancesTemp) - 1]}
Financien: ${financesScoreLabels[Number(props.financesScore) - 1]}. De gevoelstemperatuur voor deze categorie is ${gevoelsTemperatuurLabels[Number(props.financesTemp) - 1]}
Gezondheid: ${healthScoreLabels[Number(props.healthScore) - 1]}. De gevoelstemperatuur voor deze categorie is ${gevoelsTemperatuurLabels[Number(props.healthTemp) - 1]}
Zingeving: ${meaningScoreLabels[Number(props.meaningScore) - 1]}. De gevoelstemperatuur voor deze categorie is ${gevoelsTemperatuurLabels[Number(props.meaningTemp) - 1]}
Psychisch welbevinden: ${psychologicalScoreLabels[Number(props.psychologicalScore) - 1]}. De gevoelstemperatuur voor deze categorie is ${gevoelsTemperatuurLabels[Number(props.psychologicalTemp) - 1]}
Sociale situatie: ${socialScoreLabels[Number(props.socialScore) - 1]}. De gevoelstemperatuur voor deze categorie is ${gevoelsTemperatuurLabels[Number(props.socialTemp) - 1]}
`;

  const blob = new Blob([reportContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `Meetinstrument_rapport_${formatDateTimeForFilename(new Date())}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function ValueRow({
  label,
  selfReportValue,
  temperatureValue,
  setSelfReportValue,
  setTemperature,
  selfReportOptions,
  temperatureOptions,
}: {
  label: string;
  selfReportValue: string;
  temperatureValue: string;
  setSelfReportValue: Dispatch<SetStateAction<string>>;
  setTemperature: Dispatch<SetStateAction<string>>;
  selfReportOptions: string[];
  temperatureOptions: string[];
}) {
  return (
    <div className="flex w-full flex-col border-b border-black border-opacity-70 last:border-b-0">
      <div className="flex flex-1 items-center justify-center border-b border-black border-opacity-70 px-2 py-1 text-xs md:text-base">
        {label}
      </div>

      <div className="flex flex-row">
        <div className="flex flex-1 items-center justify-center border-r border-black border-opacity-70">
          <ScoreSelectMenu
            label={label}
            value={selfReportValue}
            setValue={setSelfReportValue}
            options={selfReportOptions}
          />
        </div>

        <div className="flex flex-1 items-center justify-center">
          <ScoreSelectMenu
            label={label}
            value={temperatureValue}
            setValue={setTemperature}
            options={temperatureOptions}
          />
        </div>
      </div>
    </div>
  );
}

export default function InstrumentPage() {
  const [substancesScore, setSubstancesScore] = useState<string>("");
  const [financesScore, setFinancesScore] = useState<string>("");
  const [healthScore, setHealthScore] = useState<string>("");
  const [meaningScore, setMeaningScore] = useState<string>("");
  const [psychologicalScore, setPsychologicalScore] = useState<string>("");
  const [socialScore, setSocialScore] = useState<string>("");

  const [substancesTemp, setSubstancesTemp] = useState<string>("");
  const [financesTemp, setFinancesTemp] = useState<string>("");
  const [healthTemp, setHealthTemp] = useState<string>("");
  const [meaningTemp, setMeaningTemp] = useState<string>("");
  const [psychologicalTemp, setPsychologicalTemp] = useState<string>("");
  const [socialTemp, setSocialTemp] = useState<string>("");

  const enableDownloadReport =
    !!substancesScore &&
    !!financesScore &&
    !!healthScore &&
    !!meaningScore &&
    !!psychologicalScore &&
    !!socialScore &&
    !!substancesTemp &&
    !!financesTemp &&
    !!healthTemp &&
    !!meaningTemp &&
    !!psychologicalTemp &&
    !!socialTemp;

  return (
    <div className="relative mt-32 flex w-full max-w-[500px] flex-col items-center justify-center gap-6 px-6">
      <Pageheader text="Meet instrument" />

      <div className="w-full">
        <label className="mb-1 flex flex-row items-center justify-start gap-1 font-sans text-xs font-light text-[#333333] text-opacity-90 sm:text-sm">
          {" "}
          <InformationIcon height={16} width={16} /> Klik op de velden onder
          elke categorie om scores te geven:{" "}
        </label>
        <div className="relative flex w-full flex-col border border-black border-opacity-70">
          <div className="flex w-full border-b border-black border-opacity-70 bg-gray-400 bg-opacity-65">
            <div className="flex-1 px-2 py-1 text-center font-sans text-xs font-bold md:text-base">
              Score
            </div>
            <div className="flex-1 px-2 py-1 text-center font-sans text-xs font-bold md:text-base">
              Gevoelstemperatuur
            </div>
          </div>

          <ValueRow
            label="Middelengebruik"
            selfReportValue={substancesScore}
            temperatureValue={substancesTemp}
            setSelfReportValue={setSubstancesScore}
            setTemperature={setSubstancesTemp}
            selfReportOptions={substancesScoreLabels}
            temperatureOptions={gevoelsTemperatuurLabels}
          />
          <ValueRow
            label="Financiën"
            selfReportValue={financesScore}
            temperatureValue={financesTemp}
            setSelfReportValue={setFinancesScore}
            setTemperature={setFinancesTemp}
            selfReportOptions={financesScoreLabels}
            temperatureOptions={gevoelsTemperatuurLabels}
          />
          <ValueRow
            label="Gezondheid"
            selfReportValue={healthScore}
            temperatureValue={healthTemp}
            setSelfReportValue={setHealthScore}
            setTemperature={setHealthTemp}
            selfReportOptions={healthScoreLabels}
            temperatureOptions={gevoelsTemperatuurLabels}
          />
          <ValueRow
            label="Zingeving"
            selfReportValue={meaningScore}
            temperatureValue={meaningTemp}
            setSelfReportValue={setMeaningScore}
            setTemperature={setMeaningTemp}
            selfReportOptions={meaningScoreLabels}
            temperatureOptions={gevoelsTemperatuurLabels}
          />
          <ValueRow
            label="Psychisch welbevinden"
            selfReportValue={psychologicalScore}
            temperatureValue={psychologicalTemp}
            setSelfReportValue={setPsychologicalScore}
            setTemperature={setPsychologicalTemp}
            selfReportOptions={psychologicalScoreLabels}
            temperatureOptions={gevoelsTemperatuurLabels}
          />
          <ValueRow
            label="Sociale situatie"
            selfReportValue={socialScore}
            temperatureValue={socialTemp}
            setSelfReportValue={setSocialScore}
            setTemperature={setSocialTemp}
            selfReportOptions={socialScoreLabels}
            temperatureOptions={gevoelsTemperatuurLabels}
          />
        </div>
      </div>
      <Button
        variant="secondary"
        className="w-full border border-black border-opacity-50 bg-opacity-50"
        disabled={!enableDownloadReport}
        onClick={() =>
          generateReport({
            substancesScore,
            financesScore,
            healthScore,
            meaningScore,
            psychologicalScore,
            socialScore,
            substancesTemp,
            financesTemp,
            healthTemp,
            meaningTemp,
            psychologicalTemp,
            socialTemp,
          })
        }
      >
        Download rapport
      </Button>
    </div>
  );
}

function ScoreSelectMenu({
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
    <DropdownMenu modal>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-full flex-row justify-center rounded-none hover:bg-opacity-50 focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          {value || <span className="text-gray-500">{"..."}</span>}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        className="flex items-center justify-center bg-gradient-to-b from-red-50 to-green-50 px-2 py-2"
      >
        <div className="relative flex max-h-80 flex-col gap-2 overflow-y-scroll md:max-h-full">
          {Array.from({ length: options.length }, (_, i) => i + 1).map((n) => (
            <div
              key={`${label}-button-${n}`}
              className="z-10 cursor-pointer rounded-lg border-2 border-black border-opacity-20 hover:border-opacity-70"
            >
              <DropdownMenuItem
                className="max-w-[calc(100vw-24px)] cursor-pointer px-4 py-1"
                onClick={() => setValue(String(n))}
              >
                {options[n - 1]}
              </DropdownMenuItem>
            </div>
          ))}
          <div className="mb-4 md:hidden" />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-50 h-12 bg-gradient-to-t from-white to-transparent md:hidden" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
