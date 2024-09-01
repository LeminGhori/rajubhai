import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    const handleSmoothScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: 0, // Adjust the offset for the navbar height
                behavior: 'smooth',
            });
        }
    };
    return (
        <div className="container-fluid bg-dark text-body footer px-0 wow fadeIn" data-wow-delay="0.1s">
            <div className="container-fluid copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a onClick={() => { handleSmoothScroll('home') }}>Your Site Name</a>, All Right Reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            Connect <Link to="">contactus@awsomellc.com</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer