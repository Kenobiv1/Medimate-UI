import React from 'react'

const BottomNav = ({ onNavSelect }) => {
  return (
    <div className="bottom-nav">
      <button onClick={() => onNavSelect('Home')}>Home</button>
      <button onClick={() => onNavSelect('Medications')}>Medications</button>
      <button onClick={() => onNavSelect('Reminders')}>Reminders</button>
      <button onClick={() => onNavSelect('History')}>History</button>
      <button onClick={() => onNavSelect('Settings')}>Settings</button>
      <button onClick={() => onNavSelect('Help')}>Help</button>
    </div>
  )
}

export default BottomNav
