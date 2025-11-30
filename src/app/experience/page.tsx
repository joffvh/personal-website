import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

interface Experience {
    company: string
    role: string
    description: string
    date: string
    endDate?: string
}

const experiences: Experience[] = [
    {
        company: 'BossData',
        role: 'Managing Director',
        description: 'Leading the agency in delivering high-end data and performance strategies. Responsible for operational management, business development, and strategic direction to help organizations organize their digital marketing smarter.',
        date: '2025-01',
    },
    {
        company: 'ZIGT',
        role: 'Performance Director',
        description: 'Headed the performance marketing department. Developed integrated performance strategies across SEO, SEA, and Social. Coached and expanded the digital team, ensuring the alignment of channels, data, and technology.',
        date: '2022-04',
        endDate: '2024-12',
    },
    {
        company: 'zzoom',
        role: 'Freelance',
        description: 'Provided interim digital marketing management and consultancy. Specialized in SEO audits, SEA restructuring, and digital strategy implementation for diverse clients. Focused on bringing structure and clarity to complex digital challenges.',
        date: '2016-08',
        endDate: '2022-03',
    },
    {
        company: 'groupm (part of WPP)',
        role: 'SEO Consultant / Head of SEO / Head of Search',
        description: 'Built and led the SEO department. Defined SEO strategies for major clients, integrated SEO with other media channels, and trained internal teams. Worked where strategy and execution meet to deliver measurable impact.',
        date: '2011-04',
        endDate: '2016-07',
    },
    {
        company: 'Huis van de Mens',
        role: 'Member of Staff',
        description: 'Supported organizational goals and community outreach programs, contributing to the mission of the organization.',
        date: '2004-06',
        endDate: '2011-03',
    },
]

function ExperienceItem({ experience }: { experience: Experience }) {
    const startYear = new Date(experience.date).getFullYear()
    const endYear = experience.endDate ? new Date(experience.endDate).getFullYear() : 'Present'

    return (
        <article className="md:grid md:grid-cols-4 md:items-baseline">
            <Card className="md:col-span-3">
                <Card.Title>{experience.role}</Card.Title>
                <Card.Eyebrow decorate>{experience.company}</Card.Eyebrow>
                <Card.Description>{experience.description}</Card.Description>
            </Card>
            <Card.Eyebrow
                as="time"
                dateTime={experience.date}
                className="mt-1 max-md:hidden"
            >
                {startYear} - {endYear}
            </Card.Eyebrow>
        </article>
    )
}

export const metadata: Metadata = {
    title: 'Experience',
    description:
        'My professional journey, roles, and career highlights.',
}

export default function Experience() {
    return (
        <SimpleLayout
            title="My professional experience and career journey."
            intro="A summary of my work history, key roles, and professional achievements."
        >
            <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                <div className="flex max-w-3xl flex-col space-y-16">
                    {experiences.map((experience, index) => (
                        <ExperienceItem key={index} experience={experience} />
                    ))}
                </div>
            </div>
        </SimpleLayout>
    )
}
