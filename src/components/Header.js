import React from "react";
import NavBar from "./NavBar";

function Header() {
    return (
        <header className="header">
            <h1>
                <img className="icon" src="/assets/icons/sneakers (3).png" alt="sneaker" />
                <img className="icon" src="/assets/icons/sneakers (2).png" alt="sneaker" />
                <img className="icon" src="/assets/icons/sneakers (1).png" alt="sneaker" />
                <img className="icon" src="/assets/icons/sneakers.png" alt="sneaker" />  
                Sneaker Haus  
                <img className="icon" src="/assets/icons/sneakers.png" alt="sneaker" /> 
                <img className="icon" src="/assets/icons/sneakers (1).png" alt="sneaker" />
                <img className="icon" src="/assets/icons/sneakers (2).png" alt="sneaker" />
                <img className="icon" src="/assets/icons/sneakers (3).png" alt="sneaker" />
            </h1>
            <nav className="nav">
            <NavBar />
            </nav>
        </header>
    )
}

export default Header