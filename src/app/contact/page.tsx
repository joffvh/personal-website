import { type Metadata } from 'next'

import { ContactForm } from '@/components/ContactForm'
import { Container } from '@/components/Container'
import { LinkedInIcon } from '@/components/SocialIcons'
import { SocialLink } from '@/components/SocialLink'

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Get in touch with me for projects, speaking opportunities, or just to say hi.',
}

export default function Contact() {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
                <div className="lg:order-last">
                    <ContactForm />
                </div>
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        Let&apos;s work together
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        Have a project in mind or just want to chat about AI and marketing?
                        I&apos;m always open to discussing new opportunities and ideas.
                    </p>

                    <div className="mt-8">
                        <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                            Connect with me
                        </h2>
                        <div className="mt-4 flex gap-6">
                            <SocialLink
                                href="https://www.linkedin.com/in/jenoffvanhulle/"
                                aria-label="Follow on LinkedIn"
                                icon={LinkedInIcon}
                            />
                        </div>
                    </div>

                    <div className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
                        <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                            Email
                        </h2>
                        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                            <a href="mailto:hello@jenoffvanhulle.com" className="hover:text-teal-500 dark:hover:text-teal-400">
                                hello@jenoffvanhulle.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}
