import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
  target,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
  target?: string
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target={target}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I help organizations organize their digital marketing smarter. With over ten years of experience in digital performance, I bring structure, focus and results to complex digital challenges.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi, I'm Jenoff Van Hulle.<br />
            I bridge the gap between Digital Marketing and AI Engineering.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I help organizations organize their digital marketing smarter. With over ten years of experience in digital performance, I’ve learned that the biggest challenges aren't just about marketing—they're about data, engineering, and automation.
            </p>
            <p>
              I don't just define strategies; I build the infrastructure to execute them. My background isn't limited to ad platforms and analytics dashboards. I bring a technical marketeer's mindset to the table. Whether it's building a Semantic Content Generator or architecting intelligent automation pipelines, I use code to solve complex marketing problems.
            </p>
            <p>
              My toolkit spans both worlds. On the marketing side, I'm a veteran in SEO, SEA, Social, and GA4/GTM implementations. On the technical side, I leverage modern engineering tools to build custom solutions. I am currently deeply focused on exploring how Vector Databases and AI Agents can create hyper-personalized, scalable experiences.
            </p>
            <p>
              I combine strategic planning with hands-on technical execution. My focus is on building scalable performance roadmaps and guiding teams to implement them effectively, ensuring that technology directly supports business goals.
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
              How I work
            </h2>
            <p>
              Strong digital strategies emerge at the intersection of data, people and technology.
              My approach is analytical yet pragmatic: providing clear direction, setting measurable
              goals and allowing room for creativity within the framework of the strategy.
            </p>
            <p>
              Whether brought in as a strategic partner, coach or interim reinforcement, my focus
              is always on bringing structure, clarity and acceleration to digital teams.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://www.linkedin.com/in/jenoffvanhulle/" target="_blank" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>

            <SocialLink
              href="/contact"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              Contact me
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
