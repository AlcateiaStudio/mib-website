// Utility function to handle image paths for GitHub Pages deployment
export function getImagePath(path: string): string {
	// Remove leading slash if present
	const cleanPath = path.startsWith('/') ? path.slice(1) : path;

	// In production on GitHub Pages, add the repository base path
	if (process.env.NODE_ENV === 'production') {
		return `/mib-website/${cleanPath}`;
	}

	// In development, use the original path
	return `/${cleanPath}`;
}
