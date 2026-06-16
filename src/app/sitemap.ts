import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogData';
import { projects } from '@/data/workData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.wictronix.in';
  
  // Static Routes
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/work',
    '/insights',
    '/services',
    '/services/consulting',
    '/services/marketing',
    '/services/technology',
    '/disclaimer',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Work Routes
  const workRoutes = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Insights Routes
  const insightRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...workRoutes, ...insightRoutes];
}
