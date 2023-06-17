import React from "react";
import "./Index.css";

function Button({ value, type, onClick }) {
    return (
        <div className="button">
            <input
                onClick={onClick}
                type={type}
                onChange={''}
                value={value}
            />
        </div>
    );
};

export default Button;