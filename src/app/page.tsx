import { redirect } from 'next/navigation';
import { getDefaultLocale } from '../lib/i18n';

export default function RootPage() {
  // Redirect to the default locale (pt-BR as specified in the README)
  redirect(`/${getDefaultLocale()}`);
}
