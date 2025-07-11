// Global style configuration
export const globalStyles = {
	// Background colors - Enhanced orange theme
	// NOTE: These classes are added to safelist in tailwind.config.js to prevent purging
	backgroundColor: 'from-orange-50 to-amber-50', // Very strong, visible orange gradient
	solidBackgroundColor: 'bg-orange-400', // For solid backgrounds

	// You can easily change the background by updating these values:
	// Examples:
	// - Warm theme: 'from-orange-50 to-red-50' and 'bg-orange-50'
	// - Green theme: 'from-green-50 to-emerald-50' and 'bg-green-50'
	// - Neutral theme: 'from-gray-50 to-slate-50' and 'bg-gray-50'
	// - Pink theme: 'from-pink-50 to-purple-50' and 'bg-pink-50'

	// Other global styles can be added here
	primaryColor: 'blue', // For buttons, links, etc.
};
