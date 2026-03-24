# React + TypeScript + Vite + Tailwind + ShadCN/UI Project

This is a modern starter project using **React**, **TypeScript**, **Vite**, **TailwindCSS**, and **ShadCN/UI components**. It includes routing, notifications, glow effects, animations, and a 404 page.

---

## 🚀 Features

- React 18+ with `createRoot`
- TypeScript for type safety
- TailwindCSS for fast and modern styling
- ShadCN/UI for ready-made UI components
- React Router v6 for navigation
- React Query for server state management
- Notifications with **Sonner** and **Toaster**
- Glowing text, glowing boxes, and retro scanlines
- Fully set-up 404 page and catch-all routing
- Vitest for testing

---

## 🗂 Project Structure


src/
├─ App.tsx # Routing and providers (QueryClient, TooltipProvider, Toaster/Sonner)
├─ main.tsx # React entry point
├─ pages/
│ ├─ Index.tsx # Home page
│ └─ NotFound.tsx # 404 page
├─ components/ # Reusable UI components
└─ index.css # Tailwind + custom styles, animations, glow effects


---

## ⚡ Getting Started

1. Install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
Start the development server:
npm run dev
Open your browser at http://localhost:5173
🎨 Styling and Animations
CSS variables for colors:
--background, --foreground, --primary, --secondary, --accent
Glow effects:
.text-glow, .text-glow-blue
.box-glow, .box-glow-blue
Retro scanlines with .scanline
Animations:
.logo-spin for rotation
Hover drop-shadow effects
🔧 Scripts
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "test": "vitest run"
}
dev → start development server
build → production build
preview → preview production locally
test → run Vitest
📚 Code Examples
App.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import "./index.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
main.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
pages/Index.tsx
export default function Index() {
  return (
    <div className="text-glow text-4xl flex items-center justify-center h-screen">
      Welcome to the Project!
    </div>
  );
}
pages/NotFound.tsx
export default function NotFound() {
  return (
    <div className="text-red-500 text-4xl flex items-center justify-center h-screen">
      404 - Page Not Found
    </div>
  );
}
index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #0f0f0f;
  --foreground: #ffffff;
  --primary: #10b981;
  --secondary: #3b82f6;
}

.text-glow {
  text-shadow: 0 0 10px var(--primary), 0 0 20px var(--primary);
}

.text-glow-blue {
  text-shadow: 0 0 10px var(--secondary), 0 0 20px var(--secondary);
}

.box-glow {
  box-shadow: 0 0 10px var(--primary), 0 0 20px var(--primary);
}

.box-glow-blue {
  box-shadow: 0 0 10px var(--secondary), 0 0 20px var(--secondary);
}

.scanline {
  background: repeating-linear-gradient(
    0deg,
    rgba(255,255,255,0.05),
    rgba(255,255,255,0.05) 1px,
    transparent 1px,
    transparent 2px
  );
}

.logo-spin {
  transition: transform 0.5s;
}
.logo-spin:hover {
  transform: rotate(360deg);
}
✅ Testing
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Index from "../pages/Index";

describe("Index page", () => {
  it("renders welcome text", () => {
    const { getByText } = render(<Index />);
    expect(getByText("Welcome to the Project!")).toBeTruthy();
  });
});

