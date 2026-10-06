import Image from "next/image";
import type { Photo } from "@/data/photos";

// 5 colonnes ≥1200px, 3 colonnes ≥810px, 1 colonne en dessous.
const SIZES = "(max-width: 809px) 100vw, (max-width: 1199px) 34vw, 20vw";

type Props = {
  photo: Photo;
  index: number;
  /** Copie de la grille utilisée pour boucler le scroll : jamais prioritaire. */
  clone?: boolean;
};

export default function ProjectCard({ photo, index, clone = false }: Props) {
  // Les deux premières rangées desktop sont visibles au chargement.
  const aboveFold = !clone && index < 10;

  return (
    <article className="card" data-reveal={clone ? undefined : ""}>
      <div className="card-media">
        <Image
          src={photo.image}
          alt={clone ? "" : `${photo.title} — ${photo.year}`}
          fill
          sizes={SIZES}
          placeholder="blur"
          preload={!clone && index < 5}
          loading={aboveFold ? "eager" : "lazy"}
          className="card-img"
        />
        <div className="card-overlay" aria-hidden="true" />
        <div className="card-content" aria-hidden="true">
          <p className="card-title">
            {Array.from(photo.title).map((char, i) => (
              <span key={i} style={{ "--i": i } as React.CSSProperties}>
                {char === " " ? " " : char}
              </span>
            ))}
          </p>
          <p className="card-year">{photo.year}</p>
        </div>
      </div>
    </article>
  );
}
