'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import clsx from 'clsx'

import { sendEmail } from '@/lib/actions'

const formSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    subject: z.string().optional(),
    message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [serverError, setServerError] = useState<string | null>(null)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true)
        setServerError(null)

        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('email', data.email)
        if (data.subject) formData.append('subject', data.subject)
        formData.append('message', data.message)

        const result = await sendEmail({}, formData)

        if (result.error) {
            setServerError(result.error)
            setIsSubmitting(false)
            return
        }

        if (result.success) {
            setIsSuccess(true)
            reset()
        }

        setIsSubmitting(false)
    }

    if (isSuccess) {
        return (
            <div className="rounded-2xl bg-zinc-50 p-8 text-center dark:bg-zinc-800/50">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    Message sent!
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                </p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-sm font-medium text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
                >
                    Send another message
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {serverError && (
                <div className="rounded-md bg-red-50 p-4 text-sm text-red-700 dark:bg-red-900/50 dark:text-red-200">
                    {serverError}
                </div>
            )}
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100"
                >
                    Name
                </label>
                <div className="mt-2" suppressHydrationWarning>
                    <input
                        type="text"
                        id="name"
                        {...register('name')}
                        className={clsx(
                            'block w-full rounded-md border-0 px-4 py-2.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 dark:bg-zinc-800/50 dark:text-zinc-100 dark:ring-zinc-700 dark:focus:ring-teal-500',
                            errors.name && 'ring-red-500 focus:ring-red-500 dark:ring-red-500/50'
                        )}
                        placeholder="How should I call you?"
                    />
                    {errors.name && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                            {errors.name.message}
                        </p>
                    )}
                </div>
            </div>

            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100"
                >
                    Email
                </label>
                <div className="mt-2" suppressHydrationWarning>
                    <input
                        type="email"
                        id="email"
                        {...register('email')}
                        className={clsx(
                            'block w-full rounded-md border-0 px-4 py-2.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 dark:bg-zinc-800/50 dark:text-zinc-100 dark:ring-zinc-700 dark:focus:ring-teal-500',
                            errors.email && 'ring-red-500 focus:ring-red-500 dark:ring-red-500/50'
                        )}
                        placeholder="Where can I reply?"
                    />
                    {errors.email && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                            {errors.email.message}
                        </p>
                    )}
                </div>
            </div>

            <div>
                <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100"
                >
                    Subject <span className="font-normal text-zinc-500">(Optional)</span>
                </label>
                <div className="mt-2">
                    <select
                        id="subject"
                        {...register('subject')}
                        className="block w-full rounded-md border-0 px-4 py-2.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 dark:bg-zinc-800/50 dark:text-zinc-100 dark:ring-zinc-700 dark:focus:ring-teal-500"
                    >
                        <option value="">Select a topic...</option>
                        <option value="project">Project Inquiry</option>
                        <option value="speaking">Speaking Opportunity</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100"
                >
                    Message
                </label>
                <div className="mt-2">
                    <textarea
                        id="message"
                        rows={4}
                        {...register('message')}
                        className={clsx(
                            'block w-full rounded-md border-0 px-4 py-2.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 dark:bg-zinc-800/50 dark:text-zinc-100 dark:ring-zinc-700 dark:focus:ring-teal-500',
                            errors.message && 'ring-red-500 focus:ring-red-500 dark:ring-red-500/50'
                        )}
                        placeholder="What's on your mind?"
                    />
                    {errors.message && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                            {errors.message.message}
                        </p>
                    )}
                </div>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-teal-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-teal-500/10 dark:text-teal-400 dark:hover:bg-teal-500/20"
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    )
}
