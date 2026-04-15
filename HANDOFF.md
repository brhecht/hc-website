# HANDOFF — HC Website (humbleconviction.com)
*Last updated: April 15, 2026*

## Project Overview
The Humble Conviction website. Currently serves as the HC homepage at humbleconviction.com. Will eventually transition to Brian's personal homepage (speaking, coaching, workshops, investor background) as TNB becomes the primary brand. Not actively developed right now.

## Tech Stack
Next.js (App Router), Tailwind CSS, Vercel hosting. `/api/subscribe` endpoint for email capture.

## Folder Structure
- `src/app/page.tsx` — main homepage (HC branding, "What's Your Founder Story?" hero)
- `src/app/globals.css` — global styles
- `src/app/api/subscribe/` — email capture endpoint
- `public/images/headshot.jpg` — Brian's headshot
- `public/brian-headshot.png` — alternate headshot (used on Nico's redesign branch)

## Branches
- **`main`** — current live HC homepage. White/minimal design, two-column hero, "Pitch Better, Get Funded Faster" copy, YouTube embed, bio section, email capture. Deployed to humbleconviction.com via Vercel.
- **`nico/website-redesign`** — Nico's HC redesign prototype. Warm cream background (#FAF7F4), coral accent (#E8845A), circular photo, "Ways to Connect" cards, quiz CTA. NOT deployed to production. Preview URL: `hc-website-git-nico-website-redesign-brian-hechts-projects.vercel.app`
- **`tnb-coming-soon`** — DEPRECATED. Was the thenewbuilder.ai placeholder. TNB website has moved to its own repo (`brhecht/tnb-website`). This branch should be deleted once tnb-website is live.

## Current Status
HC homepage is live and functional but not actively being developed. The site will eventually transition to Brian's personal homepage. No immediate work planned.

## Recent Changes
None recent. Last meaningful work was the Nico redesign prototype (pre-April 2026).

## Known Bugs / Issues
None.

## Planned Features / Backlog
- Transition to Brian's personal homepage when ready (humbleconviction.com stays as Brian's personal brand)
- Delete `tnb-coming-soon` branch after tnb-website repo is live

## Design Decisions & Constraints
- HC website and TNB website are separate brands, separate repos, separate Vercel projects
- The `tnb-coming-soon` branch was a temporary shortcut. TNB now has its own repo.

## Environment & Config
- Vercel project connected to `brhecht/hc-website` main branch
- Domain: humbleconviction.com

## Open Questions / Decisions Pending
None.

## Session Log
### April 15, 2026 — Documentation created
- **What shipped:** First HANDOFF.md for this repo. Documented branch structure and the TNB separation.
- **Known issues:** None.
- **Next:** Delete tnb-coming-soon branch after tnb-website repo is live.
