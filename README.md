# Welcome to your Lovabl AI project
# AI Agent — Interactive Portfolio & Showcase
TODO: Document your project here
An interactive, modern web application showcasing AI Agent architecture, tools, and capabilities. Built with a cyberpunk-inspired design featuring animated sections, terminal chat simulation, architecture diagrams, and code previews.
##  Features
- **Hero Section** — Animated landing with scanline effects and grid background
- **Architecture Diagram** — Visual representation of the AI agent system
- **Tool Cards** — Interactive cards showcasing agent capabilities
- **Terminal Chat** — Simulated terminal-style chat interface
- **Code Preview** — Live code snippet display
- **Responsive Design** — Fully responsive across all devices
- **Dark Theme** — Cyberpunk-inspired dark UI with neon green accents
##  Tech Stack
- **React 18** + **TypeScript**
- **Vite** — Fast build tool
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth animations
- **shadcn/ui** — UI component library
- **React Router** — Client-side routing
- **TanStack React Query** — Data fetching
##  Installation
```bash
# Clone the repository
git clone <repository-url>
cd ai_agent
# Install dependencies
npm install
# Start development server
npm run dev
```
##  Available Scripts
| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests with Vitest |
##  Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/              # shadcn/ui base components
│   ├── HeroSection.tsx
│   ├── ArchitectureDiagram.tsx
│   ├── ToolCards.tsx
│   ├── TerminalChat.tsx
│   └── CodePreview.tsx
├── pages/               # Route pages
│   ├── Index.tsx
│   └── NotFound.tsx
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── index.css            # Global styles & design tokens
```
##  Design Principles
Built with **SOLID principles** — Strategy · Factory · Observer · ReAct patterns.
##  License
MIT


