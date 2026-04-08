# HANDOFF — hc-website
_Last updated: 2026-04-07 — Nico_

---

## Estado actual

**Sitio live:** humbleconviction.com (auto-deploy desde `main` vía Vercel)

**Redesign en progreso:** branch `nico/website-redesign` — PR #1 abierto, esperando aprobación.

---

## PR #1 — Website Redesign

**Branch:** `nico/website-redesign`
**PR:** https://github.com/brhecht/hc-website/pull/1

### Qué hace el PR
- Homepage completamente reescrita para coincidir con `hc-mockup.html` (el mockup aprobado)
- Foto de Brian con círculo crema y `mix-blend-mode: multiply`
- Newsletter form en el hero (solo email), conectado a Beehiiv
- Video + Ways to Connect card
- Quiz CTA card centrado
- Footer simple
- Totalmente responsive (mobile, tablet, desktop)
- Todos los emails → brian@humbleconviction.com
- Quiz button → quiz.humbleconviction.com
- Privacy policy page intacta

### Para hacer merge necesitas
1. **Agregar env vars en Vercel** (proyecto `hc-website`):
   - `BEEHIIV_API_KEY` — Beehiiv dashboard → Settings → API
   - `BEEHIIV_PUBLICATION_ID` — el `pub_xxx` de la URL del dashboard
2. **Aprobar el PR** en GitHub
3. **Merge** → Vercel auto-deploya a humbleconviction.com

---

## Arquitectura

- **Framework:** Next.js 16 (App Router)
- **Hosting:** Vercel — auto-deploy desde `main`
- **Dominio:** humbleconviction.com (DNS en GoDaddy — no tocar)
- **Newsletter:** Beehiiv vía `/api/subscribe` (env vars en Vercel)
- **Quiz:** subdominio separado en quiz.humbleconviction.com — no tocar

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Homepage |
| `/privacy` | Privacy policy |
| `/api/subscribe` | Newsletter subscribe proxy (Beehiiv) |

## Archivos clave

| Archivo | Qué es |
|---------|--------|
| `src/app/page.tsx` | Homepage |
| `src/app/globals.css` | Estilos globales + clases `hc-*` |
| `src/app/api/subscribe/route.ts` | Newsletter API (Beehiiv) |
| `src/app/privacy/page.tsx` | Privacy policy |
| `public/brian-headshot.png` | Foto de Brian |
| `hc-mockup.html` | Mockup de referencia aprobado |
| `PM-BRIEF-hc-website.md` | Brief original de Brian |

---

## Historial reciente

- **2026-04-07** — Redesign completo en `nico/website-redesign`, PR #1 abierto. Newsletter cambiado de Kit → Beehiiv.
- **2026-03-xx** — Privacy policy page agregada (Brian)
- **2026-03-xx** — Security bump Next.js 16.2.1
