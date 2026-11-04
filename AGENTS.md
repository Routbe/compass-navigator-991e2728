<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Repository import boundaries
- Preserve imported ROUT routes, styling, MDX catalog and cookie-based adapters because this is a source import, not a recreation of GitHub.
- Keep database scripts and the standalone worker as source only until separately configured because importing code does not authorize live-data changes or service deployments.
- Never import source credentials, project identity or generated route trees because those belong to the destination project.
- Subdirectories have their own AGENTS.md; read them before changing files there.

## Public documentation and editing
- Homepage profile examples use isolated local dialog state and never call booking or payment services. Why: interactive previews must not create transactions or collect personal data.
- Favicon variants, including the bare /favicon.ico fallback, derive from the canonical ROUT vector. Why: standalone-image browser tabs do not read the application head.
- Localized MDX articles use locale-suffixed siblings and one canonical catalogue entry; loaders resolve localized head metadata. Why: translation must not duplicate navigation or sitemap paths.
- Public profile layout options and bounded component dimensions pass through the existing normalized design-layer payload and draft publishing flow; widget theme overrides form a separate cascade from links. Why: sizing and styling must preserve privacy, usability and revision checks.
- Command Center layout is a user-scoped browser preference with allowlisted widgets and bounded dimensions. Why: layout customization must not widen access to account metrics.
- Private dashboard integrations use owner-authenticated functions, fixed weather-provider endpoints and the existing sealed Spotify connection; unsupported providers expose no device controls. Why: public profiles must never inherit private device or health access.
