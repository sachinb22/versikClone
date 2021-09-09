import React from 'react'
import Slider from 'react-slick'
import welcome1 from '../../../assets/images/welcome1.jpg'
import welcome2 from '../../../assets/images/welcome2.jpg'
import welcome3 from '../../../assets/images/welcome3.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss'

const Welcome = () => {

    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
    };
    return (
        <section className="welcome" id="welcome">
            <div className="slider">
                <Slider {...settings}>
                    <div >
                        <div className={"image-div"}>
                            <img src={welcome1} />
                        </div>
                        <div className="fill"></div>
                        <div className="info-sec">
                            <div className="text">Verisk Nepal is the software development and information technology service support center for Verisk.
                            </div>
                            <div className='d-flex'>
                                <div className="btn-div d-flex">
                                    <button className="btn">Who are we
                                    </button>
                                    <i class="material-icons-outlined">
                                        settings
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={"image-div"}>
                            <img src={welcome2} />
                        </div>
                        <div className="fill"></div>
                        <div className="info-sec">
                            <div className="text">We focus on insurance and financial.</div>
                            <div className="d-flex">
                                <div className="btn-div d-flex">
                                    <button className="btn">What we do
                                    </button>
                                    <i class="material-icons-outlined">
                                        whatshot
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={"image-div"}>
                            <img src={welcome3} />
                        </div>
                        <div className="fill"></div>
                        <div className="info-sec">
                            <div className="text">We are looking for talented people to join our team</div>
                            <div className="d-flex">
                                <div className="btn-div d-flex">
                                    <button className="btn">Join Our Team
                                    </button>
                                    <span class="material-icons">
                                        groups
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    )
}
export default Welcome