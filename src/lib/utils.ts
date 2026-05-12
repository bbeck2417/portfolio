export const getAssetPath = (path: string): string => {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/portfolio' : '';
  
  // Clean up the path: remove leading slash if it exists, then add one
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${cleanPath}`;
};
