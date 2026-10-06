import type { StaticImageData } from "next/image";

import porscheGtr from "@/assets/photos/porsche-gtr.webp";
import rue from "@/assets/photos/rue.webp";
import bugattiChiron from "@/assets/photos/bugatti-chiron.webp";
import porscheGtr2 from "@/assets/photos/porsche-gtr-2.webp";
import tour from "@/assets/photos/tour.webp";
import bmwZ3 from "@/assets/photos/bmw-z3.webp";
import porsches from "@/assets/photos/porsches.webp";
import coucherDeSoleil from "@/assets/photos/coucher-de-soleil.webp";
import chapelle from "@/assets/photos/chapelle.webp";
import porscheGt3Rs from "@/assets/photos/porsche-gt3-rs.webp";
import porsche964 from "@/assets/photos/porsche-964.webp";
import dodgeViperGts from "@/assets/photos/dodge-viper-gts.webp";
import porsche993Gt2Evo from "@/assets/photos/porsche-993-gt2-evo.webp";
import lamborghiniDiablo from "@/assets/photos/lamborghini-diablo.webp";
import feuilles from "@/assets/photos/feuilles.webp";
import porsche918 from "@/assets/photos/porsche-918.webp";
import meduse from "@/assets/photos/meduse.webp";
import porsche917 from "@/assets/photos/porsche-917.webp";
import porsche9345 from "@/assets/photos/porsche-934-5.webp";
import renault5Turbo from "@/assets/photos/renault-5-turbo.webp";

export type Photo = {
  slug: string;
  title: string;
  year: string;
  image: StaticImageData;
};

export const photos: Photo[] = [
  { slug: "porsche-gtr", title: "Porsche GTR", year: "2026", image: porscheGtr },
  { slug: "rue", title: "Rue", year: "2026", image: rue },
  { slug: "bugatti-chiron", title: "Bugatti Chiron", year: "2026", image: bugattiChiron },
  { slug: "porsche-gtr-2", title: "Porsche GTR", year: "2026", image: porscheGtr2 },
  { slug: "tour", title: "Tour", year: "2026", image: tour },
  { slug: "bmw-z3", title: "BMW Z3", year: "2026", image: bmwZ3 },
  { slug: "porsches", title: "Porsches", year: "2025", image: porsches },
  { slug: "coucher-de-soleil", title: "Coucher de soleil", year: "2025", image: coucherDeSoleil },
  { slug: "chapelle", title: "Chapelle", year: "2026", image: chapelle },
  { slug: "porsche-gt3-rs", title: "Porsche GT3 RS", year: "2026", image: porscheGt3Rs },
  { slug: "porsche-964", title: "Porsche 964", year: "2025", image: porsche964 },
  { slug: "dodge-viper-gts", title: "Dodge Viper GTS", year: "2025", image: dodgeViperGts },
  { slug: "porsche-993-gt2-evo", title: "Porsche 993 GT2 Evo", year: "2025", image: porsche993Gt2Evo },
  { slug: "lamborghini-diablo", title: "Lamborghini Diablo", year: "2026", image: lamborghiniDiablo },
  { slug: "feuilles", title: "Feuilles", year: "2025", image: feuilles },
  { slug: "porsche-918", title: "Porsche 918", year: "2026", image: porsche918 },
  { slug: "meduse", title: "Méduse", year: "2025", image: meduse },
  { slug: "porsche-917", title: "Porsche 917", year: "2026", image: porsche917 },
  { slug: "porsche-934-5", title: "Porsche 934/5", year: "2026", image: porsche9345 },
  { slug: "renault-5-turbo", title: "Renault 5 Turbo", year: "2025", image: renault5Turbo },
];
