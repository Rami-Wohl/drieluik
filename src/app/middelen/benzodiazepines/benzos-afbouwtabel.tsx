"use client";

import { TableCellStyled } from "~/components/ui/table-components/table-cell";
import { TableHeaderCellStyled } from "~/components/ui/table-components/table-header-cell";

export function BenzosAfbouwtabel1() {
  return (
    <table className="relative my-2 h-auto w-full border-collapse">
      <thead>
        <tr>
          <TableHeaderCellStyled className="py-2 align-top">
            Periode
          </TableHeaderCellStyled>
          <TableHeaderCellStyled className="py-2 align-top">
            Dagdosering
          </TableHeaderCellStyled>
        </tr>
      </thead>
      <tbody className="font-normal">
        <tr>
          <TableCellStyled className="py-2 align-top">
            Week 1 - 2
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">40 mg</TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">
            Week 3 - 4
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">35 mg</TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">
            Week 5 - 6
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">30 mg</TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">
            Week 7 - 8
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">25 mg</TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">
            Week 9 - 10
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">20 mg</TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">
            Week 11 - 12
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">15 mg</TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">
            Week 13 - 14
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">10 mg</TableCellStyled>
        </tr>
      </tbody>
    </table>
  );
}

export function BenzosAfbouwtabel2() {
  return (
    <table className="relative my-2 h-auto w-full border-collapse">
      <thead>
        <tr>
          <TableHeaderCellStyled className="min-w-24 py-2 align-top">
            Periode
          </TableHeaderCellStyled>
          <TableHeaderCellStyled className="py-2 align-top">
            Dagdosering
          </TableHeaderCellStyled>
        </tr>
      </thead>
      <tbody className="font-normal">
        <tr>
          <TableCellStyled className="py-2 align-top">
            Week 15 - 16
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">8 mg</TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">
            Week 17 - 18
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">6 mg</TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">
            Week 19 - 20
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">4 mg</TableCellStyled>
        </tr>
        <tr>
          <TableCellStyled className="py-2 align-top">
            Week 21 - 22
          </TableCellStyled>
          <TableCellStyled className="py-2 align-top">2 mg</TableCellStyled>
        </tr>
      </tbody>
    </table>
  );
}
