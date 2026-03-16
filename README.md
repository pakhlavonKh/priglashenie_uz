# Nikaah Studio — Digital Invitation Platform

Beautiful, ready-to-use digital invitation website templates for your special occasions.

## Technologies

This project is built with:

- **Vite** - Next-generation frontend tooling
- **TypeScript** - Typed JavaScript
- **React** - UI library
- **shadcn-ui** - Component library
- **Tailwind CSS** - Utility-first CSS
- **React Router** - Navigation
- **React Hook Form** - Form state management
- **TanStack Query** - Server state management
- **Recharts** - Data visualization

## Getting Started

### Prerequisites

- Node.js 16+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- npm or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd priglashenie.uz

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Project Structure

```
src/
├── components/     - React components
├── pages/         - Page components
├── hooks/         - Custom React hooks
├── lib/           - Utility functions
├── data/          - Static data
└── test/          - Test files
```

## Deployment

To deploy this project:

1. Build the project: `npm run build`
2. The output will be in the `dist` folder
3. Deploy to your hosting platform (Netlify, Vercel, GitHub Pages, etc.)
