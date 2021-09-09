import React, { useEffect, useState } from 'react'
import Logo from '../../../assets/images/logo.png'
import './style.scss'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50;
            if (show) {
                setScrolled(true)
            } else {
                setScrolled(false);
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const scrollToTop = () => {
        scroll.scrollToTop()
    }
    return (
        <nav className={`${scrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                <img src={Logo} alt="" onClick={scrollToTop} />
            </div>
            <div className="nav-items">
                <div className="nav-item">
                    <Link activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={0}
                        duration={500}
                        delay={50}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                    >
                        Who we are
                    </Link>
                </div>
                <div className="nav-item">
                    <Link activeClass="active"
                        to="what-we-do"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={0}
                        duration={500}
                        delay={50}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                    >
                        What we do
                    </Link>
                </div>
                <div className="nav-item">
                    <Link activeClass="active"
                        to="join-our-team"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-30}
                        duration={500}
                        delay={50}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                    >
                        Join our team
                    </Link></div>
                <div className="nav-item">
                    <Link activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={100}
                        duration={500}
                        delay={50}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                    >
                        Contact
                    </Link>
                </div>
            </div>
            <div className="burger-menu">
                <span class="material-icons">
                    menu
                </span>
            </div>
        </nav>
    )
}
export default Navbar