'use server'

import { render } from '@react-email/render'
import { Resend } from 'resend'
import { z } from 'zod'

import { EmailTemplate } from '@/components/EmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

if (!process.env.RESEND_API_KEY) {
    console.warn('Missing RESEND_API_KEY environment variable')
}

const formSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    subject: z.string().optional(),
    message: z.string().min(10),
})

export type ContactFormState = {
    success?: boolean
    error?: string
    errors?: {
        name?: string[]
        email?: string[]
        subject?: string[]
        message?: string[]
    }
}

export async function sendEmail(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
    const validatedFields = formSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { name, email, subject, message } = validatedFields.data

    try {
        const emailHtml = await render(
            EmailTemplate({ name, email, subject, message }) as React.ReactElement
        )

        const data = await resend.emails.send({
            from: 'Contact Form <contact@mail.jenoffvanhulle.com>',
            to: ['hello@jenoffvanhulle.com'],
            replyTo: email,
            subject: subject ? `New Contact: ${subject}` : `New Contact from ${name}`,
            html: emailHtml,
        })

        if (data.error) {
            return { error: data.error.message }
        }

        return { success: true }
    } catch (error) {
        console.error('Resend Error:', error)
        return { error: 'Something went wrong. Please try again.' }
    }
}
