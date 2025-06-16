'use client'
import { heartEmojis } from '@/utils/constants'
import { useEffect, useState } from 'react'

interface Heart {
  id: number
  left: number
  delay: number
  rotation: number
  size: number
  duration: number
  emoji: string
}

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart: Heart = {
        id: Date.now(),
        left: Math.random() * 100,
        delay: Math.random() * 2,
        rotation: Math.random() * 360,
        size: 1 + Math.random() * 0.6,
        duration: 4 + Math.random() * 3,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
      }

      setHearts((prev) => [...prev, newHeart])

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id))
      }, newHeart.duration * 1000 + 1000)
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-10'>
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className='absolute animate-heart-float'
          style={{
            left: `${heart.left}%`,
            bottom: '-40px',
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${heart.size}rem`,
            transform: `rotate(${heart.rotation}deg)`,
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  )
}
