'use client'
import { useLottie } from "lottie-react";
import olympics_lottie from './assets/lottie/olympics.json'

export default function Home() {
  const options = {
    animationData: olympics_lottie,
    loop: true
  };

  const { View } = useLottie(options);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex grow">
        {View}
      </div>
      <div className="flex flex-col w-screen p-2 gap-1">
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">New Match</button>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Open Match</button>
        <p className="text-sm text-center italic m-2">Wa'nna try? <a href="justdial.com">Signup</a> / <a>Login</a></p>
      </div>
    </main>
  )
}
