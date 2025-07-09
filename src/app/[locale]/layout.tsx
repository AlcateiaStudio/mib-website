import '../globals.css';

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'pt-BR' }
  ];
}

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Made in Bugs - Indie Game Studio</title>
        <meta name="description" content="Embracing the chaotic nature of game development with perseverance and creativity." />
      </head>
      <body className="font-crayon">
        {children}
      </body>
    </html>
  );
}
