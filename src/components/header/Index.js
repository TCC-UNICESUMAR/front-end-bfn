import React from "react";
import "./Index.css";

//Imagens
import my_donations from '../../assets/image/my_donates.png';
import donate from '../../assets/image/donate.png';
import chat from '../../assets/image/chat.png';
import profile from '../../assets/image/profile.png';

function Header() {
    return (
        <div className="header">
            <div className="central">
                <div className="session_header">
                    <img src={my_donations} />
                    <h4>Minhas <br/> doações</h4>
                </div>
                <div className="session_header">
                    <img src={donate} />
                    <h4>Doar</h4>
                </div>
                <div className="session_header">
                    <img src={chat} />
                    <h4>Chat</h4>
                </div>
            </div>
            <div className="session_header">
                <img src={profile} />
            </div>
        </div>
    );
};

export default Header;