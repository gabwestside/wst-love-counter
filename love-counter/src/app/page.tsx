'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [daysTogether, setDaysTogether] = useState(0)

  useEffect(() => {
    const startDate = new Date('2025-03-01')
    const today = new Date()
    const diffTime = today.getTime() - startDate.getTime()
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    setDaysTogether(diffDays)
  }, [])

  const photos = ['/photos/1.jpg', '/photos/2.jpg', '/photos/3.jpg']

  return (
    <main className='min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4'>
      <h1 className='text-3xl md:text-5xl font-bold text-pink-600 mb-4'>
        Estamos juntos há {daysTogether} dias e contando... 💕💍🔒⏳
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
        {photos.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Foto ${index + 1}`}
            className='rounded-xl shadow-md w-full object-cover max-h-72'
          />
        ))}
      </div>
    </main>
  )
}
