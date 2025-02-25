import React from 'react'

const AlarmModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="alarm-modal">
        <h2 style={{ color: 'red' }}>Critical Alert!</h2>
        <p>Missed dose detected or low medication supply.</p>
        <div className="alarm-actions">
          <button onClick={onClose}>Dismiss</button>
          <button onClick={() => alert('Calling help...')}>Call Help</button>
        </div>
      </div>
    </div>
  )
}

export default AlarmModal
