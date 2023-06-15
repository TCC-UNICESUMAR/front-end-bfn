import React from "react";
import "./Index.css";

import { Link } from 'react-router-dom';

import profile from '../../../assets/image/profile.png'

//Imagens
import logo from '../../../assets/image/Logo.png';

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="routes">
                <Link className="link" to={"/myDonates"}>
                    <p>Minhas doações</p>
                </Link>
                <Link className="link" to={"/feed"}>
                    <p>Feed</p>
                </Link>
                <Link className="link" to={"/registerProduct"}>
                    <p>Doar</p>
                </Link>
            </div>
            <div className="profile">
                <Link to={"/profile"}>
                    <img src={profile}/>
                </Link>
            </div>
        </div>
    );
};

export default Header;