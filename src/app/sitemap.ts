import { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/articles'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const articles = await getAllArticles()
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jenoffvanhulle.com'

    const articleUrls = articles.map((article) => ({
        url: `${baseUrl}/articles/${article.slug}`,
        lastModified: new Date(article.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    const routes = [
        '',
        '/about',
        '/services',
        '/projects',
        '/articles',
        '/contact',
        '/tool-stack',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return [...routes, ...articleUrls]
}
