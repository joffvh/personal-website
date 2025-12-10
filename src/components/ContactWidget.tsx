import { Button } from '@/components/Button'

export function ContactWidget() {
    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 bg-zinc-50 dark:bg-zinc-800/50">
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">
                Ready to accelerate your growth?
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Whether you need a strategic partner or a technical builder, I'm here to help you bridge the gap.
            </p>
            <Button href="/contact" className="mt-4 w-full">
                Contact me
            </Button>
        </div>
    )
}
