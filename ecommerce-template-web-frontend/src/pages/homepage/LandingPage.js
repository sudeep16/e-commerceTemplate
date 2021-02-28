import React from 'react'
import './LandingPage.css'
import Carosoul from './carasoul'
function LandingPage() {
    return (
        <>
            <div className="landing__container">
                <div class="home section">
                    <div class="home__container">
                        <h1>Welcome to example Site</h1>
                    </div>
                </div>
                <Carosoul />
            </div>
        </>
    )
}

export default LandingPage;
