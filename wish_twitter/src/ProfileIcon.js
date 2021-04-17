import React from 'react'
import './ProfileIcon.css'

function ProfileIcon({src}) {
    return (
        <div className="profile__icon">
            <img src={src}></img>
        </div>
    )
}

export default ProfileIcon
