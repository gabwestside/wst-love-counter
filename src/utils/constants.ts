export const photos = ['/photos/1.jpeg', '/photos/2.jpeg', '/photos/3.jpeg']

export const initialDateState = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
}

export const datingStartTime = new Date('2025-03-01T00:00:00')

export const heartEmojis = [
  '💖',
  '💕',
  '💘',
  '💝',
  '❤️',
  '🩷',
  '❤️‍🔥',
  '💗',
  '💌',
  '💟',
  '😍',
  '🥰',
  '😘',
  '😽',
  '😻',
  '🫀',
]

export type Countdown = {
  title: string
  time: {
    days: number
    hours: number
    minutes: number
    seconds: number
  }
}
