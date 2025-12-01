import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { GitHubIcon } from '@/components/SocialIcons'

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function SemanticContentGenerator() {
  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/projects"
            aria-label="Go back to projects"
            className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
          </Link>

          <header className="flex flex-col">
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Semantic Content Generator
            </h1>
            <p className="order-first flex items-center text-base font-semibold text-teal-500">
              <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
              <span className="ml-3">AI & SEO Tool</span>
            </p>
          </header>

          <div className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              A powerful URL keyword relevance and AI SEO analyzer designed to bridge the gap between content creation and technical SEO. This tool uses advanced semantic analysis to provide actionable recommendations for optimizing web content.
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <Button href="/contact" variant="secondary">
              Contact for Collaboration
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
              Optimize your content. Boost your rankings.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Leverage the power of BERT models and Large Language Models to analyze your content's semantic relevance and get tailored improvements.
            </p>
          </div>
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 dark:bg-white/5 dark:ring-white/10">
              <img
                src="/images/sequesto-screenshot.png"
                alt="Sequesto Content Optimizer Screenshot"
                width={3773}
                height={2379}
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10 dark:ring-white/10 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-20">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Key Features
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Semantic Analysis', description: 'Uses BERT models to understand the deep semantic meaning of your content, not just keyword matching.' },
            { title: 'AI Recommendations', description: 'Generates specific, actionable advice using advanced LLMs (OpenAI, Anthropic, Gemini).' },
            { title: 'Hybrid SEO', description: 'Combines AI-driven insights with traditional rule-based SEO checks for comprehensive optimization.' },
            { title: 'Multilingual Support', description: 'Analyze and optimize content in Dutch, English, German, and French.' },
            { title: 'Structured Data Snippets', description: 'Automatically advises structured data snippets based on your reworked or newly generated content.' },
            { title: 'Knowledge Base Integration', description: 'Connects with Notion using RAG and pgvector to use your existing knowledge base for context-aware recommendations.' },
          ].map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{feature.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 md:mt-20">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Tech Stack
        </h2>
        <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {['Python', 'Flask', 'PostgreSQL', 'pgvector', 'React', 'Next.js', 'Tailwind CSS', 'OpenAI API', 'Anthropic API', 'Google Gemini API', 'Docker'].map((tech) => (
            <li key={tech} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <CheckIcon className="h-4 w-4 text-teal-500" />
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
