// Version utility for deployment tracking
import versionData from '../../version.json';

export interface VersionInfo {
  version: string;
  build: string;
  description: string;
}

export function getVersionInfo(): VersionInfo {
  return versionData;
}

// Log version to console for easy debugging
export function logVersionToConsole() {
  const version = getVersionInfo();
  console.group('🐛 Made in Bugs - Version Info');
  console.log(`Version: ${version.version}`);
  console.log(`Build: ${version.build}`);
  console.log(`Description: ${version.description}`);
  console.log(`Deployed at: ${new Date().toISOString()}`);
  console.groupEnd();
}
