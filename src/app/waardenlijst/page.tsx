import { type ReactNode } from "react";
import { ListItem } from "~/components/ui/list-item";
import { Pageheader } from "~/components/ui/pageheader";

export default function WaardenPage() {
  return (
    <>
      <div className="relative mt-10 flex w-full max-w-full flex-col items-center justify-center gap-10 px-6 md:max-w-[600px]">
        <Pageheader text="Waardenlijst" />
        <ol className="mb-10 flex w-[230px] flex-col gap-1">
          <ListItem ordered>Gezondheid</ListItem>
          <ListItem ordered>Familie</ListItem>
          <ListItem ordered>Vriendschap</ListItem>
          <ListItem ordered>Vrijheid</ListItem>
          <ListItem ordered>Zelfvertrouwen</ListItem>
          <ListItem ordered>Verantwoordelijkheid</ListItem>
          <ListItem ordered>Veiligheid</ListItem>
          <ListItem ordered>Geluk</ListItem>
          <ListItem ordered>Groei</ListItem>
          <ListItem ordered>Respect</ListItem>
          <ListItem ordered>Eerlijkheid</ListItem>
          <ListItem ordered>Vertrouwen</ListItem>
          <ListItem ordered>Creativiteit</ListItem>
          <ListItem ordered>Rust</ListItem>
          <ListItem ordered>Dankbaarheid</ListItem>
          <ListItem ordered>Zelfbeheersing</ListItem>
          <ListItem ordered>Empathie</ListItem>
          <ListItem ordered>Liefde</ListItem>
          <ListItem ordered>Vergeving</ListItem>
          <ListItem ordered>Geduld</ListItem>
          <ListItem ordered>Leren</ListItem>
          <ListItem ordered>Avontuur</ListItem>
          <ListItem ordered>Humor</ListItem>
          <ListItem ordered>Spiritualiteit</ListItem>
          <ListItem ordered>Zelfstandigheid</ListItem>
          <ListItem ordered>Verbondenheid</ListItem>
          <ListItem ordered>Innerlijke vrede</ListItem>
          <ListItem ordered>Betrouwbaarheid</ListItem>
          <ListItem ordered>Moed</ListItem>
          <ListItem ordered>Openheid</ListItem>
          <ListItem ordered>Zelfexpressie</ListItem>
          <ListItem ordered>Zorgzaamheid</ListItem>
          <ListItem ordered>Natuur</ListItem>
          <ListItem ordered>Kennis</ListItem>
          <ListItem ordered>Positiviteit</ListItem>
          <ListItem ordered>Speelsheid</ListItem>
          <ListItem ordered>Bescheidenheid</ListItem>
          <ListItem ordered>Motivatie</ListItem>
          <ListItem ordered>Levensvreugde</ListItem>
          <ListItem ordered>Tijd</ListItem>
          <ListItem ordered>Toewijding</ListItem>
          <ListItem ordered>Wijsheid</ListItem>
          <ListItem ordered>Vasthoudendheid</ListItem>
          <ListItem ordered>Identiteit</ListItem>
          <ListItem ordered>Betekenisgeving</ListItem>
          <ListItem ordered>Successen behalen</ListItem>
          <ListItem ordered>Trouw</ListItem>
          <ListItem ordered>Compassie</ListItem>
          <ListItem ordered>Integriteit</ListItem>
          <ListItem ordered>Inspiratie</ListItem>
        </ol>
      </div>
    </>
  );
}
