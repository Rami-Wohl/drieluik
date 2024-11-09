import { type ReactNode } from "react";
import { Pageheader } from "~/components/ui/pageheader";

function ListItem({ children }: { children: ReactNode }) {
  return (
    <li className="list-item list-decimal font-sans text-lg tracking-[1px] text-[#333333] text-opacity-90">
      {children}
    </li>
  );
}

export default function WaardenPage() {
  return (
    <>
      <div className="relative mt-10 flex w-full max-w-full flex-col items-center justify-center gap-10 px-6 md:max-w-[600px]">
        <Pageheader text="Waardenlijst" />
        <ol className="mb-10 flex w-[230px] flex-col gap-1">
          <ListItem>Gezondheid</ListItem>
          <ListItem>Familie</ListItem>
          <ListItem>Vriendschap</ListItem>
          <ListItem>Vrijheid</ListItem>
          <ListItem>Zelfvertrouwen</ListItem>
          <ListItem>Verantwoordelijkheid</ListItem>
          <ListItem>Veiligheid</ListItem>
          <ListItem>Geluk</ListItem>
          <ListItem>Groei</ListItem>
          <ListItem>Respect</ListItem>
          <ListItem>Eerlijkheid</ListItem>
          <ListItem>Vertrouwen</ListItem>
          <ListItem>Creativiteit</ListItem>
          <ListItem>Rust</ListItem>
          <ListItem>Dankbaarheid</ListItem>
          <ListItem>Zelfbeheersing</ListItem>
          <ListItem>Empathie</ListItem>
          <ListItem>Liefde</ListItem>
          <ListItem>Vergeving</ListItem>
          <ListItem>Geduld</ListItem>
          <ListItem>Leren</ListItem>
          <ListItem>Avontuur</ListItem>
          <ListItem>Humor</ListItem>
          <ListItem>Spiritualiteit</ListItem>
          <ListItem>Vertrouwen op jezelf</ListItem>
          <ListItem>Verbondenheid</ListItem>
          <ListItem>Innerlijke vrede</ListItem>
          <ListItem>Betrouwbaarheid</ListItem>
          <ListItem>Moed</ListItem>
          <ListItem>Openheid</ListItem>
          <ListItem>Zelfexpressie</ListItem>
          <ListItem>Zorgzaamheid</ListItem>
          <ListItem>Natuur</ListItem>
          <ListItem>Kennis</ListItem>
          <ListItem>Positiviteit</ListItem>
          <ListItem>Plezier</ListItem>
          <ListItem>Bescheidenheid</ListItem>
          <ListItem>Motivatie</ListItem>
          <ListItem>Levensvreugde</ListItem>
          <ListItem>Tijd</ListItem>
          <ListItem>Toewijding</ListItem>
          <ListItem>Wijsheid</ListItem>
          <ListItem>Vasthoudendheid</ListItem>
          <ListItem>Identiteit</ListItem>
          <ListItem>Betekenisgeving</ListItem>
          <ListItem>Humor</ListItem>
          <ListItem>Successen behalen</ListItem>
          <ListItem>Trouw</ListItem>
          <ListItem>Plezier</ListItem>
          <ListItem>Begrip</ListItem>
        </ol>
      </div>
    </>
  );
}
