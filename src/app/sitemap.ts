
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.royalcabsjabalpur.com';
  const locales = ['en', 'hi', 'mr', 'gu', 'rj'];
  
  const pages = ['', '/explore', '/cars', '/contact'];
  
  const entries: MetadataRoute.Sitemap = [];

  locales.forEach(locale => {
    pages.forEach(page => {
      entries.push({
        url: `${siteUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: page === '' ? 1 : 0.8,
      });
    });
  });

  return entries;
}
