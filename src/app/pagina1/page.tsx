import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export default function Pagina1() {
  return (
    <main className="mt-20 flex min-h-screen w-full flex-col items-center bg-gradient-to-b from-[#ffffff] to-[#00ffd0] text-white">
      <div className="flex w-full max-w-[800px] flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
          Luik <span className="text-[hsl(310,51%,38%)]">1</span>
        </h1>
        <Accordion type="single" collapsible className="w-full text-black">
          <AccordionItem value="item-1">
            <AccordionTrigger className="rounded-md bg-red-400 bg-opacity-80 p-4">
              Lorem Ipsum
            </AccordionTrigger>
            <AccordionContent className="bg-white bg-opacity-90 p-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ac ornare enim, et tristique ex. Integer luctus porttitor lorem,
              at lobortis erat. Vivamus vestibulum orci interdum, luctus augue
              id, venenatis purus. Phasellus eget faucibus mi, eu suscipit ante.
              Fusce eu vestibulum magna. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Nunc lacinia est
              neque, in pellentesque lacus interdum ullamcorper. Aenean nec
              tellus vel massa hendrerit posuere. Ut pellentesque vehicula nisl
              et rutrum. Donec ac erat molestie, varius leo ut, hendrerit velit.
              Praesent cursus eros nec maximus varius. Nam volutpat, odio et
              viverra placerat, sapien risus tempus diam, id venenatis neque
              arcu sit amet urna. Suspendisse vitae sollicitudin nisi. Phasellus
              vel orci ut urna aliquet semper vitae nec augue.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="rounded-md bg-red-400 bg-opacity-80 p-4">
              Lorem Ipsum: Reloaded
            </AccordionTrigger>
            <AccordionContent className="bg-white bg-opacity-90 p-6">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin interdum sagittis auctor. Morbi
              lacinia massa et quam tincidunt dignissim. Donec lobortis erat at
              tempus luctus. Nam ullamcorper finibus euismod. Proin imperdiet
              maximus dui, ut ullamcorper erat porta a. Fusce vestibulum ante
              cursus purus luctus laoreet. Integer sodales diam cursus lectus
              viverra, tempus congue ligula pharetra. Duis id pretium diam, in
              varius arcu.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="rounded-md bg-red-400 bg-opacity-80 p-4">
              The Return of Lorem Ipsum
            </AccordionTrigger>
            <AccordionContent className="bg-white bg-opacity-90 p-6">
              Phasellus quis bibendum libero, eu finibus orci. Proin magna leo,
              congue sed lacus quis, luctus maximus eros. Sed semper elit vel
              sapien eleifend dapibus. Fusce tellus lectus, finibus in purus at,
              aliquet varius nisl. Donec maximus, orci volutpat ultrices
              gravida, lorem felis pulvinar nibh, id scelerisque arcu quam vel
              tellus. Integer euismod leo quis diam tincidunt venenatis. Proin
              rhoncus pretium lectus et varius. Vivamus est mi, lacinia nec arcu
              a, interdum congue enim. Maecenas in eros suscipit, maximus metus
              vel, egestas sapien. Mauris tincidunt, tortor quis mollis rutrum,
              leo dui cursus tortor, a fermentum orci nisl quis nulla. Nullam
              fringilla cursus fermentum. Suspendisse et volutpat augue.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
