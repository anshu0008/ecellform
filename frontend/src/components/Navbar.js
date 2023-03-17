import React from "react"
import './Navbar.css'
export default function Navbar(props) {
    return (
         <nav 
            className={props.darkMode ? "dark": ""}
        >
            <img 
                className="nav--logo_icon"
                src={props.darkMode?"https://ecellvssut.tech/assets/img/Ecelllogo.png" : "https://ecellvssut.tech/assets/img/apple-touch-icon.png"}
                alt="react"
            />
            
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}