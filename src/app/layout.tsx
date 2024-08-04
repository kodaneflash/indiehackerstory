import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../styles/globals.css';

import { Analytics } from '@vercel/analytics/react';
import { Toaster } from 'sonner';

import { ContextProvider } from '../components/context-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://indiehackerstory.com/'),
  title: {
    default: 'IndieHackerStory | Discover secrets from indie-hackers to building 7-figure online businesses',
    template: '%s | IndieHackerStory',
  },
  description: 'Unlock our database of thousands of case studies to learn how indie hackers are building 7-figure online businesses.',
  openGraph: {
    title: 'IndieHackerStory - Discover secrets from indie-hackers to building 7-figure online businesses',
    description: 'Unlock our database of thousands of case studies to learn how indie hackers are building 7-figure online businesses.',
    url: 'https://indiehackerstory.com/',
    siteName: 'IndieHackerStory',
    locale: 'en_US',
    type: 'website',
    images: '/opengraph-image.png',
  },
  robots: {
    index: true,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IndieHackerStory',
    description: 'Unlock our database of thousands of case studies to learn how indie hackers are building 7-figure online businesses.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function () {
                  window.counterscale = {
                    q: [["set", "siteId", "catchy-starless-parmesan"], ["trackPageview"]],
                  };
                })();
              `,
          }}
        />
        <script
          id="counterscale-script"
          src="https://counterscale.hosna-qasmei.workers.dev/tracker.js"
          defer
        />
      </head>
      <body className={inter.className}>
        <ContextProvider>
          {children}
          <Toaster richColors position="top-center" />
          <Analytics />
        </ContextProvider>
      </body>
    </html>
  );
}
