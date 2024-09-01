import React from 'react';
import Loader from "../../assets/image/icons/icon-1.png";
function Home() {
    return (
        <div>
            <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-border position-relative text-primary" style={{ width: "6rem", height: "6rem" }} role="status"></div>
                <img className="position-absolute top-50 start-50 translate-middle" src={Loader} alt="Icon" />
            </div>
        </div>
    )
}

export default Home;