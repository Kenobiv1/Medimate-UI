import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'

const TopBanner = () => {
  const [currentTime, setCurrentTime] = useState(dayjs())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="top-banner">
      <h2>{currentTime.format('dddd, MMMM D, YYYY')}</h2>
      <h3>{currentTime.format('HH:mm:ss')}</h3>
      <p>Next Dose: 14:00</p>
      <p>Status: Connected</p>
    </div>
  )
}

export default TopBanner
