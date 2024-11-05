import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { GameContainer } from "./kernquadranten";
import BalansIcon from "~/components/icons/zingeving/balans-icon";

export function Balans() {
  return (
    <Dialog>
      <GameContainer
        icon={<BalansIcon height={72} width={72} />}
        title="Balansspel"
      />
      <DialogContent className="max-h-[80vh] w-11/12 max-w-none overflow-scroll rounded-md bg-opacity-70 bg-gradient-to-b from-[#ffffff] to-blue-50 lg:w-2/3">
        <DialogHeader>
          <DialogTitle className="mb-4">Oefening 1</DialogTitle>
          <h3 className="mb-4">
            Hier komt een korte samenvatting van een veel langer verhaal.
          </h3>
          <DialogDescription className="flex flex-col gap-2">
            <p>
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
            </p>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin interdum sagittis auctor. Morbi
              lacinia massa et quam tincidunt dignissim. Donec lobortis erat at
              tempus luctus. Nam ullamcorper finibus euismod. Proin imperdiet
              maximus dui, ut ullamcorper erat porta a. Fusce vestibulum ante
              cursus purus luctus laoreet. Integer sodales diam cursus lectus
              viverra, tempus congue ligula pharetra. Duis id pretium diam, in
              varius arcu.
            </p>
            <p>
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
            </p>
            <p>
              Sed vehicula, tellus ac elementum ultricies, libero sem eleifend
              ex, viverra pretium felis enim ac lacus. Integer eu nulla justo.
              Sed quis tempus orci. Sed in accumsan mauris. Suspendisse placerat
              tortor ac nulla dictum, sed euismod sapien egestas. Aenean
              pharetra, dui ut maximus efficitur, nisi magna malesuada purus, et
              mollis lectus mi ut lacus. Morbi quis orci ullamcorper, vehicula
              ex mattis, porta quam. Mauris euismod, arcu eu vehicula efficitur,
              ipsum lectus mattis tellus, eget tincidunt enim sapien id metus.
              Duis neque elit, dictum at fermentum at, porta et risus. Nullam
              dui erat, porta ut mauris a, rutrum consectetur ex. Sed porta,
              elit ac ornare cursus, sem urna tincidunt purus, sed ultricies
              lorem enim ac sem.
            </p>
            <p>
              Duis egestas tellus ut euismod luctus. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Donec finibus vehicula neque, euismod auctor leo
              vehicula dictum. Sed quis convallis lorem, consequat pellentesque
              tellus. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Ut condimentum
              pellentesque arcu scelerisque malesuada. Donec in lacus sodales,
              tincidunt odio fermentum, pretium orci. Donec vulputate, lorem non
              vestibulum consequat, diam quam hendrerit est, quis ultrices leo
              quam ac ipsum. Aenean egestas eu nunc non scelerisque. Nullam
              commodo leo sit amet augue rutrum, facilisis elementum urna
              elementum. Sed eu scelerisque lectus.
            </p>
            <p>
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
            </p>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin interdum sagittis auctor. Morbi
              lacinia massa et quam tincidunt dignissim. Donec lobortis erat at
              tempus luctus. Nam ullamcorper finibus euismod. Proin imperdiet
              maximus dui, ut ullamcorper erat porta a. Fusce vestibulum ante
              cursus purus luctus laoreet. Integer sodales diam cursus lectus
              viverra, tempus congue ligula pharetra. Duis id pretium diam, in
              varius arcu.
            </p>
            <p>
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
            </p>
            <p>
              Sed vehicula, tellus ac elementum ultricies, libero sem eleifend
              ex, viverra pretium felis enim ac lacus. Integer eu nulla justo.
              Sed quis tempus orci. Sed in accumsan mauris. Suspendisse placerat
              tortor ac nulla dictum, sed euismod sapien egestas. Aenean
              pharetra, dui ut maximus efficitur, nisi magna malesuada purus, et
              mollis lectus mi ut lacus. Morbi quis orci ullamcorper, vehicula
              ex mattis, porta quam. Mauris euismod, arcu eu vehicula efficitur,
              ipsum lectus mattis tellus, eget tincidunt enim sapien id metus.
              Duis neque elit, dictum at fermentum at, porta et risus. Nullam
              dui erat, porta ut mauris a, rutrum consectetur ex. Sed porta,
              elit ac ornare cursus, sem urna tincidunt purus, sed ultricies
              lorem enim ac sem.
            </p>
            <p>
              Duis egestas tellus ut euismod luctus. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Donec finibus vehicula neque, euismod auctor leo
              vehicula dictum. Sed quis convallis lorem, consequat pellentesque
              tellus. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Ut condimentum
              pellentesque arcu scelerisque malesuada. Donec in lacus sodales,
              tincidunt odio fermentum, pretium orci. Donec vulputate, lorem non
              vestibulum consequat, diam quam hendrerit est, quis ultrices leo
              quam ac ipsum. Aenean egestas eu nunc non scelerisque. Nullam
              commodo leo sit amet augue rutrum, facilisis elementum urna
              elementum. Sed eu scelerisque lectus.
            </p>
            <p>
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
            </p>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin interdum sagittis auctor. Morbi
              lacinia massa et quam tincidunt dignissim. Donec lobortis erat at
              tempus luctus. Nam ullamcorper finibus euismod. Proin imperdiet
              maximus dui, ut ullamcorper erat porta a. Fusce vestibulum ante
              cursus purus luctus laoreet. Integer sodales diam cursus lectus
              viverra, tempus congue ligula pharetra. Duis id pretium diam, in
              varius arcu.
            </p>
            <p>
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
            </p>
            <p>
              Sed vehicula, tellus ac elementum ultricies, libero sem eleifend
              ex, viverra pretium felis enim ac lacus. Integer eu nulla justo.
              Sed quis tempus orci. Sed in accumsan mauris. Suspendisse placerat
              tortor ac nulla dictum, sed euismod sapien egestas. Aenean
              pharetra, dui ut maximus efficitur, nisi magna malesuada purus, et
              mollis lectus mi ut lacus. Morbi quis orci ullamcorper, vehicula
              ex mattis, porta quam. Mauris euismod, arcu eu vehicula efficitur,
              ipsum lectus mattis tellus, eget tincidunt enim sapien id metus.
              Duis neque elit, dictum at fermentum at, porta et risus. Nullam
              dui erat, porta ut mauris a, rutrum consectetur ex. Sed porta,
              elit ac ornare cursus, sem urna tincidunt purus, sed ultricies
              lorem enim ac sem.
            </p>
            <p>
              Duis egestas tellus ut euismod luctus. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Donec finibus vehicula neque, euismod auctor leo
              vehicula dictum. Sed quis convallis lorem, consequat pellentesque
              tellus. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Ut condimentum
              pellentesque arcu scelerisque malesuada. Donec in lacus sodales,
              tincidunt odio fermentum, pretium orci. Donec vulputate, lorem non
              vestibulum consequat, diam quam hendrerit est, quis ultrices leo
              quam ac ipsum. Aenean egestas eu nunc non scelerisque. Nullam
              commodo leo sit amet augue rutrum, facilisis elementum urna
              elementum. Sed eu scelerisque lectus.
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
