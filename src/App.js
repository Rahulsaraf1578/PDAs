import React from 'react'
import ProfileCard from './ProfileCard'

function App() {
  return (
    <div>
        <div>
            Personal digital assistance
        </div>

        <ProfileCard 
            title="Alexa" 
            handle="@alexa99"
        />

        <ProfileCard 
            title="Cortona" 
            handle="@cortona32"
        />
        
        <ProfileCard 
            title="Siri" 
            handle="@siri01"
        />
        
    </div>
  )
}

export default App