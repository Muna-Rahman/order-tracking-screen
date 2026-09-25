# Order Tracking Screen

A mobile-first order tracking screen for an e-commerce app, built with Next.js (App Router), React, and Tailwind CSS. Ships with static/mock data — no backend required.

## Features

- Vertical delivery timeline (Processing → Shipped → Out for Delivery → Delivered) with the current step clearly highlighted
- Status card with the current status, a plain-language description, and estimated delivery
- Order/product summary card with an expandable order-details section
- Contact Support bottom sheet (chat / call / email)
- Report an Issue bottom sheet with issue selection, optional notes, and a submit confirmation
- Loading skeleton and a fallback error state that match the rest of the screen
- One shared screen that adapts to four order scenarios via a "Preview a different order state" switcher at the top
- Responsive from 360px to 430px wide, no horizontal scroll

## Technologies used

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- lucide-react for icons

## Project structure

```
app/
  layout.js          Root layout, loads the Inter font
  page.js            Renders the OrderTracking screen
  globals.css        Tailwind directives + base styles

components/
  order-tracking/
    order-tracking.js       Main screen: state, layout, wiring
    state-switcher.js       Demo control to preview each order state
    status-banner.js        Current status card (+ delay/not-received alerts)
    order-timeline.js       Vertical delivery progress timeline
    tracking-pending.js     "Tracking not available yet" state
    order-summary.js        Product + order details card
    support-actions.js      Contact Support / Report an Issue buttons
    support-sheet.js        Contact options bottom sheet
    issue-report-sheet.js   Report-an-issue form + confirmation
    loading-skeleton.js     Skeleton shown while "fetching" order data
    error-state.js          Fallback if order data can't be found
    sheet.js                Shared bottom-sheet wrapper

data/
  orders.js           Mock data for all four order scenarios
```

## Getting started

Requires Node.js 18.18 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

No environment variables are required — the project uses static mock data only.

## The order states

The assignment requires the same screen to adapt to different order situations. Use the pill switcher at the top of the screen to preview each one; every scenario pulls from `data/orders.js` and renders through the same components — nothing is duplicated per state.

- **On Time** — the normal Processing → Shipped → Out for Delivery → Delivered flow, with the current step highlighted.
- **Delayed** — the status card and the current timeline step both call out the delay, showing the original estimate vs. the new one, without turning the whole screen red or alarming.
- **Delivered** (delivered but not received) — the status shows "Delivered", but a second alert card underneath explains the customer reported not receiving it, and the "Report an Issue" sheet pre-selects the right reason.
- **No Tracking** — instead of an empty timeline, a dedicated waiting state explains the order is confirmed and being packed, with an estimated delivery window.

## Deployment

This project was generated in an environment without outbound network access, so it hasn't been installed, built, or deployed from here. To get a live URL and a GitHub repo:

1. Push this folder to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Order tracking screen"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Deploy on [Vercel](https://vercel.com) (recommended for Next.js): import the GitHub repo and keep the default settings — build command `next build`, output is handled automatically for Next.js projects.
3. Once deployed, Vercel gives you a live URL you can submit alongside the GitHub repo link.
