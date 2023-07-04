import React from 'react'
import ProfileCard from './ProfileCard'
import AlexaImage from './img/alexa.png'
import CortonaImage from './img/cortana.png'
import SiriImage from './img/siri.png'
import 'bulma/css/bulma.css'

function App() {
  return (
    <div>
        <div>
            Personal digital assistance
        </div>

        <div className="container">
            <section className="section">
                <div className="columns">
                    <div className="column is-4">
                        <ProfileCard 
                            title="Alexa" 
                            handle="@alexa99"
                            image = {AlexaImage}
                        />
                    </div>

                    <div className="column is-4">
                        <ProfileCard 
                            title="Cortona" 
                            handle="@cortona32"
                            image = {CortonaImage}
                        />
                    </div>

                    <div className="column is-4">
                        <ProfileCard 
                            title="Siri" 
                            handle="@siri01"
                            image = {SiriImage}
                        />
                    </div>
                </div>
            </section>
        </div>

    </div>
  )
}

export default App