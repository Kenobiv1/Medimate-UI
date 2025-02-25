import React, { useState } from 'react'

const VoiceAssistant = () => {
  const [listening, setListening] = useState(false)
  const [transcript, setTranscript] = useState('')

  const handleVoiceCommand = () => {
    setListening(true)
    setTranscript('Listening...')
    // Simulate voice processing delay
    setTimeout(() => {
      setTranscript('How can I assist you with your medication?')
      setListening(false)
    }, 2000)
  }

  return (
    <div className="screen voice-assistant">
      <h2>AI Voice Assistant</h2>
      <div className="voice-panel">
        <button className="mic-btn" onClick={handleVoiceCommand}>
          {listening ? 'Listening...' : 'Start Voice Command'}
        </button>
        <div className="transcript">
          <p>{transcript}</p>
        </div>
      </div>
    </div>
  )
}

export default VoiceAssistant
