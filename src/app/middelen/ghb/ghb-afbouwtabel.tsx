"use client";

import { TableCellStyled } from "~/components/ui/table-components/table-cell";
import { TableHeaderCellStyled } from "~/components/ui/table-components/table-header-cell";

export function GhbAfbouwtabel() {
  return (
    <table className="relative my-2 h-auto w-full border-collapse">
      <thead>
        <tr>
          <TableHeaderCellStyled className="py-2 align-top">
            Stap
          </TableHeaderCellStyled>
          <TableHeaderCellStyled className="py-2 align-top">
            Dosering per inname
          </TableHeaderCellStyled>
        </tr>
      </thead>
      <tbody className="font-normal">
        <tr>
          <TableCellStyled className="py-2 align-top">Start</TableCellStyled>
          <TableCellStyled className="py-2 align-top">5 ml</TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">Stap 1 </TableCellStyled>
          <TableCellStyled className="py-2 align-top">4,5 ml</TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">Stap 2 </TableCellStyled>
          <TableCellStyled className="py-2 align-top">4 ml</TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">Stap 3 </TableCellStyled>
          <TableCellStyled className="py-2 align-top">3,5 ml</TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">Stap 4 </TableCellStyled>
          <TableCellStyled className="py-2 align-top">3 ml</TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">Stap 5 </TableCellStyled>
          <TableCellStyled className="py-2 align-top">2,5 ml</TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">Stap 6 </TableCellStyled>
          <TableCellStyled className="py-2 align-top">2 ml</TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">Stap 7 </TableCellStyled>
          <TableCellStyled className="py-2 align-top">1,5 ml</TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">Stap 8 </TableCellStyled>
          <TableCellStyled className="py-2 align-top">1 ml</TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">Stap 9 </TableCellStyled>
          <TableCellStyled className="py-2 align-top">0,5 ml</TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">Daarna </TableCellStyled>
          <TableCellStyled className="py-2 align-top">Stoppen</TableCellStyled>
        </tr>
      </tbody>
    </table>
  );
}

export function GhbInfoTabel() {
  return (
    <table className="relative mb-8 mt-2 h-auto w-full border-collapse">
      <tbody className="font-normal">
        <tr>
          <TableCellStyled className="py-2 align-top">
            Startdosering (beginners)
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">
            ± 1 – 1,5 ml (laag beginnen)
          </TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">
            Gebruikelijke dosering (ervaren gebruikers)
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">
            ± 1,5 – 2,5 ml
          </TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">
            Gevaarlijke dosering (beginners)
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">
            vanaf ± 2 ml+ neemt risico op outgaan sterk toe
          </TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">
            Doseerspuit gebruiken
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">
            Altijd exact afmeten (geen “dopjes” of gokken)
          </TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">
            Timer gebruiken
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">
            Wacht minimaal 1,5 – 2 uur voor je eventueel bijneemt
          </TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">
            Combineren
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">
            Niet combineren met alcohol, benzo’s of andere dempende middelen
          </TableCellStyled>
        </tr>
      </tbody>
    </table>
  );
}
