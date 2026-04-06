"use client";

import { type Dispatch, type SetStateAction } from "react";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export function TemperatureSelectMenu({
  label,
  value,
  setValue,
}: {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
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
        className="flex flex-col items-center justify-center bg-gradient-to-r from-red-50 to-green-50 px-2 py-2"
      >
        <div className="relative flex max-h-80 flex-row gap-2 overflow-y-scroll md:max-h-full">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
            <div
              key={`${label}-button-${n}`}
              className="z-10 cursor-pointer rounded-lg border-2 border-black border-opacity-20 hover:border-opacity-70"
            >
              <DropdownMenuItem
                className="max-w-[calc(100vw-24px)] cursor-pointer px-4 py-1"
                onClick={() => setValue(String(n))}
              >
                {n}
              </DropdownMenuItem>
            </div>
          ))}
        </div>
        <div className="relative flex w-full flex-row justify-between gap-2 overflow-y-scroll p-1 pt-2 font-sans text-sm font-bold lowercase md:max-h-full">
          <div className="text-red-600">Slecht</div>
          <div className="text-yellow-600">Matig</div>
          <div className="text-green-600">Goed</div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-50 h-12 bg-gradient-to-t from-white to-transparent md:hidden" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
