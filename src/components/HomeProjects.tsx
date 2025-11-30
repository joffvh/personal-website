import Image, { type ImageProps } from 'next/image'

import { Button } from '@/components/Button'
import { ArrowDownIcon, BriefcaseIcon } from '@/components/Icons'
import logoSemanticContentGenerator from '@/images/logos/semantic-content-generator.svg'
import { type Project } from '@/lib/types'

function Project({ project }: { project: Project }) {
    return (
        <li className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={project.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Project</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {project.name}
                </dd>
                <dt className="sr-only">Description</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                    {project.description}
                </dd>
            </dl>
        </li>
    )
}

export function HomeProjects() {
    let projects: Array<Project> = [
        {
            name: 'Semantic Content Generator',
            description:
                'A powerful URL keyword relevance and AI SEO analyzer designed to bridge the gap between content creation and technical SEO.',
            link: { href: '/projects/semantic-content-generator', label: 'View Project' },
            logo: logoSemanticContentGenerator,
        },
    ]

    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BriefcaseIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Projects</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {projects.map((project, projectIndex) => (
                    <Project key={projectIndex} project={project} />
                ))}
            </ol>
            <Button href="/projects" variant="secondary" className="group mt-6 w-full">
                View all projects
                <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
        </div>
    )
}
