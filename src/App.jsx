import React, { useState } from 'react'
import TopBanner from './components/TopBanner'
import BottomNav from './components/BottomNav'
import HomeScreen from './components/HomeScreen'
import MedicationDashboard from './components/MedicationDashboard'
import ReminderScreen from './components/ReminderScreen'
import VoiceAssistant from './components/VoiceAssistant'
import AlarmModal from './components/AlarmModal'
import Settings from './components/Settings'
import HelpSupport from './components/HelpSupport'
import './App.css'

function App() {
  const [activeScreen, setActiveScreen] = useState('Home')
  const [showAlarm, setShowAlarm] = useState(false)

  const renderScreen = () => {
    switch (activeScreen) {
      case 'Home':
        return <HomeScreen onNavigate={setActiveScreen} onTriggerAlarm={() => setShowAlarm(true)} />
      case 'Medications':
        return <MedicationDashboard />
      case 'Reminders':
        return <ReminderScreen />
      case 'Voice':
        return <VoiceAssistant />
      case 'Settings':
        return <Settings />
      case 'Help':
        return <HelpSupport />
      case 'History':
        return (
          <div className="screen">
            <h2>Dispensing History</h2>
            <p>No dispensing events yet.</p>
          </div>
        )
      default:
        return <HomeScreen onNavigate={setActiveScreen} onTriggerAlarm={() => setShowAlarm(true)} />
    }
  }

  return (
    <div className="app-container">
      <TopBanner />
      <div className="screen-container">
        {renderScreen()}
      </div>
      <BottomNav onNavSelect={setActiveScreen} />
      {showAlarm && <AlarmModal onClose={() => setShowAlarm(false)} />}
    </div>
  )
}

export default App
