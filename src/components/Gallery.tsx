import { photos } from "@/data/photos";
import ProjectCard from "./ProjectCard";

function Grid({ clone = false }: { clone?: boolean }) {
  return (
    <div className="grid">
      {photos.map((photo, i) => (
        <ProjectCard key={photo.slug} photo={photo} index={i} clone={clone} />
      ))}
    </div>
  );
}

/**
 * Scroll infini « seamless » : la grille est suivie d'une copie tronquée à la
 * hauteur exacte de l'écran. Quand Lenis atteint la fin (limit = hauteur de la
 * grille), la vue affiche la copie, identique au haut de page : le retour à 0
 * est invisible.
 */
export default function Gallery() {
  return (
    <main className="gallery">
      <h1 className="sr-only">Jérémy Gross — Photographe</h1>
      <Grid />
      <div className="loop-clone" aria-hidden="true" inert>
        <Grid clone />
      </div>
    </main>
  );
}
