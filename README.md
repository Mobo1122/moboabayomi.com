# moboabayomi.com

Personal site for Mobo Abayomi. Two static pages: `/` and `/moodboard`.

## Stack

React Router 7 in **static mode** (`ssr: false` + `prerender`), Vite, Tailwind 3.
The build emits plain HTML/CSS/JS to `build/client` — there is no server and no
database. Deployed as a static site.

| | |
|---|---|
| `app/root.tsx` | HTML shell, fonts, header/footer wrapper, error boundary |
| `app/routes/home.jsx` | Homepage — hero, experience, projects, moodboard preview, contact |
| `app/routes/moodboard.jsx` | Full moodboard page |
| `app/components/SiteChrome.jsx` | Header + footer |
| `app/components/InstagramGrid.jsx` | Elfsight-hosted Instagram feed for @notmobo |

Page content (experience, projects) lives in plain arrays at the top of
`app/routes/home.jsx` — edit those to update the site.

## Develop

```bash
npm install
npm run dev      # http://localhost:4000
npm run build    # -> build/client
```

## History

This replaces a [create.xyz](https://create.xyz) export, which is preserved
untracked at `apps/` for reference. That version shipped a ~1.3 MB HTML shell
that rendered entirely in the browser, so crawlers and link previews saw only
the word "Homepage". The rewrite prerenders real HTML (~20 KB) with per-page
titles, descriptions and Open Graph tags.
