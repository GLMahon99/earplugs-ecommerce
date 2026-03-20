/**
 * Optimiza una URL de Cloudinary añadiendo los parámetros f_auto y q_auto.
 * @param {string} url - La URL original de Cloudinary.
 * @returns {string} - La URL optimizada.
 */
export const optimizeCloudinaryUrl = (url) => {
  if (!url || typeof url !== 'string' || !url.includes('cloudinary.com')) {
    return url;
  }
  
  // Si ya tiene parámetros de transformación, los mantenemos y añadimos los nuevos
  if (url.includes('/upload/')) {
    return url.replace('/upload/', '/upload/f_auto,q_auto/');
  }
  
  return url;
};
