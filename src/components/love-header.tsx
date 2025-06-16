import { Countdown } from '@/utils/constants'

export const LoveHeader = ({ title, time }: Countdown) => {
  return (
    <>
      <h1 className='text-3xl md:text-5xl font-bold text-pink-600 mb-4'>
        {title}
      </h1>
      <p className='text-2xl md:text-3xl text-pink-700 mb-6'>
        {time.days} dias, {String(time.hours).padStart(2, '0')}h :{' '}
        {String(time.minutes).padStart(2, '0')}m :{' '}
        {String(time.seconds).padStart(2, '0')}s 💕
      </p>
    </>
  )
}
