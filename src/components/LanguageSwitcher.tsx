'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (locale: string) => {
    // Replace the current locale in the pathname with the new one
    const segments = pathname.split('/');
    segments[1] = locale; // Replace the locale segment
    const newPath = segments.join('/');
    router.push(newPath);
  };

  const currentLocale = pathname.split('/')[1];

  return (
    <div className="language-switcher">
      <button
        onClick={() => switchLanguage('pt-BR')}
        className={`flag-button flex items-center justify-center text-white font-bold ${
          currentLocale === 'pt-BR' 
            ? 'bg-green-600 ring-2 ring-green-300' 
            : 'bg-green-500 hover:bg-green-600'
        }`}
        title="Português (Brasil)"
      >
        🇧🇷
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className={`flag-button flex items-center justify-center text-white font-bold ${
          currentLocale === 'en' 
            ? 'bg-blue-600 ring-2 ring-blue-300' 
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
        title="English"
      >
        🇺🇸
      </button>
    </div>
  );
}
