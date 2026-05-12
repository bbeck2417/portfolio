export const getAssetPath = (path: string): string => {
  // We've reverted to using Next.js native basePath.
  // Next.js handles prefixing for next/image and next/link automatically 
  // ONLY if basePath is set in next.config.ts and the strings are absolute.
  
  // For static exports, it's safest to return the path as-is if it's already absolute,
  // or let Next.js handle it. 
  return path;
};
