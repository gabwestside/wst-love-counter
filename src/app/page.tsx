'use client'

import { CountdownFooter } from '@/components/countdown-footer'
import { FloatingHearts } from '@/components/floating-hearts'
import { LoveHeader } from '@/components/love-header'
import { PhotoGrid } from '@/components/photo-grid'
import { datingStartTime, initialDateState, photos } from '@/utils/constants'
import {
  getRelationshipDuration,
  getTimeToNextMonthversary,
} from '@/utils/love-counter'
import { useEffect, useState } from 'react'

export default function Home() {
  const [timeTogether, setTimeTogether] = useState(initialDateState)
  const [untilNextMonth, setUntilNextMonth] = useState(initialDateState)

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date()

      const { days, hours, minutes, seconds } = getRelationshipDuration(
        datingStartTime,
        currentTime
      )

      setTimeTogether({ days, hours, minutes, seconds })

      const {
        days: d,
        hours: h,
        minutes: m,
        seconds: s,
      } = getTimeToNextMonthversary(currentTime, datingStartTime)

      setUntilNextMonth({ days: d, hours: h, minutes: m, seconds: s })
    }

    updateTime()

    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className='min-h-screen bg-pink-100 flex flex-col items-center justify-center p-6 text-center'>
      <LoveHeader title='Estamos juntos há:' time={timeTogether} />

      <PhotoGrid photos={photos} />

      <CountdownFooter title='Próximo mêsversário em:' time={untilNextMonth} />

      <FloatingHearts />
    </main>
  )
}
