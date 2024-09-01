import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/image/icons/icon-1.png';
import ReusableDialog from '../../component/ReusableDialog';

function Navbar() {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [navClass, setNavClass] = useState('collapse navbar-collapse');
    const [stickyClass, setStickyClass] = useState('');
    const [activeSection, setActiveSection] = useState('home');
    const collapseRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseDialog = () => {
        setIsOpen(false);
    };
    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    useEffect(() => {
        if (isCollapsed) {
            setNavClass('collapse navbar-collapse collapsing');
            setTimeout(() => setNavClass('collapse navbar-collapse'), 350);
        } else {
            setNavClass('collapse navbar-collapse collapsing');
            setTimeout(() => setNavClass('collapse navbar-collapse show'), 350);
        }
    }, [isCollapsed]);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about-us');
            const contactSection = document.getElementById('contact');

            if (window.scrollY > 100) {
                setStickyClass('sticky-top-custom shadow-sm');
            } else {
                setStickyClass('');
            }

            if (contactSection && window.scrollY >= contactSection.offsetTop - 100) {
                setActiveSection('contact');
            } else if (aboutSection && window.scrollY >= aboutSection.offsetTop - 100) {
                setActiveSection('about');
            } else {
                setActiveSection('home');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSmoothScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 70, // Adjust the offset for the navbar height
                behavior: 'smooth',
            });
        }
    };

    const handleYesClick = () => {
        console.log("Yes clicked");
        setIsOpen(false);
      };

    return (
        <nav className={`navbar navbar-expand-lg bg-white navbar-light ${stickyClass} py-lg-0 px-lg-5 wow fadeIn`} data-wow-delay={`${stickyClass ? '0.35s' : '0'}`}>
            <Link to="/" className="navbar-brand ms-4 ms-lg-0" onClick={() => handleSmoothScroll('home')}>
                <h1 className="text-primary m-0">
                    <img className="me-3" src={Logo} alt="Icon" />Arkitektur
                </h1>
            </Link>
            <button
                type="button"
                className={`navbar-toggler me-4 ${isCollapsed ? 'collapsed' : ''}`}
                onClick={handleToggle}
                aria-expanded={!isCollapsed}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={navClass} id="navbarCollapse" ref={collapseRef}>
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <div
                        to="/"
                        className={`nav-item nav-link ${activeSection === 'home' ? 'active' : ''}`}
                        onClick={() => handleSmoothScroll('home')}
                    >
                        Home
                    </div>
                    <div
                        to="/"
                        className={`nav-item nav-link ${activeSection === 'about' ? 'active' : ''}`}
                        onClick={() => handleSmoothScroll('about-us')}
                    >
                        ABOUT
                    </div>
                    <div
                        to="/"
                        className={`nav-item nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                        onClick={() => handleSmoothScroll('contact')}
                    >
                        CONTACT
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button className="btn btn-primary py-2 px-4 d-none d-lg-block">LOGIN</button>
                    </div>
                </div>
            </div>
            <button onClick={() => setIsOpen(true)}>Open Dialog</button>
            <ReusableDialog
                isOpen={isOpen}
                onClose={handleCloseDialog}
                onYes={handleYesClick}
                title="Confirmation"
            >
                Are you sure you want to proceed?
            </ReusableDialog>
        </nav>
    );
}

export default Navbar;
