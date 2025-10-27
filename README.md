# Cupping Room – Multipage Website (Next.js + Tailwind)

A simple, production-ready starter for your barista and coffee plantation brand. It includes a theme system, multi-page routing, and clean components.

## Tech

- Next.js App Router
- Tailwind CSS
- TypeScript
- Framer Motion
- Theme system in `src/theme.ts`

## Pages

- `/` Home – Our Story hero and features
- `/features` Our Features – informational
- `/origins` Origins – lots and tasting notes
- `/blogs` Blog index – cards that could link to posts later
- `/training` Info related to Barista training
- `/contact` Contact – form UI + visit details

## Dev

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Theming

Edit `src/theme.ts` or switch via the selector on the home page. You can add a new theme like so:

```ts
export type ThemeName = 'emerald' | 'cacao' | 'sunrise' | 'mono' | 'mybrand';
export const themes = {
  // ...
  mybrand: {
    name: 'My Brand',
    brand: 'text-[#0b7]',
    brandBg: 'bg-[#0b7]',
    brandBgHover: 'hover:bg-[#0a6]',
    pillBg: 'bg-[#e6fff7]',
    pillText: 'text-[#0b7]',
    gradFrom: 'from-[#eafff5]',
  },
};
```

Then select it in the UI.

## Notes

- Images use Unsplash remote URLs configured in `next.config.mjs`.
- The contact form is static. Hook it up to an API or service when ready.
