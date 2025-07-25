// Utility function to handle image paths for GitHub Pages deployment
export function getImagePath(path: string): string {
	// Remove leading slash if present
	const cleanPath = path.startsWith('/') ? path.slice(1) : path;

	// Only add base path when explicitly configured (for GitHub Pages subdirectory)
	if (process.env.USE_BASE_PATH === 'true') {
		return `/mib-website/${cleanPath}`;
	}

	// For custom domain or development, use the original path
	return `/${cleanPath}`;
}
