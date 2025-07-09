import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Made in Bugs - Indie Game Studio',
  description: 'Made in Bugs indie game studio - Embracing the chaotic nature of game development with perseverance and creativity.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
