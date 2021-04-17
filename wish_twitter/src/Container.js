import React from 'react'
import './Container.css'
import CircularIcon from './CircularIcon'
import { WiStars } from 'react-icons/wi'
import ProfileIcon from './ProfileIcon'

import {IoImageOutline} from 'react-icons/io5'
import { RiFileGifLine, RiBarChartHorizontalFill } from 'react-icons/ri'
import { FiSmile } from 'react-icons/fi'
import { VscCalendar } from 'react-icons/vsc'

function Container() {
    const icons = [IoImageOutline, RiFileGifLine, RiBarChartHorizontalFill, FiSmile, VscCalendar]
    return (
        <div className="container">
            <div className="tweet__box">
                <div className="tweet__box__header">
                    <span>Home</span>
                    <CircularIcon Icon={WiStars}></CircularIcon>
                </div>
                <div className="tweet__message">
                    <ProfileIcon src={"https://i.ibb.co/1bzYF2H/Captura-de-ecra-2021-04-04-a-s-12-16-20.png"}></ProfileIcon>
                    <input type="text" placeholder="What's happening?"></input>
                </div>
                <div className="tweet__icons">
                    <div className="icon__group">
                        {
                            icons.map(
                                Icon => <Icon className="tweet__icon"></Icon>
                            )
                        }
                    </div>
                    <div className="make__tweet">
                        <span>Tweet</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container
