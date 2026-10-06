import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Figtree } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "lenis/dist/lenis.css";
import "./globals.css";

const switzer = localFont({
  src: "../fonts/Switzer-Light.woff2",
  weight: "300",
  display: "swap",
  variable: "--font-switzer",
});

// Uniquement utilisée pour la bio (cachée au chargement) : pas de preload.
const figtree = Figtree({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-figtree",
});

const description =
  "Passionné de photographie automobile, je capture aussi bien des instants de vie urbaine que des paysages qui prennent le temps de respirer.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jeremygross.fr"),
  title: "Jérémy Gross",
  description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", title: "Jérémy Gross", description, url: "/" },
  twitter: { card: "summary_large_image", title: "Jérémy Gross", description },
};

export const viewport: Viewport = {
  themeColor: "#0e1011",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning : le script ci-dessous ajoute la classe `js` avant l'hydratation.
    <html
      lang="fr"
      className={`${switzer.variable} ${figtree.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Active les animations d'apparition seulement si le JS tourne. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
