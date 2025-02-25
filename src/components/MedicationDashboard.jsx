import React from 'react'

const medications = [
  {
    id: 1,
    name: 'Aspirin',
    type: 'Solid',
    dosage: '100mg',
    frequency: 'Once daily',
    instructions: 'Take with water',
    nextDose: '08:00'
  },
  {
    id: 2,
    name: 'Cough Syrup',
    type: 'Liquid',
    dosage: '10ml',
    frequency: 'Every 6 hours',
    instructions: 'Shake well before use',
    nextDose: '12:00'
  }
]

const MedicationDashboard = () => {
  return (
    <div className="screen medication-dashboard">
      <h2>Medication List</h2>
      <div className="medication-list">
        {medications.map(med => (
          <div key={med.id} className="medication-card">
            <h3>{med.name} ({med.type})</h3>
            <p>Dosage: {med.dosage}</p>
            <p>Frequency: {med.frequency}</p>
            <p>Instructions: {med.instructions}</p>
            <p>Next Dose: {med.nextDose}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MedicationDashboard
