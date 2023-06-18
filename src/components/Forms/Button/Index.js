import React from "react";
import "./Index.css";

function Button({ value, type, onClick, background }) {
    return (
        <div className="button">
            <input
                style={{backgroundColor: background}}
                onClick={onClick}
                type={type}
                onChange={''}
                value={value}
            />
        </div>
    );
};

export default Button;