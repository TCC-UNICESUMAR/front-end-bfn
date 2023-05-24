import React from "react";
import "./Index.css";

function Input({ type, name, placeholder, handleOnChange, value }) {
    return (
        <div className="single-input">
            <input 
                type={type}
                name={name}
                id={name}
                onChange={handleOnChange}
                value={value}
                required
            />
            <label className="placeholder-off">{placeholder}</label>
        </div>
    );
};

export default Input;