'use client'
import { useLottie } from "lottie-react";
import olympics_lottie from '../assets/lottie/olympics.json'
import Link from 'next/link'
import { useRouter } from "next/router";


export default function Home() {
    const router = useRouter();
    const options = {
        animationData: olympics_lottie,
        loop: true
    };

    const { View } = useLottie(options);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div class="fixed top-2 left-2 z-50">
                <button onClick={() => router.push("/feed")} class="text-white italic px-2 py-1 rounded shadow-md">
                    Feeds
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" class="h-5 w-5 inline-block mr-1 align-text-top text-indigo-600">
                        <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path d="M10 25h20M30 15l10 10-10 10" />
                            <path d="M20 35h20M40 25l10 10-10 10" transform="translate(0 -10)" />
                        </g>
                    </svg>

                </button>
            </div>
            <div className="flex grow">
                {View}
            </div>
            <div className="flex flex-col w-screen p-2 gap-1">
                <button type="submit" onClick={() => router.push("/createMatch")} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">New Match</button>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Open Match</button>
                <p className="text-sm text-center italic m-2">Wa&apos;nna try? <Link href={"/signup"}>Signup</Link> / <Link href={"/login"}>Login</Link></p>
            </div>
        </main>
    )
}
