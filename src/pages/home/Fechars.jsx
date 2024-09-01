import React, { useEffect } from 'react';
import WOW from 'wowjs'; // Ensure this is the correct import based on your installed package
import Icon1 from "../../assets/image/icons/icon-2.png";
import Icon2 from "../../assets/image/icons/icon-3.png";
import Icon3 from "../../assets/image/icons/icon-4.png";
import Icon4 from "../../assets/image/icons/icon-5.png";
import 'animate.css';

function Fechars() {
    useEffect(() => {
        new WOW.WOW().init(); // Ensure the correct initialization method
    }, []);

    const features = [
        {
            icon: Icon4,
            title: "Design Approach",
            description: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
            delay: "0.1s"
        },
        {
            icon: Icon2,
            title: "Innovative Solutions",
            description: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
            delay: "0.3s"
        },
        {
            icon: Icon1,
            title: "Project Management",
            description: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
            delay: "0.5s"
        },
        {
            icon: Icon3,
            title: "Customer Support",
            description: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
            delay: "0.7s"
        }
    ];

    return (
        <div className="container-xxl py-5">
            <div className="container pt-5">
                <div className="row g-4">
                    {features.map((feature, index) => (
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={feature.delay} key={index}>
                            <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                                <div className="fact-icon">
                                    <img src={feature.icon} alt="Icon" />
                                </div>
                                <h3 className="mb-3">{feature.title}</h3>
                                <p className="mb-0">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Fechars;
