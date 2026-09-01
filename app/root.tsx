import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
} from 'react-router';
import type { ReactNode } from 'react';

import './app.css';
import SiteChrome from './components/SiteChrome';

export const links = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap',
  },

  // Favicons: a face-crop of the homepage portrait. The .ico bundles 16+32px
  // for the many clients that request /favicon.ico by convention.
  { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
  { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png' },
  { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
  { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
];

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <SiteChrome>
      <Outlet />
    </SiteChrome>
  );
}

export function ErrorBoundary({ error }: { error: unknown }) {
  const heading = isRouteErrorResponse(error) ? `${error.status}` : 'Something went wrong';
  const detail = isRouteErrorResponse(error)
    ? error.statusText || 'That page could not be found.'
    : 'Try heading back to the homepage.';

  return (
    <main className="min-h-screen bg-[#f5f5f0] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-[clamp(3rem,12vw,10rem)] font-black leading-[0.9] tracking-tight text-black">
        {heading}
      </h1>
      <p className="mt-8 text-base text-black/50 font-light">{detail}</p>
      <a
        href="/"
        className="mt-12 px-10 py-4 bg-black text-[#f5f5f0] font-bold text-xs uppercase tracking-[0.2em] hover:opacity-80 transition-opacity"
      >
        Back to home
      </a>
    </main>
  );
}
