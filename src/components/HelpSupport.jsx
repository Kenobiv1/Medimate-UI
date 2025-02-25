import React from 'react'

const HelpSupport = () => {
  return (
    <div className="screen help-support">
      <h2>Help & Support</h2>
      <div className="tutorial">
        <p>[Interactive Tutorial Placeholder]</p>
      </div>
      <div className="faqs">
        <h3>FAQs</h3>
        <p>Q: How do I dispense medication?</p>
        <p>A: Use the "Dispense Now" button on the Home screen.</p>
      </div>
      <button onClick={() => alert('Connecting to support...')}>Contact Support</button>
    </div>
  )
}

export default HelpSupport
