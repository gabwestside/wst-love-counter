export function getRelationshipDuration(
  startDate: Date,
  endDate: Date = new Date()
) {
  const diff = endDate.getTime() - startDate.getTime()
  const totalSeconds = Math.floor(diff / 1000)
  const days = Math.floor(totalSeconds / (60 * 60 * 24))
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds }
}

export function getTimeToNextMonthversary(now: Date, startDate: Date) {
  const nextMonth = new Date(startDate)
  nextMonth.setMonth(now.getMonth())
  nextMonth.setFullYear(now.getFullYear())

  if (now > nextMonth) {
    nextMonth.setMonth(nextMonth.getMonth() + 1)
  }

  const diffMs = nextMonth.getTime() - now.getTime()

  const seconds = Math.floor((diffMs / 1000) % 60)
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60)
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24)
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  return { days, hours, minutes, seconds }
}
