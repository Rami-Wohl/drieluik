"use client";

import { TableCellStyled } from "~/components/ui/table-components/table-cell";
import { TableHeaderCellStyled } from "~/components/ui/table-components/table-header-cell";

export function AlcoholAfbouwTable() {
  return (
    <table className="relative my-8 h-auto w-full border-collapse">
      <thead>
        <tr>
          <TableHeaderCellStyled className="py-2 align-top">
            Week
          </TableHeaderCellStyled>
          <TableHeaderCellStyled className="w-80 py-2 align-top">
            Alcoholconsumptie (in eenheden per dag)
          </TableHeaderCellStyled>
          <TableHeaderCellStyled className="py-2 align-top">
            Doel en opmerking
          </TableHeaderCellStyled>
        </tr>
      </thead>
      <tbody className="font-normal">
        <tr>
          <TableCellStyled className="py-2 align-top">Week 1</TableCellStyled>
          <TableCellStyled className="py-2 align-top">
            Huidige dagelijkse consumptie verminderen met 10-20%
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">
            Start langzaam af te bouwen. Houd dagelijks bij hoeveel eenheden
            worden gedronken en werk aan het bewustzijn.
          </TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">Week 2</TableCellStyled>
          <TableCellStyled className="py-2 align-top">
            Verminderen naar maximaal 75% van de oorspronkelijke dagelijkse
            consumptie
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">
            Zet de afbouw verder door en overweeg om een dag per week geen
            alcohol te drinken. Noteer ontwenningsverschijnselen en ga hierop in
            bij de behandelaar.
          </TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">Week 3</TableCellStyled>
          <TableCellStyled className="py-2 align-top">
            Verder afbouwen naar maximaal 50% van de oorspronkelijke consumptie{" "}
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">
            Werk aan meer alcoholvrije dagen (bijv. 2 per week) en bouw
            eventuele gewoontes rondom drinken af (zoals bij het avondeten).
          </TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">Week 4</TableCellStyled>
          <TableCellStyled className="py-2 align-top">
            Verminderen naar 25% van oorspronkelijke dagelijkse consumptie of
            minder{" "}
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">
            Het doel is 3-4 dagen per week alcoholvrij zijn, met maximaal 2-3
            eenheden per keer op drinkdagen. Verminder sociale situaties waarbij
            alcohol normaal is.
          </TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">Week 5-6</TableCellStyled>
          <TableCellStyled className="py-2 align-top">
            Volledig stoppen of terug naar maximaal 1-2 eenheden per gelegenheid
            (1-2 keer per week){" "}
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">
            Volledig stoppen of alleen in gecontroleerde en kleine hoeveelheden
            drinken. Focus op het ontwikkelen van nieuwe gezonde routines.
          </TableCellStyled>
        </tr>
      </tbody>
    </table>
  );
}
