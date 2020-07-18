import React from 'react';

import './switch.css'

export default function Switch() {
    function handleChange() {
        document.body.classList.toggle('is-dark-mode');
    }
    return (
        <div className="dark-mode">
            <p className="dark-mode-title">Dark Mode</p>
            <input onChange={ handleChange } type="checkbox" className="checkbox" id="checkbox"/>
            <label className="switch" htmlFor="checkbox"></label>
        </div>     
    );
}