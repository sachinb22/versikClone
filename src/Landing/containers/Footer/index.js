import React from 'react'
import './style.scss'
import Logo from '../../../assets/images/logo.png'
import LogoVn from '../../../assets/images/logo-vn.png'
import BackgrondImg from '../../../assets/images/footer-bg.png'
const Footer = () => {
    return (
        <>
            <section className="information">
                <div className="bg-img">
                </div>
                <div className="details-div">
                    <div className="details">
                        <img src={LogoVn} alt="" />
                        <div>Versik Nepal Pvt Ltd</div>
                        <div> Kathmandu Nepal</div>
                        <div>basnetsachin53@gmail.com +977 981234567</div>
                    </div>
                </div>
            </section>
            <section className="footer d-flex">
                <div className="container ">
                    <img src={Logo} alt="" />
                    <div>Versik Nepal is a Versik business</div>
                </div>
                <div className="container">
                    <div>Privacy Notice</div>
                    <div>@ 2021, Versik Nepal Private Limited</div>
                </div>
                <div className="container">
                    <p>VERSIK ANALYTICS<sup>®</sup></p>
                </div>
            </section>
        </>
    )
}
export default Footer