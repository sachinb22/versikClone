import React from 'react'
import Navbar from './containers/Navbar'
import './LandingLayout.scss'
import JoinTeam from './views/JoinOurTeam'
import Map from './views/Map'
import Welcome from './views/Welcome'
import WhoWeAre from './views/WhoWeAre'
import Footer from './containers/Footer'
import Services from './views/Services'
import WhatWeDo from './views/WhatWeDo'

const LandingLayout = () => {
    return (
        <div>
            <Navbar />
            <Welcome />
            <WhoWeAre />
            <WhatWeDo />
            <Services />
            <JoinTeam />
            <Map />
            <Footer />

        </div>
    )
}
export default LandingLayout