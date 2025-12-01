import portraitImage from '@/images/portrait.jpg'
import { StaticImageData } from 'next/image'

export interface Role {
    title: string
    description: string[]
    date: string
    endDate?: string
}

export interface Experience {
    company: string
    roles: Role[]
}

export const cvData = {
    personal: {
        name: 'Jenoff Van Hulle',
        role: 'Bridging the Gap Between Digital Marketing and AI Engineering',
        email: 'hello@jenoffvanhulle.com',
        phone: '+32 478 22 04 85',
        linkedin: 'linkedin.com/in/jenoffvanhulle',
        website: 'www.jenoffvanhulle.com',
        image: portraitImage,
    },
    skills: [
        'Digital Growth Strategy',
        'Search-Led Performance Architecture',
        'Operating Models & Governance',
        'Measurement & Attribution (GA4/server-side)',
        'AI-Accelerated Content Ops',
        'CRO & Experimentation',
        'Leadership & Team Uplift',
        'Social Advertising',
        'SEO | GEO',
    ],
    languages: [
        { name: 'Dutch', level: 'Native' },
        { name: 'French', level: 'C1' },
        { name: 'English', level: 'C1' },
    ],
    toolStack: [
        'Python', 'Flask', 'React', 'Next.js', 'TypeScript', 'WordPress', 'Agencii', 'GitHub',
        'Tailwind CSS', 'Shadcn ui',
        'PostgreSQL', 'pgvector', 'Supabase', 'Clerk',
        'OpenAI API', 'Google Gemini API', 'Google Antigravity',
        'Coolify', 'Hetzner',
        'Cursor', 'VSCode',
        'N8n', 'Zapier', 'Channable',
        'ClickUp',
        'Looker Studio', 'GA4', 'Google Tag Manager', 'Google Ads', 'Meta Business Manager', 'Google Ads Editor',
        'Semrush', 'Screaming Frog', 'Ahrefs', 'Google Search Console'
    ],
    experiences: [
        {
            company: 'BossData',
            roles: [
                {
                    title: 'Managing Director',
                    description: [
                        'Leading the integration of BossData with ZIGT, aligning operations, culture, and processes.',
                        'Overseeing Finance and HR, and implementing a modern compensation framework.',
                        'Won an IAB Mixx Award with an AI-driven client case.',
                        'Leading agency strategy, client growth, and delivery quality.',
                    ],
                    date: '2025-01',
                },
            ],
        },
        {
            company: 'ZIGT Media',
            roles: [
                {
                    title: 'Performance Director',
                    description: [
                        'Expanding the digital performance service line across ZIGT’s client portfolio (SEO, SEA, social, analytics).',
                        'Developing the agency’s performance marketing strategy and operating model.',
                        'Strategically supported the BossData acquisition and integration.',
                        'Implementing advanced analytics and leading cross-channel growth initiatives.',
                    ],
                    date: '2022-04',
                },
            ],
        },
        {
            company: 'Freelance',
            roles: [
                {
                    title: 'Digital Performance Consultant',
                    description: [
                        'Provided strategic support for multiple agencies and brands.',
                        'Served as Head of Digital at DexVille Agency.',
                        'Led digital strategy and performance operations across SEO, SEA, social, email and analytics.',
                        'Consultant at Empathy Lab.',
                        'Acted as interim lead for digital-growth projects.',
                    ],
                    date: '2016-08',
                    endDate: '2022-03',
                },
            ],
        },
        {
            company: 'GroupM (part of WPP)',
            roles: [
                {
                    title: 'Head of Search',
                    description: [
                        'Managed a 7-person team and built a Search Center of Excellence.',
                        'Led strategy, integrated SEO/SEA insights, and supported business development.',
                    ],
                    date: '2014-03',
                    endDate: '2016-07',
                },
                {
                    title: 'Head of SEO',
                    description: [
                        'Managed SEO specialists; designed enterprise strategies; scaled SEO cross-market, local, national, global.',
                    ],
                    date: '2013-07',
                    endDate: '2014-02',
                },
                {
                    title: 'Search Engine Marketing Consultant',
                    description: [
                        'Executed technical SEO/analytics; delivered audits; ran on/off-site optimization; trained stakeholders.',
                    ],
                    date: '2011-04',
                    endDate: '2013-06',
                },
            ],
        },
        {
            company: 'deMens.nu',
            roles: [
                {
                    title: 'Member of Staff | Research & Communication',
                    description: [
                        'Developed and executed communication and PR strategy.',
                        'Project-managed the organization’s new website and served as webmaster.',
                    ],
                    date: '2004-06',
                    endDate: '2011-03',
                },
            ],
        },
    ] as Experience[],
}
