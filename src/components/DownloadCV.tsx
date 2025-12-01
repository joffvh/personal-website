'use client'

import { PDFDownloadLink } from '@react-pdf/renderer'
import { CVDocument } from '@/components/CVDocument'
import { Button } from '@/components/Button'
import { useEffect, useState } from 'react'

export function DownloadCV({ className }: { className?: string }) {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) {
        return (
            <Button variant="secondary" className={className}>
                Download CV
                <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
        )
    }

    return (
        <PDFDownloadLink
            document={<CVDocument />}
            fileName="CV-Jenoff-Van-Hulle.pdf"
            className={className}
        >
            {({ blob, url, loading, error }) => (
                <Button variant="secondary" className="group w-full">
                    {loading ? 'Generating PDF...' : 'Download CV'}
                    <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
                </Button>
            )}
        </PDFDownloadLink>
    )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
