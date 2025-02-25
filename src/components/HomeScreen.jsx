import React from 'react'

const HomeScreen = ({ onNavigate, onTriggerAlarm }) => {
  return (
    <div className="screen home-screen">
      <h2>Welcome to Medimate</h2>
      <div className="home-actions">
        <button className="action-btn" onClick={() => alert('Dispensing medication...')}>
          Dispense Now
        </button>
        <button className="action-btn" onClick={() => onNavigate('Reminders')}>
          Set Reminder
        </button>
        <button className="action-btn" onClick={() => onNavigate('Voice')}>
          Voice Assistant
        </button>
      </div>
      <div className="home-extra">
        <button onClick={() => onNavigate('Medications')}>
          View Medications
        </button>
        <button onClick={() => onTriggerAlarm()}>
          Simulate Alarm
        </button>
      </div>
    </div>
  )
}

export default HomeScreen
