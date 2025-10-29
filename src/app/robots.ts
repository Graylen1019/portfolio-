import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://bigelowgraylen.com/sitemap.xml',
    host: 'https://bigelowgraylen.com',
  };
}
