import React from 'react'

const Settings = () => {
  return (
    <div className="screen settings">
      <h2>User Settings</h2>
      <div className="profile">
        <p>Name: John Doe</p>
        <p>Email: john@example.com</p>
      </div>
      <div className="security">
        <h3>Security & Privacy</h3>
        <p>PIN: ****</p>
        <button onClick={() => alert('Change PIN')}>Change PIN</button>
      </div>
      <div className="theme-settings">
        <h3>Theme Options</h3>
        <button onClick={() => alert('Light Mode')}>Light Mode</button>
        <button onClick={() => alert('Dark Mode')}>Dark Mode</button>
      </div>
    </div>
  )
}

export default Settings
