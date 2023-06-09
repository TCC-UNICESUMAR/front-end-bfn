import React from "react";
import "./Index.css";

//Imagens
import logo from '../../../assets/image/Logo.png';

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} />
            </div>
        </div>
    );
};

export default Header;