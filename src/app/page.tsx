import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import { HomeProjects } from '@/components/HomeProjects'
import { Photos } from '@/components/Photos'
import { SocialLink } from '@/components/SocialLink'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'



function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I bridge the gap between Digital Marketing and AI Engineering.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Jenoff, a technical marketer and engineer. I help organizations organize their digital marketing smarter by combining strategic thinking with hands-on execution in AI and automation.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.linkedin.com/in/jenoffvanhulle/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 bg-zinc-50 dark:bg-zinc-800/50">
              <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">
                Ready to accelerate your growth?
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Whether you need a strategic partner or a technical builder, I'm here to help you bridge the gap.
              </p>
              <Button href="/contact" className="mt-4 w-full">
                Book a Discovery Call
              </Button>
            </div>
            <HomeProjects />
          </div>
        </div>
      </Container>
    </>
  )
}
