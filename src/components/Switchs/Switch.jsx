import React from 'react';
import './switch.scss';

export default function Switch() {
    return (
        <div>
            <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
            </label>
        </div>
    )
}
