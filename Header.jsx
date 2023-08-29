import React from "react";
import Navbar from "./Navbar";

function Header() {
    return (

        <div id="main">
            <Navbar></Navbar>
            <div className="name">
                <h1><span>Launch Your App</span>With Condifence and Creative</h1>
                <p className="details">A mobile app (or mobile application) is a software application developed specifically for use on small, wireless computing devices, such as smartphones and tablets, rather than desktop or laptop computers.</p>
                <a href="#" className="cv-btn">Load Now</a>
            </div>
        </div>
    );
}

export default Header;