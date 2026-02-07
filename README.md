# design.jobhunter07.com

A Next.js application with Storybook for component development and documentation.

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Run the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Storybook

This project uses [Storybook](https://storybook.js.org/) for component development and documentation.

#### Running Storybook

To start Storybook in development mode:

```bash
npm run storybook
```

Storybook will start on [http://localhost:6006](http://localhost:6006).

#### Building Storybook

To build a static version of Storybook:

```bash
npm run build-storybook
```

The built files will be in the `storybook-static` directory.

#### Deployed Storybook

The Storybook is automatically deployed to GitHub Pages on every push to the `main` branch.

- **Live URL**: [https://design.jobhunter07.com](https://design.jobhunter07.com)

The deployment is handled by a GitHub Actions workflow that:
1. Builds the Storybook static site
2. Deploys it to GitHub Pages with the custom domain configuration
3. The `public/` directory contains:
   - `CNAME` file for custom domain configuration
   - `.nojekyll` file to ensure GitHub Pages serves all files correctly

## Available Scripts

- `npm run dev` - Start Next.js development server
- `npm run build` - Build the Next.js application for production
- `npm run start` - Start the Next.js production server
- `npm run lint` - Run ESLint
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production