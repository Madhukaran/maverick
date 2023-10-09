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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {View}
      <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">New Match</button>
      <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Open Match</button>
    </main>
  )
}
