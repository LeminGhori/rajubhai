import React, { useEffect, useState } from 'react';
import Loader from "../../assets/image/icons/icon-1.png";
import Navbar from './Navbar';
import Screen1 from './Screen1';
import Fechars from './Fechars';
import Screen2 from './Screen2';
import Contect from './Contect';
import Footer from './Footer';
function Home() {
    const [isLoader, setIsLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoader(false);
        }, 1000);
    }, []);
    return (
        <>
            {
                isLoader ?
                    <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                        <div className="spinner-border position-relative text-primary" style={{ width: "6rem", height: "6rem" }} role="status"></div>
                        <img className="position-absolute top-50 start-50 translate-middle" src={Loader} alt="Icon" />
                    </div> :
                    <>
                        <Navbar />
                        <section id="home">
                            <Screen1 />
                        </section>
                        <Fechars />
                        <section id="about-us">
                            <Screen2 />
                        </section>
                        <section id="contact">
                            <Contect />
                        </section>
                        <Footer />
                    </>
            }
        </>
    )
}

export default Home;