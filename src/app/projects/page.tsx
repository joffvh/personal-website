import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { LinkIcon } from '@/components/Icons'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoSemanticContentGenerator from '@/images/logos/semantic-content-generator.svg'
import { type Project } from '@/lib/types'

const projects: Array<Project> = [
  {
    name: 'Semantic Content Generator',
    description:
      'A powerful URL keyword relevance and AI SEO analyzer designed to bridge the gap between content creation and technical SEO.',
    link: { href: '/projects/semantic-content-generator', label: 'View Project' },
    logo: logoSemanticContentGenerator,
  },
]

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Recent projects bridging Marketing, AI & Automation.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Bridging the gap between Marketing, AI & Automation."
      intro="Here you can find a collection of my recent projects where I explore the intersection of technical marketing and artificial intelligence. From semantic content generators to automated workflows, these projects demonstrate how technology can scale marketing efforts."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
