# LYTER Coming Soon Frontend

A beautiful coming soon page for LYTER - Revolutionary Prediction Markets with Automated Market Making.

## Features

- **Modern Design**: Beautiful gradient backgrounds and glass morphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Liquidity Provider Focus**: Detailed explanation of LP benefits and rewards
- **Interactive Elements**: Hover effects and smooth animations
- **Email Signup**: Waitlist signup functionality
- **SEO Optimized**: Proper meta tags and structured data

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
coming-soon-frontend/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main coming soon page
├── components/              # Reusable components (if needed)
├── public/                  # Static assets
├── styles/                  # Additional stylesheets
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Key Sections

### Hero Section
- Eye-catching title and subtitle
- Launch timeline indicator
- Call-to-action elements

### Features Grid
- 6 key features of the platform
- Icons and descriptions
- Hover effects for interactivity

### Liquidity Provider Benefits
- Detailed explanation of LP rewards
- Percentage-based earnings display
- Multiple reward types (fees, incentives, governance)

### How It Works
- 3-step process explanation
- Visual step indicators
- Clear progression flow

### Call-to-Action
- Email signup form
- Waitlist registration
- Social proof elements

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **Responsive Design**: Mobile-first approach

## Customization

The page is designed to be easily customizable:

1. **Colors**: Update the gradient colors in `tailwind.config.js`
2. **Content**: Modify text content in `app/page.tsx`
3. **Styling**: Adjust styles in `app/globals.css`
4. **Features**: Add/remove feature cards as needed

## Deployment

This is a static Next.js application that can be deployed to:

- Vercel (recommended)
- Netlify
- AWS S3 + CloudFront
- Any static hosting service

## License

Private - LYTER Project
