'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import type { Translations } from '../lib/i18n';

interface ContentLayoutProps {
  children: React.ReactNode;
  translations: Translations;
  locale: string;
}

export default function ContentLayout({ children, translations, locale }: ContentLayoutProps) {
  const pathname = usePathname();
  
  // Header navigation items (same as homepage navigation)
  const navItems = [
    { key: 'asumi', href: `/${locale}/asumi`, label: translations.navigation.asumi },
    { key: 'about', href: `/${locale}/about`, label: translations.navigation.about },
    { key: 'portfolio', href: `/${locale}/portfolio`, label: translations.navigation.portfolio },
    { key: 'contact', href: `/${locale}/contact`, label: translations.navigation.contact },
    { key: 'work', href: `/${locale}/work`, label: translations.navigation.work },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left side: Logo + Navigation */}
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <Link href={`/${locale}`} className="flex-shrink-0">
                <div className="w-12 h-12 relative hover:scale-105 transition-transform duration-200">
                  <Image
                    src="/assets/logo_center.png"
                    alt="Made in Bugs Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </Link>

              {/* Navigation Buttons */}
              <nav className="hidden md:flex items-center space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`
                      px-4 py-2 rounded-lg font-medium transition-all duration-200
                      ${pathname === item.href 
                        ? 'bg-blue-100 text-blue-700 shadow-sm' 
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right side: Language Switcher */}
            <div className="flex-shrink-0">
              <LanguageSwitcher translations={translations.common.language_switcher} />
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="md:hidden mt-4 flex flex-wrap gap-2">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`
                  px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${pathname === item.href 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Made in Bugs Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
