import React from 'react'
import Icon1 from "../../assets/image/icons/icon-2.png";
import Icon2 from "../../assets/image/icons/icon-3.png";
import Icon3 from "../../assets/image/icons/icon-4.png";
import Img1 from "../../assets/image/about-2.jpg";
import Img2 from "../../assets/image/about-1.jpg";

function Screen2() {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="section-title">Why Choose Us!</h4>
                        <h1 className="display-5 mb-4">Why You Should Trust Us? Learn More About Us!</h1>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="d-flex align-items-start">
                                    <img className="flex-shrink-0" src={Icon1} alt="Icon" />
                                    <div className="ms-4">
                                        <h3>Design Approach</h3>
                                        <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start">
                                    <img className="flex-shrink-0" src={Icon2} alt="Icon" />
                                    <div className="ms-4">
                                        <h3>Innovative Solutions</h3>
                                        <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start">
                                    <img className="flex-shrink-0" src={Icon3} alt="Icon" />
                                    <div className="ms-4">
                                        <h3>Project Management</h3>
                                        <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="feature-img">
                            <img className="img-fluid" src={Img2} alt="" />
                            <img className="img-fluid" src={Img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Screen2