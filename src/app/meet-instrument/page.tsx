"use client";

import { useState } from "react";
import { Pageheader } from "~/components/ui/pageheader";
import { Button } from "~/components/ui/button";
import {
  financesScoreLabels,
  healthScoreLabels,
  meaningScoreLabels,
  psychologicalScoreLabels,
  socialScoreLabels,
  substancesScoreLabels,
  gevoelsTemperatuurLabels,
} from "./data";

import { TooSmallPlaceholder } from "~/components/ui/too-small-placeholder";
import { MeetInstrumentInfo } from "./meetinstrument-info";
import { ValueRow } from "./value-row";
import { generateReport } from "./generate-report";

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
    <>
      <TooSmallPlaceholder />
      <div className="relative mt-32 hidden w-full max-w-[800px] flex-col items-center justify-center gap-6 px-6 md:flex">
        <div className="flex items-baseline gap-2 md:gap-4">
          <Pageheader text="Meet instrument" />
          <MeetInstrumentInfo />
        </div>
        <div className="w-full">
          <div className="relative flex w-full flex-col border border-black border-opacity-70">
            <div className="flex w-full border-b border-black border-opacity-70 bg-gray-400 bg-opacity-65">
              <div className="flex-1 px-2 py-1 text-center font-sans text-xs font-bold md:text-base">
                Categorie
              </div>
              <div className="flex-1 px-2 py-1 text-center font-sans text-xs font-bold md:text-base">
                Gevoelstemperatuur
              </div>
              <div className="flex-1 px-2 py-1 text-center font-sans text-xs font-bold md:text-base">
                Score
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
    </>
  );
}
