# Testing Suite — Component Library

**Week 11:** Unit & Component Testing — Jest + React Testing Library
**Week 12:** Component-Driven Development — Storybook Design System

---

## Quick Start

```bash
npm install
npm run storybook        # Component catalogue → http://localhost:6006
npm run dev              # Next.js app         → http://localhost:3000
npm test                 # Run all 61 unit tests
npm run build-storybook  # Export for deployment
```

---

## Component Library

| Component  | Stories | Tests | Description |
|------------|---------|-------|-------------|
| Button     | 8       | 11    | 3 variants · 3 sizes · disabled · full-width |
| Input      | 6       | 11    | Label · error · helper text · disabled · required |
| Card       | 8       | 10    | Badge · footer · children slot · clickable |
| Counter    | 5       | 13    | Step · min/max · reset |
| LoginForm  | 2       | 16    | Validation · success state |

**Total: 61 unit tests · 29 Storybook stories · 100% pass rate**

---

## Project Structure

```
testing-suite/
├── .storybook/
│   ├── main.js          ← @storybook/nextjs framework + addons
│   ├── preview.js       ← Global CSS import + dark/light decorator
│   └── manager.js       ← Custom branded Storybook UI theme
├── public/              ← Required by Storybook staticDirs
├── src/
│   ├── components/      ← Button, Card, Input, Counter, LoginForm
│   ├── stories/         ← *.stories.jsx + Introduction.mdx
│   ├── __tests__/       ← Jest test files (61 tests)
│   ├── pages/           ← Next.js pages (_app.jsx, index.jsx)
│   └── styles/          ← globals.css + Home.module.css
├── __mocks__/
│   └── styleMock.js     ← CSS Module mock for Jest
├── .babelrc
├── .gitignore
├── jest.config.js
├── next.config.js
├── package.json
├── PROMPTS.md
└── README.md
```

---

## Dark / Light Mode

All components use CSS custom properties for zero-JS theming:

```css
:root               { --color-bg: #f5f3ee; --color-text: #1a1a2e; }
[data-theme="dark"] { --color-bg: #0d0d1a; --color-text: #e8e4d4; }
```


---

## Version Compatibility

| Package         | Version  | Reason |
|-----------------|----------|--------|
| `next`          | 14.2.35  | Latest patched Next.js 14. Next.js 15 breaks `@storybook/nextjs` 8.x webpack integration |
| `storybook`     | 8.4.7    | Stable, fully compatible with Next.js 14 and React 18 |
| `react`         | 18.3.1   | Required by both Next.js 14 and Storybook 8 |

---
