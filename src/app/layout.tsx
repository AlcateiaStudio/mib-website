import type { Metadata } from 'next';
import './globals.css';
import { getMetadataAssetPath } from '../lib/metadataPaths';
import { getVersionInfo } from '../lib/version';
import VersionLogger from '../components/VersionLogger';

const versionInfo = getVersionInfo();

export const metadata: Metadata = {
  title: 'Made in Bugs - Indie Game Studio',
  description: 'Made in Bugs indie game studio - Embracing the chaotic nature of game development with perseverance and creativity.',
  other: {
    'mib-version': versionInfo.version,
    'mib-build': versionInfo.build,
  },
  icons: {
    icon: [
      { url: getMetadataAssetPath('/favicon-16x16.png'), sizes: '16x16', type: 'image/png' },
      { url: getMetadataAssetPath('/favicon-32x32.png'), sizes: '32x32', type: 'image/png' },
      { url: getMetadataAssetPath('/favicon.ico'), sizes: 'any' }
    ],
    apple: [
      { url: getMetadataAssetPath('/apple-touch-icon.png'), sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: getMetadataAssetPath('/android-chrome-192x192.png'), sizes: '192x192', type: 'image/png' },
      { url: getMetadataAssetPath('/android-chrome-512x512.png'), sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: getMetadataAssetPath('/site.webmanifest'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Version info for debugging - check page source */}
        {/* Made in Bugs Version: {versionInfo.version} | Build: {versionInfo.build} */}
      </head>
      <body className="font-sans text-neutral-800">
        <VersionLogger />
        {children}
      </body>
    </html>
  );
}
