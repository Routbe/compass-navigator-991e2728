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
