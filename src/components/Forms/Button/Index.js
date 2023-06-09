import React from "react";
import "./Index.css";

function Button({ value }) {
    return (
        <div className="button">
            <input 
                type="submit"
                onChange={''}
                value={value}
            />
        </div>
    );
};

export default Button;