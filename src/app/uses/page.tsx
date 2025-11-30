import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-8">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
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
          <Tool title="Python">
            My go-to language for backend development, data analysis, and scripting. Simple, powerful, and versatile.
          </Tool>
          <Tool title="Flask">
            A lightweight WSGI web application framework. Perfect for building quick APIs and microservices.
          </Tool>
          <Tool title="React">
            The library for web and native user interfaces. It changed the way I think about building UI.
          </Tool>
          <Tool title="Next.js">
            The React framework for the web. It handles everything from routing to server-side rendering, making production builds a breeze.
          </Tool>
          <Tool title="TypeScript">
            JavaScript with syntax for types. It catches errors early and makes the codebase much more maintainable.
          </Tool>
          <Tool title="WordPress">
            Still the king of CMS. I use it for content-heavy sites where flexibility and ease of use for the client are paramount.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Styling & UI">
          <Tool title="Tailwind CSS">
            A utility-first CSS framework that allows me to build custom designs without leaving my HTML.
          </Tool>
          <Tool title="Shadcn ui">
            Beautifully designed components that you can copy and paste into your apps. Accessible and customizable.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Database & Backend">
          <Tool title="PostgreSQL">
            The world's most advanced open source relational database. Reliable, robust, and feature-rich.
          </Tool>
          <Tool title="pgvector">
            Open-source vector similarity search for Postgres. Essential for building AI applications with RAG.
          </Tool>
          <Tool title="Supabase">
            An open source Firebase alternative. It gives me a Postgres database, authentication, instant APIs, and real-time subscriptions.
          </Tool>
          <Tool title="Clerk">
            Complete user management and authentication. It saves me weeks of development time on every project.
          </Tool>
        </ToolsSection>

        <ToolsSection title="AI & APIs">
          <Tool title="OpenAI API">
            Access to GPT-4 and other powerful models. The engine behind many of my AI-driven features.
          </Tool>
          <Tool title="Google Gemini API">
            Google's latest multimodal AI models. Great for processing text, images, and video.
          </Tool>
          <Tool title="Google Antigravity">
            An advanced agentic coding assistant that helps me write code, debug, and refactor faster than ever.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Infrastructure & Hosting">
          <Tool title="Coolify">
            An open-source & self-hostable Heroku / Netlify / Vercel alternative. I use it to manage my own servers.
          </Tool>
          <Tool title="Hetzner">
            Reliable and affordable cloud hosting. Great performance for the price.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Tools & Editors">
          <Tool title="Cursor">
            The AI code editor. It's built on VS Code but deeply integrated with AI to help you code faster.
          </Tool>
          <Tool title="VSCode">
            The classic editor. Lightweight, extensible, and familiar.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Automation & Workflow">
          <Tool title="N8n">
            Workflow automation tool. It's like Zapier but fair-code and self-hostable.
          </Tool>
          <Tool title="Zapier">
            The easiest way to automate workflows between web apps.
          </Tool>
          <Tool title="Channable">
            Feed management and PPC automation tool. Essential for managing large e-commerce catalogs.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Productivity & Management">
          <Tool title="ClickUp">
            One app to replace them all. I use it for project management, docs, and tracking tasks.
          </Tool>
          <Tool title="Agencii">
            The AI-powered operating system for agencies. It streamlines project management, resource allocation, and financial tracking.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Marketing & Analytics">
          <Tool title="Looker Studio">
            Turns your data into informative, easy to read, easy to share, and fully customizable dashboards and reports.
          </Tool>
          <Tool title="GA4">
            Google Analytics 4. The standard for tracking website traffic and user behavior.
          </Tool>
          <Tool title="Google Ads">
            The platform for paid search and display advertising.
          </Tool>
          <Tool title="Meta Business Manager">
            For managing Facebook and Instagram ad campaigns.
          </Tool>
          <Tool title="Google Ads Editor">
            A free, downloadable application for managing your Google Ads campaigns.
          </Tool>
        </ToolsSection>

        <ToolsSection title="SEO Tools">
          <Tool title="Semrush">
            All-in-one tool suite for improving online visibility and discovering marketing insights.
          </Tool>
          <Tool title="Screaming Frog">
            The industry leading website crawler for SEO audits.
          </Tool>
          <Tool title="Ahrefs">
            SEO tools & resources to grow your search traffic. Great for backlink analysis and keyword research.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
