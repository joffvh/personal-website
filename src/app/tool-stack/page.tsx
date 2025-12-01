import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import {
  SiPython,
  SiFlask,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiWordpress,
  SiTailwindcss,
  SiRadixui,
  SiPostgresql,
  SiSupabase,
  SiClerk,
  SiOpenai,
  SiGoogle,
  SiHetzner,
  SiN8N,
  SiZapier,
  SiClickup,
  SiLooker,
  SiGoogleanalytics,
  SiGoogleads,
  SiMeta,
  SiSemrush,
  SiDocker,
  SiGithub,
  SiGoogletagmanager,
  SiGooglesearchconsole,
} from 'react-icons/si'
import { MdBusiness, MdRssFeed, MdCode, MdSearch, MdTrendingUp } from 'react-icons/md'

function ToolsSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4 md:gap-x-6">
        <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          {title}
        </h2>
        <div className="md:col-span-3">
          <ul role="list" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {children}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Tool({
  title,
  href,
  children,
  icon: Icon,
}: {
  title: string
  href?: string
  children: React.ReactNode
  icon?: React.ComponentType<{ className?: string }>
}) {
  return (
    <Card as="li">
      <div className="group relative flex flex-col items-start h-full p-6 rounded-2xl bg-zinc-50 transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-zinc-800/5 hover:scale-[1.02] dark:bg-zinc-800/50 dark:hover:bg-zinc-800 dark:hover:shadow-white/5 border border-zinc-100 dark:border-zinc-700/50">
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-900 dark:ring-0 mb-4">
          {Icon && <Icon className="h-7 w-7 transition group-hover:fill-teal-500 dark:fill-zinc-400 dark:group-hover:fill-teal-500" />}
        </div>
        <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          {title}
        </h3>
        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {children}
        </p>
      </div>
    </Card>
  )
}

export const metadata = {
  title: 'Tool Stack',
  description: 'The tools I use to build, automate, and grow.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="The tools I use to build, automate, and grow."
      intro="From building AI-powered applications with Next.js and Python to managing complex digital marketing campaigns. Here's a comprehensive list of the software, frameworks, and infrastructure that power my daily workflow."
    >
      <div className="space-y-12">
        <ToolsSection title="Development & Frameworks">
          <Tool title="Python" icon={SiPython}>
            My go-to language for backend development, data analysis, and scripting. Simple, powerful, and versatile.
          </Tool>
          <Tool title="Flask" icon={SiFlask}>
            A lightweight WSGI web application framework. Perfect for building quick APIs and microservices.
          </Tool>
          <Tool title="React" icon={SiReact}>
            The library for web and native user interfaces. It changed the way I think about building UI.
          </Tool>
          <Tool title="Next.js" icon={SiNextdotjs}>
            The React framework for the web. It handles everything from routing to server-side rendering, making production builds a breeze.
          </Tool>
          <Tool title="TypeScript" icon={SiTypescript}>
            JavaScript with syntax for types. It catches errors early and makes the codebase much more maintainable.
          </Tool>
          <Tool title="WordPress" icon={SiWordpress}>
            Still the king of CMS. I use it for content-heavy sites where flexibility and ease of use for the client are paramount.
          </Tool>
          <Tool title="Agencii" icon={MdBusiness}>
            Agencii AI is a platform built on the Agency Swarm framework, designed for AI developers and AI agencies to create and deploy custom AI agents tailored to client needs.
          </Tool>
          <Tool title="GitHub" icon={SiGithub}>
            The world's leading AI-powered developer platform. I use it for version control, collaboration, and CI/CD.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Styling & UI">
          <Tool title="Tailwind CSS" icon={SiTailwindcss}>
            A utility-first CSS framework that allows me to build custom designs without leaving my HTML.
          </Tool>
          <Tool title="Shadcn ui" icon={SiRadixui}>
            Beautifully designed components that you can copy and paste into your apps. Accessible and customizable.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Database & Backend">
          <Tool title="PostgreSQL" icon={SiPostgresql}>
            The world's most advanced open source relational database. Reliable, robust, and feature-rich.
          </Tool>
          <Tool title="pgvector" icon={SiPostgresql}>
            Open-source vector similarity search for Postgres. Essential for building AI applications with RAG.
          </Tool>
          <Tool title="Supabase" icon={SiSupabase}>
            An open source Firebase alternative. It gives me a Postgres database, authentication, instant APIs, and real-time subscriptions.
          </Tool>
          <Tool title="Clerk" icon={SiClerk}>
            Complete user management and authentication. It saves me weeks of development time on every project.
          </Tool>
        </ToolsSection>

        <ToolsSection title="AI & APIs">
          <Tool title="OpenAI API" icon={SiOpenai}>
            Access to GPT-4 and other powerful models. The engine behind many of my AI-driven features.
          </Tool>
          <Tool title="Google Gemini API" icon={SiGoogle}>
            Google's latest multimodal AI models. Great for processing text, images, and video.
          </Tool>
          <Tool title="Google Antigravity" icon={SiGoogle}>
            An advanced agentic coding assistant that helps me write code, debug, and refactor faster than ever.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Infrastructure & Hosting">
          <Tool title="Coolify" icon={SiDocker}>
            An open-source & self-hostable Heroku / Netlify / Vercel alternative. I use it to manage my own servers.
          </Tool>
          <Tool title="Hetzner" icon={SiHetzner}>
            Reliable and affordable cloud hosting. Great performance for the price.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Tools & Editors">
          <Tool title="Cursor" icon={MdCode}>
            The AI code editor. It's built on VS Code but deeply integrated with AI to help you code faster.
          </Tool>
          <Tool title="VSCode" icon={MdCode}>
            The classic editor. Lightweight, extensible, and familiar.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Automation & Workflow">
          <Tool title="N8n" icon={SiN8N}>
            Workflow automation tool. It's like Zapier but fair-code and self-hostable.
          </Tool>
          <Tool title="Zapier" icon={SiZapier}>
            The easiest way to automate workflows between web apps.
          </Tool>
          <Tool title="Channable" icon={MdRssFeed}>
            Feed management and PPC automation tool. Essential for managing large e-commerce catalogs.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Productivity & Management">
          <Tool title="ClickUp" icon={SiClickup}>
            One app to replace them all. I use it for project management, docs, and tracking tasks.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Marketing & Analytics">
          <Tool title="Looker Studio" icon={SiLooker}>
            Turns your data into informative, easy to read, easy to share, and fully customizable dashboards and reports.
          </Tool>
          <Tool title="GA4" icon={SiGoogleanalytics}>
            Google Analytics 4. The standard for tracking website traffic and user behavior.
          </Tool>
          <Tool title="Google Tag Manager" icon={SiGoogletagmanager}>
            Manage all your website tags without editing code. Essential for tracking conversions and user behavior.
          </Tool>
          <Tool title="Google Ads" icon={SiGoogleads}>
            The platform for paid search and display advertising.
          </Tool>
          <Tool title="Meta Business Manager" icon={SiMeta}>
            For managing Facebook and Instagram ad campaigns.
          </Tool>
          <Tool title="Google Ads Editor" icon={SiGoogleads}>
            A free, downloadable application for managing your Google Ads campaigns.
          </Tool>
        </ToolsSection>

        <ToolsSection title="SEO Tools">
          <Tool title="Semrush" icon={SiSemrush}>
            All-in-one tool suite for improving online visibility and discovering marketing insights.
          </Tool>
          <Tool title="Screaming Frog" icon={MdSearch}>
            The industry leading website crawler for SEO audits.
          </Tool>
          <Tool title="Ahrefs" icon={MdTrendingUp}>
            SEO tools & resources to grow your search traffic. Great for backlink analysis and keyword research.
          </Tool>
          <Tool title="Google Search Console" icon={SiGooglesearchconsole}>
            Monitor, maintain, and troubleshoot your site's presence in Google Search results.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
