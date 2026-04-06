import {
  financesScoreLabels,
  healthScoreLabels,
  meaningScoreLabels,
  psychologicalScoreLabels,
  socialScoreLabels,
  substancesScoreLabels,
  gevoelsTemperatuurLabels,
} from "./data";
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

export function generateReport(props: Report) {
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
