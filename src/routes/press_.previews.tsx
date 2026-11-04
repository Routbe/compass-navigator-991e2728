import { createFileRoute } from "@tanstack/react-router";
import { canonicalLink, SITE_ORIGIN } from "@/lib/site";
import { PressFileGrid, PressSubpage, type PressFile } from "@/components/press/PressSubpage";

const TITLE = "Deelafbeeldingen | ROUT perskit";
const DESCRIPTION = "De officiële deelkaarten (1200×630) die ROUT toont op WhatsApp, LinkedIn, Slack en X, per pagina en per taal.";

const PAGES = [["home", "Startpagina"], ["about", "Over ROUT"], ["explore", "Ontdekken"], ["press", "Perskit"], ["sovereignty", "Soevereiniteit"], ["privacy", "Privacy"]] as const;
const FILES: PressFile[] = PAGES.map(([key, name]) => ({ name, size: "1200 × 630", ratio: "1.905", use: `Deelkaart voor de pagina ${name}. Ook beschikbaar in het Engels, Frans en Duits.`, href: `/brand/og/${key}-nl.png` }));

export const Route = createFileRoute("/press_/previews")({
  head: () => ({
    meta: [{ title: TITLE }, { name: "description", content: DESCRIPTION }, { property: "og:title", content: TITLE }, { property: "og:description", content: DESCRIPTION }, { property: "og:type", content: "website" }, { property: "og:url", content: `${SITE_ORIGIN}/press/previews` }, { name: "twitter:card", content: "summary_large_image" }],
    links: [canonicalLink("/press/previews")],
  }),
  component: Page,
});

function Page() {
  return <PressSubpage kicker="Perskit · Delen" title="Deelafbeeldingen" intro="Wanneer iemand een ROUT-link deelt, tonen apps deze kaart. Ze worden in code getekend uit het officiële logo, per pagina en per taal, en wijzigen nooit willekeurig.">
    <PressFileGrid files={FILES} />
    <p className="mt-10 text-sm text-muted-foreground">Andere taal nodig? Vervang <code className="font-mono">-nl</code> in de link door <code className="font-mono">-en</code>, <code className="font-mono">-fr</code> of <code className="font-mono">-de</code>.</p>
  </PressSubpage>;
}
