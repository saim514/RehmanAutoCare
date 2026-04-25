# Rehman Auto Care — Site Overview

## What this is
Marketing and booking website for **Rehman Auto Care**, a mobile car detailing business based in Levittown, NY. Customers find services and prices, then book via Instagram DM.

## Tech stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v3 with custom brand colors
- **Deployment**: Render.com (standalone output, see `next.config.ts`)
- **No database, no auth, no forms** — booking is handled entirely via Instagram

## Brand
- **Colors**: Dark navy (`#071526`), bright blue accent (`#1a8cff`), white text
- **Instagram**: @rehmanautocare
- **DM link**: `https://ig.me/m/rehmanautocare`
- **Profile link**: `https://www.instagram.com/rehmanautocare/`
- **Service area**: Levittown, NY and surrounding areas

## Pages
| Route | Purpose |
|-------|---------|
| `/` | Homepage — Hero, Services, Add-Ons, Contact section |
| `/contact` | Dedicated booking page with Instagram DM CTA and quick-reference pricing |

## Services & Pricing (from price list flyer)
| Package | Price |
|---------|-------|
| Exterior Detail | $60–80 |
| Interior Detail | $70–100 |
| Full Detail (most popular) | $160–180 |
| Deep Detail | $180–220 |

**Add-ons**
- Heavy stain removal: +$20–50
- Pet hair removal: +$30
- Extra dirty fee: +$20–50
- Express maintenance wash: +$60 (returning clients only)

All prices vary based on vehicle size and condition.

## Component map
```
components/
  Navbar.tsx        — Sticky nav with mobile hamburger
  Hero.tsx          — Full-width hero with CTA buttons
  Services.tsx      — 4-column service cards, "Most Popular" badge on Full Detail
  AddOns.tsx        — 2-column add-on grid
  ContactSection.tsx — Instagram DM card (used on homepage)
  Footer.tsx        — Links + copyright
```

## Deployment (Render.com)
1. Connect GitHub repo to Render as a **Web Service**
2. Build command: `npm install && npm run build`
3. Start command: `node .next/standalone/server.js`
4. Environment: Node 20+

## Future booking integration
The current booking flow is Instagram DM only. When ready to add a third-party booking tool (e.g. Calendly, Square Appointments), replace the Instagram CTA in `ContactSection.tsx` and `app/contact/page.tsx` with the new embed or link. No structural changes needed — the contact page is already a dedicated route built for this purpose.

## Key decisions
- **No contact form**: reduces complexity and avoids spam; Instagram DM is the owner's preferred channel.
- **Standalone Next.js output**: required for Render.com deployment without a custom server.
- **Pricing shown as ranges**: owner confirmed prices vary by vehicle size and condition.
- **No about/testimonials section**: owner requested minimal content for now; easy to add later.
