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

  return (
    <html lang={locale}>
      <body className="font-crayon">
        {children}
      </body>
    </html>
  );
}
