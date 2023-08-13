import React from 'react';
import './switch.scss';

export default function Switch() {
    return (
        <div>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>
    )
}
