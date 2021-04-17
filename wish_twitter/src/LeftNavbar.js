import React, { useState } from 'react'
import './LeftNavbar.css'
import NavbarItem from './NavbarItem'

import { BiHomeCircle, BiEnvelope, BiDotsHorizontalRounded } from 'react-icons/bi'
import { HiHashtag } from 'react-icons/hi'
import { IoPersonOutline } from 'react-icons/io5'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BsBookmark } from 'react-icons/bs'
import { RiFileListLine } from 'react-icons/ri'
import { CgMoreO } from 'react-icons/cg'
import { FaTwitter } from 'react-icons/fa'
import { setActiveNavbar } from './navbarSlice'
import CircularIcon from './CircularIcon'

const navbar__icons = [
    [
        BiHomeCircle, "Home"
    ],
    [
        HiHashtag, "Explore"
    ],
    [
        IoMdNotificationsOutline, "Notifications"
    ],
    [
        BiEnvelope, "Messages"
    ],
    [
        BsBookmark, "Bookmarks"
    ],
    [
        RiFileListLine, "Lists"
    ],
    [
        IoPersonOutline, "Profile"
    ],
    [
        CgMoreO, "More"
    ]
]

function LeftNavbar() {
    const [activeTab, setActiveTab] = useState("Home")
    return (
        <div className="left__navbar">
            <div className="left__header">
                <CircularIcon Icon={FaTwitter}></CircularIcon>
                <div className="navbar__icons">
                    {
                        navbar__icons.map(
                            icon => <NavbarItem Icon={icon[0]} name={icon[1]}></NavbarItem>
                        )
                    }
                </div>
                <div className="tweet__button">
                    <span>Tweet</span>
                </div>
                <div className="user__button">
                    <img src="https://i.ibb.co/1bzYF2H/Captura-de-ecra-2021-04-04-a-s-12-16-20.png"></img>
                    <div className="name__nickname">
                        <span className="name">Bruno Afonso</span>
                        <span className="nickname">@Bruno012312312</span>
                    </div>
                    <BiDotsHorizontalRounded className="points"></BiDotsHorizontalRounded>
                </div>
            </div>
        </div>
    )
}

export default LeftNavbar
