import { Head, Link } from '@inertiajs/react'
import cs from './ContactPage.module.css'


export default function ContactPage() {
    return (
        <>
        <Head title="Contact Page" />
        < div className={cs.root }>
        <Link
                href="/"
                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
            >
            Doma
        </Link>
        <Link
                href="/about-page"
                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
            >
            O nama
        </Link>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-3xl font-bold underline">Contact Page</h1>
            </div>
        </div>
        </>
    )
}
