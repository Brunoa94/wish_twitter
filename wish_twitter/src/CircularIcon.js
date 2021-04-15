import React from 'react'
import './CircularIcon.css'

function CircularIcon({Icon}) {
    return (
        <div className="circular__icon">
            {Icon && <Icon className="img__icon"></Icon>}
        </div>
    )
}

export default CircularIcon;
