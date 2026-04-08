# HC Website Redesign — Instructions for Nico

## The Design
`hc-mockup.html` in this repo is the approved design. Open it in Chrome — that's what the live site should look like. Match it.

## What To Do

1. **Replace the homepage.** Tell Claude: "Replace `src/app/page.tsx` with the design from `hc-mockup.html`. Convert it to work in our Next.js codebase." Claude will handle the technical translation.

2. **Headshot image.** `Cream Background Brian.png` is in this repo root. Tell Claude to move it to `/public/brian-headshot.png` and use that instead of the embedded image in the mockup. **Important:** the image blending trick (`mix-blend-mode: multiply`, image inside the circle div) is what makes it look right. Tell Claude not to change that approach.

3. **Newsletter form.** The Subscribe button in the mockup doesn't do anything yet. Tell Claude to wire it to the existing `/api/subscribe` route. **Before deploying, ask Brian: Kit or Beehiiv?** If Kit, the existing code works as-is. If Beehiiv, tell Claude to swap the API route and Brian will give you the API keys to add in Vercel.

4. **YouTube embed** will show an error when you test locally. That's normal — it only works on the real domain. Ignore it until it's deployed.

## How To Deploy
- Push to `main` → Vercel auto-deploys to humbleconviction.com
- Domain and DNS are already set up. Don't touch anything in GoDaddy.
- If Brian says Beehiiv, add the API keys in Vercel dashboard under Settings → Environment Variables.

## Before You Call It Done
- [ ] Site loads and matches the mockup
- [ ] Headshot looks right (no white box, no broken image)
- [ ] Looks good on phone, laptop, and wide monitor
- [ ] Newsletter form actually submits
- [ ] YouTube video plays on the live site
- [ ] All email links go to brian@humbleconviction.com
- [ ] Quiz button goes to quiz.humbleconviction.com

## Don't Change
- Copy, layout, or section order (it's approved)
- DNS/GoDaddy settings
- The quiz subdomain (separate thing)
- Privacy policy page (leave it)

Questions → ask Brian.
