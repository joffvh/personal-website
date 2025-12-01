import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { cvData, type Experience } from '@/lib/cv-data'

function ExperienceItem({ experience }: { experience: Experience }) {
    return (
        <article className="relative flex flex-col items-start">
            <h3 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                {experience.company}
            </h3>
            <div className="mt-4 w-full space-y-8">
                {experience.roles.map((role, index) => {
                    const startYear = new Date(role.date).getFullYear()
                    const endYear = role.endDate
                        ? new Date(role.endDate).getFullYear()
                        : 'Present'

                    return (
                        <div key={index} className="relative border-l-2 border-zinc-100 pl-6 dark:border-zinc-700/40">
                            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                                <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                                    {role.title}
                                </h4>
                                <time
                                    dateTime={role.date}
                                    className="flex-none text-sm font-medium text-zinc-400 tabular-nums dark:text-zinc-500"
                                >
                                    {startYear} <span className="mx-1">-</span> {endYear}
                                </time>
                            </div>
                            <ul className="mt-4 list-disc pl-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                                {role.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </article>
    )
}

export const metadata: Metadata = {
    title: 'Experience',
    description: 'My professional journey, roles, and career highlights.',
}

export default function Experience() {
    return (
        <SimpleLayout
            title="My professional experience and career journey."
            intro="A summary of my work history, key roles, and professional achievements."
        >
            <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                <div className="flex max-w-3xl flex-col space-y-20">
                    {cvData.experiences.map((experience, index) => (
                        <ExperienceItem key={index} experience={experience} />
                    ))}
                </div>
            </div>
        </SimpleLayout>
    )
}
