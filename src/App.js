import React from 'react'
import ProfileCard from './ProfileCard'
import AlexaImage from './img/alexa.png'
import CortonaImage from './img/cortana.png'
import SiriImage from './img/siri.png'
import 'bulma/css/bulma.css'

function App() {
  return (
    <div>
        <section className="hero is-primary">
            <div className="hero-body">
                <p className="title">
                    Personal digital assistance
                </p>
            </div>
        </section>

        <div className="container">
            <section className="section">
                <div className="columns">
                    <div className="column is-4">
                        <ProfileCard 
                            title="Alexa" 
                            handle="@alexa99"
                            image = {AlexaImage}
                            description = "It was created by Amazon"
                        />
                    </div>

                    <div className="column is-4">
                        <ProfileCard 
                            title="Cortona" 
                            handle="@cortona32"
                            image = {CortonaImage}
                            description = "Created by Microsoft"
                        />
                    </div>

                    <div className="column is-4">
                        <ProfileCard 
                            title="Siri" 
                            handle="@siri01"
                            image = {SiriImage}
                            description = "Created by Apple and is being based out"
                        />
                    </div>
                </div>
            </section>
        </div>

    </div>
  )
}

export default App