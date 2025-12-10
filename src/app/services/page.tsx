import { type Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'


import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import {
    SiGoogleads,
    SiGoogleanalytics,
    SiGoogletagmanager,
    SiHubspot,
    SiMeta,
    SiN8N,
    SiOpenai,
    SiPython,
    SiReact,
    SiZapier,
} from 'react-icons/si'
import { MdLightbulb, MdMemory, MdTrendingUp } from 'react-icons/md'

export const metadata: Metadata = {
    title: 'Services',
    description:
        'Strategic consulting, AI engineering, and hands-on performance marketing services.',
}



function ServiceTag({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 ring-1 ring-inset ring-zinc-500/10 dark:bg-zinc-800 dark:text-zinc-400 dark:ring-zinc-700">
            {children}
        </span>
    )
}

function ServiceRow({
    title,
    description,
    skills,
    icon: Icon,
}: {
    title: string
    description: string
    skills: string[]
    icon: React.ComponentType<{ className?: string }>
}) {
    return (
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-12 md:gap-y-0">
            <div className="md:col-span-1">
                <div className="flex items-center gap-x-4 md:block">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-900 dark:ring-0">
                        <Icon className="h-7 w-7 fill-zinc-500 transition group-hover:fill-teal-500 dark:fill-zinc-400 dark:group-hover:fill-teal-500" />
                    </div>
                    <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 md:mt-6">
                        {title}
                    </h2>
                </div>
            </div>
            <div className="md:col-span-2">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <ServiceTag key={skill}>{skill}</ServiceTag>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default function Services() {
    return (
        <SimpleLayout
            title="Engineering Growth for Ambitious Brands."
            intro="I bridge the gap between strategic marketing and technical execution. Whether you need high-level guidance, custom AI tools, or hands-on campaign management, I help you scale efficiently."
        >
            <div className="space-y-24">
                <Section title="Service Offerings">
                    <div className="space-y-16">
                        <ServiceRow
                            title="Strategic Leadership"
                            description="High-level strategic guidance without the full-time headcount. Perfect for scale-ups and agencies needing direction."
                            icon={MdLightbulb}
                            skills={[
                                'Digital Strategy Roadmap',
                                'Team Structure & Hiring Advice',
                                'Tech Stack Selection',
                                'Budget Allocation & Forecasting',
                            ]}
                        />
                        <div className="h-px bg-zinc-100 dark:bg-zinc-700/40" />
                        <ServiceRow
                            title="AI & Automation Engineering"
                            description="Leveraging AI to work smarter and automate marketing operations, driving superior business outcomes through efficiency."
                            icon={MdMemory}
                            skills={[
                                'Marketing Automation Flows',
                                'Custom AI Agents',
                                'Workflow Automation (n8n, Zapier)',
                                'Automated Reporting Pipelines',
                            ]}
                        />
                        <div className="h-px bg-zinc-100 dark:bg-zinc-700/40" />
                        <ServiceRow
                            title="Performance & Execution"
                            description="I don't just advise; I build, run, and optimize. Immediate operational support and technical implementation."
                            icon={MdTrendingUp}
                            skills={[
                                'Campaign Management (Ads)',
                                'Web Development',
                                'Technical Foundation (GTM/GA4 & Server-side)',
                                'CRO & Experimentation',
                                'SEO / GEO',
                                'Advanced Reporting & Dashboards',
                            ]}
                        />
                    </div>
                </Section>

                <Section title="Engagement Models">
                    <div className="space-y-6 max-w-3xl">
                        <p className="text-base text-zinc-600 dark:text-zinc-400">
                            To make it easy to work together, I offer three clear engagement models tailored to your needs.
                        </p>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Project-Based</h3>
                                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Fixed scope, fixed price. Ideal for audits, tool builds, or specific setups.</p>
                            </div>
                            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 bg-zinc-50 dark:bg-zinc-800/50">
                                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Retainer (Fractional)</h3>
                                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Fixed days per month. Your Technical Growth Partner.</p>
                            </div>
                            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Hourly / Advisory</h3>
                                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Ad-hoc consulting calls for specific problem-solving.</p>
                            </div>
                        </div>
                        <p className="mt-4 text-sm italic text-zinc-500 dark:text-zinc-500">
                            Pricing available on request.
                        </p>
                    </div>
                </Section>

                <section className="flex flex-col items-center justify-center rounded-2xl bg-zinc-50 p-8 text-center dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700/40">
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                        Ready to accelerate your growth?
                    </h2>
                    <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
                        Whether you need a strategic partner or a technical builder, I'm here to help you bridge the gap.
                    </p>
                    <div className="mt-8">
                        <Button href="/contact">
                            Contact me
                        </Button>
                    </div>
                </section>
            </div>
        </SimpleLayout>
    )
}
