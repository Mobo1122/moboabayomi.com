import type { Config } from '@react-router/dev/config';

export default {
  // No server: every route is rendered to static HTML at build time, so the
  // deployed site is plain files on a CDN. This is the whole point of the
  // migration — the old create.xyz build shipped an empty shell and rendered
  // everything in the browser, so crawlers and link previews saw nothing.
  ssr: false,
  prerender: ['/', '/moodboard'],
} satisfies Config;
