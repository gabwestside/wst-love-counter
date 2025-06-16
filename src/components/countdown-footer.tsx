import { Countdown } from '@/utils/constants'

export const CountdownFooter = ({ title, time }: Countdown) => {
  return (
    <>
      <h2 className='text-xl md:text-2xl font-semibold text-pink-700 mt-16'>
        {title}
      </h2>
      <p className='text-lg md:text-xl text-pink-800 mb-8'>
        {time.days} dias,{' '}
        {String(time.hours).padStart(2, '0')}h :{' '}
        {String(time.minutes).padStart(2, '0')}m :{' '}
        {String(time.seconds).padStart(2, '0')}s ⏳💖
      </p>
    </>
  )
}
