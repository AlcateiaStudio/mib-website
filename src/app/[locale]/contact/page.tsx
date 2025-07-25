import { getTranslations, normalizeLocale } from '../../../lib/i18n';
import ContentLayout from '../../../components/ContentLayout';

interface Props {
	params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: Props) {
	const { locale: rawLocale } = await params;
	const locale = normalizeLocale(rawLocale);

	// Load translations
	const t = await getTranslations(locale);

	return (
		<ContentLayout translations={t} locale={locale}>
			<div className="space-y-16">
				{/* Page Header */}
				<div className="text-center space-y-6">
					<h1 className="heading-crayon">
						{t.pages.contact.title}
					</h1>
					<p className="text-2xl md:text-3xl font-bold text-gray-800 max-w-3xl mx-auto">
						{locale === 'en'
							? "Let's create something amazing together!"
							: 'Vamos criar algo incrível juntos!'
						}
					</p>
				</div>

				{/* Contact Emails */}
				<div className="max-w-4xl mx-auto">
					<div className="grid md:grid-cols-2 gap-8">
						{/* General Contact */}
						<div className="content-card text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
							<div className="space-y-4">
								<div className="text-5xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 cursor-pointer">
									🦋
								</div>
								<h2 className="text-xl md:text-2xl font-bold text-gray-800">
									{locale === 'en' ? 'Say Hello!' : 'Diga Olá!'}
								</h2>
								<p className="text-sm md:text-base text-gray-600">
									{locale === 'en' ? 'Send us some insect pics!' : 'Nos mande fotos de insetos!'}
								</p>
								<a
									href="mailto:hello@madeinbugs.com.br"
									className="inline-block text-lg md:text-xl font-semibold text-purple-600 hover:text-purple-800 transition-colors duration-200 hover:scale-105 transform"
								>
									hello@madeinbugs.com.br
								</a>
							</div>
						</div>

						{/* Work/Jobs Contact */}
						<div className="content-card text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
							<div className="space-y-4">
								<div className="text-5xl group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300 cursor-pointer">
									🐞
								</div>
								<h2 className="text-xl md:text-2xl font-bold text-gray-800">
									{locale === 'en' ? 'Work With Us!' : 'Trabalhe Conosco!'}
								</h2>
								<p className="text-sm md:text-base text-gray-600">
									{locale === 'en' ? 'Ready to make some bugs... I mean, games?' : 'Hora de fazer alguns bugs... digo, jogos?'}
								</p>
								<a
									href="mailto:work@madeinbugs.com.br"
									className="inline-block text-lg md:text-xl font-semibold text-green-600 hover:text-green-800 transition-colors duration-200 hover:scale-105 transform"
								>
									work@madeinbugs.com.br
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Social Media */}
				<div className="max-w-2xl mx-auto text-center space-y-8">
					<h2 className="text-2xl md:text-3xl font-bold text-gray-800">
						{locale === 'en' ? 'Follow our Tracks!' : 'Siga nossas Pegadas!'}
					</h2>

					<div className="flex justify-center space-x-8">
						{/* LinkedIn */}
						<a
							href="#"
							className="group w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
							title="LinkedIn"
						>
							<svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
							</svg>
						</a>

						{/* Instagram */}
						<a
							href="#"
							className="group w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
							title="Instagram"
						>
							<svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
							</svg>
						</a>

						{/* Linktree */}
						<a
							href="#"
							className="group w-16 h-16 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
							title="Linktree"
						>
							<svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
								<path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.162.08.325.162.486.162.162.324.162.486.162.162 0 .324-.08.486-.162.08-.161.162-.324.162-.486 0-.162-.08-.323-.162-.486-.162-.08-.324-.162-.486-.162-.162 0-.324.08-.486.162zm8.104 0c-.08.163-.08.324-.08.486.08.162.08.325.162.486.162.162.324.162.486.162.162 0 .324-.08.486-.162.08-.161.162-.324.162-.486 0-.162-.08-.323-.162-.486-.162-.08-.324-.162-.486-.162-.162 0-.324.08-.486.162zM12 13.633c-.486 0-.973-.162-1.297-.486l-4.864-4.864c-.324-.324-.324-.891 0-1.297.324-.324.972-.324 1.297 0l4.864 4.864 4.864-4.864c.324-.324.972-.324 1.297 0 .324.406.324.973 0 1.297l-4.864 4.864c-.324.324-.811.486-1.297.486z" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</ContentLayout>
	);
}
