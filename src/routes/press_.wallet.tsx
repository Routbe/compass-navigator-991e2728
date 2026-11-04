import { createFileRoute } from "@tanstack/react-router";
import { canonicalLink, SITE_ORIGIN } from "@/lib/site";
import { PressFileGrid, PressSubpage, type PressFile } from "@/components/press/PressSubpage";

const TITLE = "Google Wallet-beelden | ROUT perskit";
const DESCRIPTION = "Officiële ROUT-beelden voor Google Wallet: logo 660×660, breed logo 1280×400, hero 1032×336 en afbeeldingsmodules, in code getekend uit het echte ROUT-logo.";

const FILES: PressFile[] = [
  { name: "Logo", size: "660 × 660", ratio: "1", use: "Google Wallet-console → Logo. Wordt rond bijgesneden; het konijn blijft binnen de ringen.", href: "/assets/wallet/rout-logo.png" },
  { name: "Breed logo", size: "1280 × 400", ratio: "3.2", use: "Console → Wide logo. Vervangt het ronde logo bovenaan de pas.", href: "/assets/wallet/rout-wide-logo.png" },
  { name: "Hero-afbeelding (klasse)", size: "1032 × 336", ratio: "3.07", use: "Console → Hero image. Algemene kaart zonder persoonsgegevens; elk lid krijgt automatisch een eigen hero in zijn profielkleur.", href: "/assets/wallet/rout-hero.png" },
  { name: "Module: ROUT Card", size: "1860 × 620", ratio: "3", use: "Console → Image modules. Legt de drie scanlagen van de kaart uit.", href: "/assets/wallet/rout-card-module.png" },
  { name: "Module: Trust array", size: "2064 × 672", ratio: "3.07", use: "Console → Image modules. Vertrouwensbalk onderaan de pas.", href: "/assets/wallet/compliance-array.png" },
  { name: "Soeverein zegel", size: "660 × 660", ratio: "1", use: "Alternatief vierkant beeld voor modules of de uitgeversaccount.", href: "/assets/wallet/sovereign-seal-pbr.png" },
];

export const Route = createFileRoute("/press_/wallet")({
  head: () => ({
    meta: [{ title: TITLE }, { name: "description", content: DESCRIPTION }, { property: "og:title", content: TITLE }, { property: "og:description", content: DESCRIPTION }, { property: "og:type", content: "website" }, { property: "og:url", content: `${SITE_ORIGIN}/press/wallet` }, { name: "twitter:card", content: "summary_large_image" }],
    links: [canonicalLink("/press/wallet")],
  }),
  component: Page,
});

function Page() {
  return <PressSubpage kicker="Perskit · Google Wallet" title="Google Wallet-beelden" intro="Elk beeld is op de afmeting die Google aanbeveelt en wordt in code getekend uit het officiële ROUT-logo. Download ze en zet ze in de Google Wallet-console bij de bijhorende velden.">
    <PressFileGrid files={FILES} />
    <section className="mt-14 max-w-3xl text-sm leading-7 text-muted-foreground">
      <h2 className="font-display text-2xl text-foreground">Zo plaats je ze</h2>
      <ol className="mt-4 list-decimal space-y-2 pl-5">
        <li>Open de Google Pay & Wallet-console en kies de klasse van de ROUT-pas.</li>
        <li>Upload het logo en het brede logo; laat de achtergrondkleur leeg, want ROUT zet per lid de profielkleur.</li>
        <li>Upload de hero-afbeelding als standaard. Bij uitgifte vervangt ROUT die met de persoonlijke kaart van het lid.</li>
        <li>Voeg de ROUT Card- en trust-modules toe onder afbeeldingsmodules.</li>
      </ol>
      <p className="mt-4">Een pas kan pas toegevoegd worden zodra de uitgever-ID en het serviceaccount van Google Wallet zijn ingesteld.</p>
    </section>
  </PressSubpage>;
}
