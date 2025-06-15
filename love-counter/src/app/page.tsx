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

  useEffect(() => {
    const startDate = new Date('2025-03-01T00:00:00')

    const updateTime = () => {
      const now = new Date()
      const diff = now.getTime() - startDate.getTime()

      const totalSeconds = Math.floor(diff / 1000)
      const days = Math.floor(totalSeconds / (60 * 60 * 24))
      const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600)
      const minutes = Math.floor((totalSeconds % 3600) / 60)
      const seconds = totalSeconds % 60

      setTimeTogether({ days, hours, minutes, seconds })
    }

    updateTime() // atualiza imediatamente
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  const photos = [
    '/photos/1.jpeg',
    '/photos/2.jpeg',
    '/photos/3.jpeg',
  ]

  return (
    <main className='min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4 text-center'>
      <h1 className='text-3xl md:text-5xl font-bold text-pink-600 mb-4'>
        Estamos juntos há:
      </h1>
      <p className='text-2xl md:text-3xl text-pink-700'>
        {timeTogether.days} dias, {timeTogether.hours.toString().padStart(2, '0')}h :{' '}
        {timeTogether.minutes.toString().padStart(2, '0')}m :{' '}
        {timeTogether.seconds.toString().padStart(2, '0')}s 💕💍🔒⏳
      </p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
        {photos.map((src, index) => (
          <Image
            key={index}
            width={500}
            height={500}
            src={src}
            alt={`Foto ${index + 1}`}
            className='rounded-xl shadow-md w-full object-cover max-h-72'
          />
        ))}
      </div>
    </main>
  )
}
