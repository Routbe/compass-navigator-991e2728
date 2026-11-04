# Repository import

## Complete sitemap request
- [x] Audit public route sources and documentation catalogue; add 16 missing tools/information pages. Coverage test includes every static indexable About/Info/content route and rejects unclassified additions; private, redirect-only, token and empty query-payload pages remain excluded.
- [x] Audit all lastmod sources: retain article frontmatter and profile/calendar row timestamps; no current/build/generation dates added and no workspace creation fallback. Replace arbitrary 45,000-row truncation with stable keyset reads; fail with uncached 503 rather than exceed XML limits. Align calendar member exclusions, require a renderable active booking type, and preserve alias/stealth privacy.
- [x] Fix the actually served public robots.txt while preserving crawler blocks and matching existing private-path exclusions. Local four-part index/XML verified: 128 static URLs, 12 real public profiles, zero currently eligible workspaces/calendars; 14 tests passed and preview compilation OK. No live-data writes or production deployment performed; growth beyond 50,000 rows requires additional shards rather than silent omission.

## Current artwork and homepage request
- [x] Replace the confirmed Lovable /favicon.ico with official ROUT SVG/PNG/ICO variants and version app-head icons; bare fallback returns ROUT for standalone images. Production rout.be still needs deployment; existing browser caches cannot be remotely erased.
- [x] Refine engraved brand seal; regenerate seven public Wallet PNGs with actual rendered Inter text, including missing logo-shield.png; add it to press downloads. Query-style hero compatibility redirects public handles to the existing privacy-checked renderer; live member issuance remains blocked below.
- [x] Edit the scan photograph without changing composition, align the phone view and composite the same official-logo QR onto both surfaces. Decoder confirms https://rout.be/info/payment-pages in the final photograph.
- [x] Add NL/EN/FR/DE website, appointment and creator-support demos, including time choices, contribution amounts, monthly/one-off and coffee/card/bank options. Desktop/mobile flows passed with no overflow or runtime errors; 20 focused tests passed, including no-network transaction safeguards.

- [x] Inspect archive and preserve platform metadata.
- [x] Import ROUT application source, assets and service scripts without credentials.
- [x] Install dependencies and check public desktop/phone menus, all homepage chapters and scroll flow.
- [x] Import checks completed; documentation ordering assertion now passes. Latest focused suite: 26 tests passed; preview compilation OK.
- [ ] Account, QR Studio, payment and storage checks blocked by missing original service configuration.

## Requested ROUT improvements
- [x] Connect Neon and inspect restricted role without changing live data: rout_app is assumable, cannot bypass RLS/create roles/create databases, and owns no app tables. Dedicated least-privilege connection remains preferable to an owner login.
- [x] Verify public Wallet PNG dimensions and downloads; localized Wallet and preview pages support four languages.
- [ ] Google Wallet issuer ID and service-account JSON are securely saved; live issuance still awaits authenticated owner verification and a published, reachable artwork origin. No issued pass tested.
- [x] Audit About structure and add EN/FR/DE versions of all ten About articles; verify localized browser and SSR metadata. Redirected About entries point to existing Info pages.
- [x] Restore full homepage card framing; desktop and phone screenshots show the whole card. Existing globe animation retained.
- [x] Add bounded Command Center order, width, height and visibility controls for existing widgets; preferences are device-local, not cross-device.
- [x] Add Layer Studio identity ordering, namespace handle labels, link display modes and a Widgets content group; existing block-size and widget-radius safeguards retained.
- [ ] Authenticated Command Center/Studio save-and-publish verification awaits session-signing configuration and an authorized test session. No real-account result claimed.
- [x] Review briefs and referenced projects for licensed patterns without executing their code; no copyleft reference source copied.

## Remaining scope
- [x] Extend Command Center catalogue with private Spotify status, manual-city weather, real owner visitor metrics and Coming soon tiles for smart-home/fitness/smart integrations; hidden widgets do not mount or fetch. Playback control is not implemented: current Spotify grant is read-only.
- [x] Rename Componenten & Typografie, add Widgets scope, clamp pill styles for widgets, and add bounded width/height controls in content and layers. Questions/board/badges use movable section blocks; 40 focused rule tests pass.
- [x] Confirm live https://rout.be/sitemap.xml is a valid four-part sitemap index; .xm is a typo. Existing page-specific lastmod sources retained; Wallet/previews added to local static sitemap and XML verified. These additions are not deployed to rout.be.
- [x] Refine code-drawn Wallet artwork and collect secrets securely: renewed hero, image module, brand seal and trust strip; six PNGs decoded on desktop/phone without overflow or browser errors; 19 Wallet tests passed. Removed unsubstantiated certification claims from generic artwork.
- Additional homepage motion refinements remain outside this milestone.
- [ ] Real-account widget reads, weather submission and Studio publish checks await session-signing settings and an authorized test session. No authenticated end-to-end result claimed.
- Info/dev/safety article translations and full press-root localization are outside the completed About/Wallet/previews translation set.

## Studio/profiel UI-perfectie (nov 2026)
- [ ] Studio-tabs mogen nooit overlappen (alle talen): scrollbare balk, vaste knopbreedte.
- [ ] Indicator van keuzebalken direct maar vloeiend (snelle spring).
- [ ] Plak-een-link veld: ronde actieknop i.p.v. vierkant in kader.
- [ ] Homepage QR Studio-voorbeeld: kleiner, geen wit vlak.
- [ ] Docs-zoekbalk en instellingentabbar: zwevende afgeronde balk i.p.v. rand-tot-rand.
- [ ] Profielmenu: workspacelijst inline uitklappen i.p.v. zwevend subkader (kader-in-kader).
- [ ] Studio > Inhoud: aparte Widgets-map; Inbox/Prikbord/Badges altijd zichtbaar met schakelaar.
- [ ] Profielweergave: fallback-widgets (inbox, prikbord, badges, bereik, YouTube) onder het blokkenraster, nooit boven bio/links.
- [ ] Lagen-studio: consistente kaartstijl, duidelijkere groepen en uitleg.
