import React from "react";
import "./Index.css";

function Button({ value, type }) {
    return (
        <div className="button">
            <input 
                type={type}
                onChange={''}
                value={value}
            />
        </div>
    );
};

export default Button;