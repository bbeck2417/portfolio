export const getAssetPath = (path: string): string => {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/portfolio' : '';
  
  if (!path) return '';
  
  // If it's already an absolute URL (http/https/mailto), return it
  if (path.startsWith('http') || path.startsWith('mailto:')) {
    return path;
  }
  
  // If it already has the basePath prefix, don't add it again
  if (basePath && path.startsWith(basePath)) {
    return path;
  }
  
  // Ensure the path starts with a single slash before prepending basePath
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${cleanPath}`;
};
