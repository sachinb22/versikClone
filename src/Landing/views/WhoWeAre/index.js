import React from 'react'
import './style.scss'
import mac from '../../../assets/images/mac.png'
import bg from '../../../assets/images/wrbg.png'

const WhoWeAre = () => {
    return (
        <section className="about" id="about">
            <div className="bg-img">
                <img src={bg} alt="" />
            </div>
            <div className="image-div">
                <img src={mac} alt="" />
            </div>
            <div className="who-are-we">
                <div>Who are we </div>
                <p>Verisk Nepal is the software development and information technology (IT) service support center for Verisk Analytics. We’re a dedicated team of software and IT professionals who provide technical support to Verisk’s businesses. At Verisk Nepal, we help our internal clients focus on their business solutions while we focus on the technology. Verisk Nepal is a wholly owned subsidiary of ISO, a Verisk Analytics business.
                </p>
            </div>
        </section>
    )
}
export default WhoWeAre