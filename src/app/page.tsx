import Gallery from "@/components/Gallery";
import Dock from "@/components/Dock";
import Cursor from "@/components/Cursor";
import Reveal from "@/components/Reveal";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Reveal />
      <Gallery />
      <Dock />
      {/* Flou progressif en bas de l'écran (desktop) */}
      <div className="bottom-blur" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <Cursor />
    </>
  );
}
