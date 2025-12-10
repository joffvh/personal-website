export function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Person',
                '@id': 'https://www.jenoffvanhulle.com/#person',
                name: 'Jenoff Van Hulle',
                jobTitle: 'Technical Marketer & AI Engineer',
                url: 'https://www.jenoffvanhulle.com',
                sameAs: [
                    'https://www.linkedin.com/in/jenoffvanhulle/',
                    'https://github.com/joffvh',
                ],
                image: 'https://www.jenoffvanhulle.com/header-image.jpg',
                description:
                    'Jenoff bridges the gap between Digital Marketing and AI Engineering, helping organizations organize their digital marketing smarter.',
            },
            {
                '@type': 'WebSite',
                '@id': 'https://www.jenoffvanhulle.com/#website',
                url: 'https://www.jenoffvanhulle.com',
                name: 'Jenoff Van Hulle',
                description: 'Portfolio and services of Jenoff Van Hulle.',
                publisher: {
                    '@id': 'https://www.jenoffvanhulle.com/#person',
                },
            },
        ],
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}
