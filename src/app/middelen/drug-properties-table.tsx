import { TableCellStyled } from "~/components/ui/table-components/table-cell";
import { SubSectionHeader } from "~/components/ui/text-components/subsection-header";

type DrugPropertiesTableProps = {
  werkzameStof: string;
  gebruiksvorm: string;
  uiterlijkeKenmerken: string;
  verslavingspotentie: string;
  schadeTaxatie: string;
};

export const DrugPropertiesTable = ({
  werkzameStof,
  gebruiksvorm,
  uiterlijkeKenmerken,
  verslavingspotentie,
  schadeTaxatie,
}: DrugPropertiesTableProps) => {
  return (
    <div>
      <SubSectionHeader>Stofgegevens</SubSectionHeader>
      <table className="relative mb-8 mt-4 h-auto w-full border-collapse">
        <tbody className="font-normal">
          <tr>
            <TableCellStyled className="w-96 py-2 align-top">
              Werkzame stof
            </TableCellStyled>
            <TableCellStyled className="py-2 align-top">
              {werkzameStof}
            </TableCellStyled>
          </tr>
          <tr>
            <TableCellStyled className="w-96 py-2 align-top">
              Gebruiksvorm
            </TableCellStyled>
            <TableCellStyled className="py-2 align-top">
              {gebruiksvorm}
            </TableCellStyled>
          </tr>
          <tr>
            <TableCellStyled className="w-96 py-2 align-top">
              Uiterlijke kenmerken
            </TableCellStyled>
            <TableCellStyled className="py-2 align-top">
              {uiterlijkeKenmerken}
            </TableCellStyled>
          </tr>
          <tr>
            <TableCellStyled className="w-96 py-2 align-top">
              Verslavingspotentie (RIVM) 0-3
            </TableCellStyled>
            <TableCellStyled className="py-2 align-top">
              {verslavingspotentie}
            </TableCellStyled>
          </tr>
          <tr>
            <TableCellStyled className="w-96 py-2 align-top">
              Algemene schade taxatie (RIVM) 0-3
            </TableCellStyled>
            <TableCellStyled className="py-2 align-top">
              {schadeTaxatie}
            </TableCellStyled>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
