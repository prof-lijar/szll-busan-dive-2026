# SZLL Team Page

A simple team webpage for SZLL, built with Next.js, TypeScript, and Tailwind CSS.

## Requirements

- Node.js 20 or newer
- pnpm

If pnpm is not installed:

```bash
npm install -g pnpm
```

## Setup

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm run dev
```

Open the local URL shown in the terminal. It is usually:

```text
http://localhost:3000
```

If port `3000` is already being used, Next.js may choose another port such as `3001` or `3002`.

## Useful Commands

Run the local development server:

```bash
pnpm run dev
```

Check TypeScript:

```bash
pnpm typecheck
```

Create a production build:

```bash
pnpm build
```

Run the production build after building:

```bash
pnpm start
```

## Project Structure

```text
app/
  globals.css      Global styles and Tailwind CSS layers
  layout.tsx       Page shell and metadata
  page.tsx         Main SZLL webpage
tailwind.config.ts Tailwind theme colors, fonts, and animations
team-info.md       Internal team notes used as source material
PLAN.md            Planning notes for the page
```

## How To Contribute

Most webpage edits happen in:

```text
app/page.tsx
```

Style tokens and custom colors are in:

```text
tailwind.config.ts
app/globals.css
```

Before sharing your changes, run:

```bash
pnpm typecheck
pnpm build
```

## Content Notes

- Do not add private personal information such as birth years or phone numbers.
- Keep the team name as `SZLL`.
- The hero focuses on the interactive `SZLL` letters and the short slogan.
- The page should stay focused on team members, team building, and organizer-friendly clarity.

## Git Workflow

Check what changed:

```bash
git status
git diff
```

Commit only the files related to your change.
