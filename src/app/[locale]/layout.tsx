import '../globals.css';

const locales = ['en', 'pt-BR'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.includes(locale);
  const finalLocale = isValidLocale ? locale : 'pt-BR';

  return (
    <html lang={finalLocale}>
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
