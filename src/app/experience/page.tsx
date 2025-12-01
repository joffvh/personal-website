import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { cvData, type Experience } from '@/lib/cv-data'

function ExperienceItem({ experience }: { experience: Experience }) {
    return (
        <article className="relative flex flex-col items-start pl-8 md:pl-0">
            <h3 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 md:col-span-3">
                {experience.company}
            </h3>
            <div className="mt-4 space-y-8">
                {experience.roles.map((role, index) => {
                    const startYear = new Date(role.date).getFullYear()
                    const endYear = role.endDate
                        ? new Date(role.endDate).getFullYear()
                        : 'Present'

                    return (
                        <div key={index} className="relative pl-4 md:grid md:grid-cols-4 md:gap-x-6 md:pl-0">
                            {/* Timeline line for mobile */}
                            <div className="absolute bottom-0 left-0 top-0 w-px bg-zinc-200 md:hidden dark:bg-zinc-700/40" />

                            <div className="md:col-span-3 group relative">
                                {/* Dot for mobile */}
                                <div className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full border border-zinc-200 bg-zinc-50 md:hidden dark:border-zinc-700 dark:bg-zinc-800" />

                                <h4 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                                    {role.title}
                                </h4>
                                <ul className="mt-2 list-disc pl-4 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                                    {role.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-2 md:mt-0 md:text-right">
                                <time
                                    dateTime={role.date}
                                    className="text-sm text-zinc-400 dark:text-zinc-500"
                                >
                                    {startYear} - {endYear}
                                </time>
                            </div>
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
                <div className="flex max-w-3xl flex-col space-y-16">
                    {cvData.experiences.map((experience, index) => (
                        <ExperienceItem key={index} experience={experience} />
                    ))}
                </div>
            </div>
        </SimpleLayout>
    )
}
