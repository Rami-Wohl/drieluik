"use client";

import type { Dispatch, SetStateAction } from "react";
import { TemperatureSelectMenu } from "./temperature-select-menu";
import { ScoreSelectMenu } from "./score-select-menu";

export function ValueRow({
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
    <div className="flex w-full flex-row border-b border-black border-opacity-70 last:border-b-0">
      <div className="flex flex-1 items-center justify-center border-r border-black border-opacity-70 md:text-base">
        {label}
      </div>
      <div className="flex flex-1 items-center justify-center border-r border-black border-opacity-70">
        <TemperatureSelectMenu
          label={label}
          value={temperatureValue}
          setValue={setTemperature}
        />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <ScoreSelectMenu
          label={label}
          value={selfReportValue}
          setValue={setSelfReportValue}
          options={selfReportOptions}
        />
      </div>
    </div>
  );
}
