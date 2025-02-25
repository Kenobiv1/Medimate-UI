import React, { useState, useEffect } from 'react'

const Settings = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className="screen settings">
      <h2>User Settings</h2>
      <div className="profile">
        <p>Name: John Doe</p>
        <p>Email: john@example.com</p>
      </div>
      <div className="security">
        <h3>Security &amp; Privacy</h3>
        <p>PIN: ****</p>
        <button onClick={() => alert('Change PIN')}>Change PIN</button>
      </div>
      <div className="theme-settings">
        <h3>Theme Options</h3>
        <button onClick={() => setTheme('light')} disabled={theme === 'light'}>Light Mode</button>
        <button onClick={() => setTheme('dark')} disabled={theme === 'dark'}>Dark Mode</button>
      </div>
    </div>
  )
}

export default Settings
