'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [timeTogether, setTimeTogether] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [untilNextMonth, setUntilNextMonth] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const datingStartTime = new Date('2025-03-01T00:00:00')
    const startDate = new Date(datingStartTime)

    const updateTime = () => {
      const now = new Date()

      const diff = now.getTime() - startDate.getTime()
      const totalSeconds = Math.floor(diff / 1000)
      const days = Math.floor(totalSeconds / (60 * 60 * 24))
      const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600)
      const minutes = Math.floor((totalSeconds % 3600) / 60)
      const seconds = totalSeconds % 60

      setTimeTogether({ days, hours, minutes, seconds })
      
      const monthsTogether = now.getMonth() - startDate.getMonth() + (12 * (now.getFullYear() - startDate.getFullYear()))
      const nextMonthversary = new Date(startDate)
      nextMonthversary.setMonth(startDate.getMonth() + monthsTogether + 1)

      const until = nextMonthversary.getTime() - now.getTime()
      const totalSecToNext = Math.floor(until / 1000)

      const d = Math.floor(totalSecToNext / (60 * 60 * 24))
      const h = Math.floor((totalSecToNext % (60 * 60 * 24)) / 3600)
      const m = Math.floor((totalSecToNext % 3600) / 60)
      const s = totalSecToNext % 60

      setUntilNextMonth({ days: d, hours: h, minutes: m, seconds: s })
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])
  const photos = [
    '/photos/1.jpeg',
    '/photos/2.jpeg',
    '/photos/3.jpeg',
  ]

  return (
    <main className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-pink-600 mb-4">
        Estamos juntos há:
      </h1>
      <p className="text-2xl md:text-3xl text-pink-700 mb-6">
        {timeTogether.days} dias, {String(timeTogether.hours).padStart(2, '0')}h :{' '}
        {String(timeTogether.minutes).padStart(2, '0')}m :{' '}
        {String(timeTogether.seconds).padStart(2, '0')}s 💕
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {photos.map((src, index) => (
          <Image
            key={index}
            width={500}
            height={500}
            src={src}
            alt={`Foto ${index + 1}`}
            className="rounded-xl shadow-md w-full object-cover max-h-72"
          />
        ))}
      </div>

      <h2 className="text-xl md:text-2xl font-semibold text-pink-700 mt-16">
        Próximo mêsversário em:
      </h2>
      <p className="text-lg md:text-xl text-pink-800 mb-8">
        {untilNextMonth.days} dias, {String(untilNextMonth.hours).padStart(2, '0')}h :{' '}
        {String(untilNextMonth.minutes).padStart(2, '0')}m :{' '}
        {String(untilNextMonth.seconds).padStart(2, '0')}s ⏳💖
      </p>

    </main>
  )
}
