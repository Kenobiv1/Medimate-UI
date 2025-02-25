import React, { useState, useEffect } from 'react'

const ReminderScreen = () => {
  const [countdown, setCountdown] = useState(3600) // seconds until next dose

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}m ${s}s`
  }

  return (
    <div className="screen reminder-screen">
      <h2>Reminders</h2>
      <div className="calendar-placeholder">
        <p>[Calendar Widget]</p>
      </div>
      <div className="reminder-settings">
        <label>
          <input type="checkbox" defaultChecked /> Sound
        </label>
        <label>
          <input type="checkbox" defaultChecked /> Vibration
        </label>
        <label>
          <input type="checkbox" defaultChecked /> Pop-up Notifications
        </label>
      </div>
      <div className="countdown-timer">
        <p>Next dose in: {formatTime(countdown)}</p>
      </div>
    </div>
  )
}

export default ReminderScreen
