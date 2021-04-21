import React from 'react'
import './PostBox.css'
import ProfileIcon from './ProfileIcon'
import { GoVerified } from 'react-icons/go'
import { IoEllipsisHorizontal, IoSyncOutline, IoChatbubbleOutline } from 'react-icons/io5'
import { FaRegComment } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsUpload } from 'react-icons/bs'

function PostBox({src_img, name, username, time, comment}) {
    const interactions_icons = [ [IoChatbubbleOutline, "comment"], [IoSyncOutline, "sync"], [AiOutlineHeart, "heart"], [BsUpload, "upload"] ]

    const interaction_icon = (Icon, name) => {
        return(
            <div className="interaction__item">
                <div className={`icon ${name}__icon`}>
                    <Icon className="interaction__icon"></Icon>
                </div>
                {
                    name === "upload" ? "" : <span className={`interactions__number ${name}__number`}>{Math.floor(Math.random() * (300 - 50 + 1) ) + 50}</span>
                }
            </div>
        )
    }

    return (
        <div className="post__box">
            <div className="post__box__header">
                <ProfileIcon src={"https://pbs.twimg.com/profile_images/1356180867253755905/jmrge3dT_400x400.jpg"}></ProfileIcon>
                <div className="profile__informations">
                    <div className="top__informations">
                        <span className="name"><strong>{name}</strong></span>
                        <GoVerified className="verified__icon"></GoVerified>
                        <span className="username">{username}</span>
                        <span className="point"> · </span>
                        <span className="time">{time}</span>
                        <div className="ellipsis">
                            <IoEllipsisHorizontal className="ellipsis__icon"></IoEllipsisHorizontal>
                        </div>
                    </div>
                    <div className="bottom__informations">
                        <span className="comment">{comment}</span>
                    </div>
                </div>
            </div>
            { src_img && 
            <div className="post__img__box">
                <img className="post__img" src={src_img}></img>
            </div>
            }
            <div className="interactions">
                {
                    interactions_icons.map(
                        icon => interaction_icon(icon[0], icon[1]) 
                    )
                }
            </div>
        </div>
    )
}

export default PostBox;
