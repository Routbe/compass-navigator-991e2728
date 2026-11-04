# Repository import

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
- [x] Refine code-drawn Wallet artwork and collect secrets securely: renewed hero, image module, brand seal and trust strip; six PNGs decoded on desktop/phone without overflow or browser errors; 19 Wallet tests passed. Removed unsubstantiated certification claims from generic artwork.
- Additional homepage motion refinements, visitor-metric dashboard widgets and richer profile-widget resizing are not implemented in this milestone.
- Info/dev/safety article translations and full press-root localization are outside the completed About/Wallet/previews translation set.
