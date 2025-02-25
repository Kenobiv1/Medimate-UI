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
      <div className="top-banner-content">
        <div className="time-info">
          <span className="date">{currentTime.format('ddd, MMM D')}</span>
          <span className="time">{currentTime.format('HH:mm')}</span>
        </div>
        <div className="status-info">
          <span className="next-dose">Next: 14:00</span>
          <span className="connection">Connected</span>
        </div>
      </div>
    </div>
  )
}

export default TopBanner
