# Order Tracking Screen

A mobile-first order tracking screen for an e-commerce app, built with Next.js, React, and Tailwind CSS.

## Features

- Clear delivery timeline from Processing to Delivered
- Current order status and estimated delivery time
- Product and order details
- Contact Support and Report an Issue actions
- Loading and error states
- Supports four order situations:
  - On Time
  - Delayed
  - Delivered but Not Received
  - Tracking Not Available Yet
- Responsive design for mobile screens (360px–430px)

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- Lucide React

The project uses mock data, so no backend or environment variables are required.

## Run Locally

```bash
npm install
npm run dev

Open http://localhost:3000 in your browser.

For a production build:

npm run build
npm run start
Project Structure
app/            # Pages and global styles
components/     # Order tracking UI components
data/           # Mock order data
Deployment

The project can be deployed directly to Vercel. Connect the GitHub repository to Vercel and use the default Next.js settings.
