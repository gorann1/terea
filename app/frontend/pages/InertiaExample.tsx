import { Head, Link } from '@inertiajs/react'
import { useState } from 'react'

import { Button } from "@/components/ui/button"

import cs from './InertiaExample.module.css'

export default function InertiaExample({ name }: { name: string }) {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head title="Inertia + Vite Ruby + React Example" />

      <div className={cs.root}>
        <h1 className={cs.h1}>Hello {name}!</h1>

        <div>
        <Link
                href="/about-page"
                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
            >
        O nama
        </Link>
        <Link
                href="/contact-page"
                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
            >
        Kontakt
        </Link>

        </div>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <div className="flex flex-col items-center justify-center h-screen">
          <Button>Click me</Button>
        </div>

        <h2 className={cs.h2}>Inertia + Vite Ruby + React</h2>

        <div className="card">
          <button
            className={cs.button}
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p>
            Edit <code>app/frontend/pages/InertiaExample.jsx</code> and save to
            test HMR
          </p>
        </div>
        <p className={cs.readTheDocs}>
          Click on the Inertia, Vite Ruby, and React logos to learn more
        </p>
      </div>
    </>
  )
}
