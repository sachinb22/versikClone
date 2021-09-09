import React from 'react'
import './style.scss'
import ImageOne from '../../../assets/images/icon1.png'
const Services = () => {
    return (
        <section className="services">
            <div className="title">Our Services</div>
            <div className="card-div">
                <div className="card">
                    <img src={ImageOne} alt="" />
                    <div>Software and <br></br>application development</div>
                </div>
                <div className="card">
                    <img src={ImageOne} alt="" />
                    <div>Software and <br></br>application development</div>
                </div>
                <div className="card">
                    <img src={ImageOne} alt="" />
                    <div>Software and <br></br>application development</div>
                </div>
                <div className="card">
                    <img src={ImageOne} alt="" />
                    <div>Software and <br></br>application development</div>
                </div>
                <div className="card">
                    <img src={ImageOne} alt="" />
                    <div>Software and <br></br>application development</div>
                </div>
                <div className="card">
                    <img src={ImageOne} alt="" />
                    <div>Software and <br></br>application development</div>
                </div>
            </div>
        </section>
    )
}
export default Services