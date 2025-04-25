import { Head, Link } from '@inertiajs/react'
import cs from './AboutPage.module.css'
import { Toaster } from "@/components/ui/sonner"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function AboutPage({ name }: { name: string }) {

return (
    <>
    <Head title="About Page" />

    <div className={cs.root}>
    <Link
                href="/"
                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
            >
        Doma
    </Link>
    <Link
                href="/contact-page"
                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
            >
        Kontakt
    </Link>
        <h1 className={cs.h1}>Hello {name}!</h1>
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold underline">About Page</h1>
            <Toaster />
        </div>
        <Button
    variant="outline"
    onClick={() =>
        toast("Upravo ste bookirali zaron na lokaciji", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
        },
        })
    }
    >
    Show Toast
    </Button>
    </div>
    </>
)
}
