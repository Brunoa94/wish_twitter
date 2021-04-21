import React from 'react'
import './RightNavbar.css'
import { BsSearch } from 'react-icons/bs'
import { IoSettingsOutline } from 'react-icons/io5'
import TrendItem from './TrendItem'

function RightNavbar() {
    return (
        <div className="right__navbar">
            <div className="search__box">
                <BsSearch className="search__icon"></BsSearch>
                <input placeholder="Search Twitter"></input>
            </div>
            <div className="trends">
                <div className="trends__header">
                    <span>Trends for you</span>
                    <IoSettingsOutline className="settings__icon"></IoSettingsOutline>
                </div>
                <TrendItem title={"McBifana"}></TrendItem>
                <TrendItem title={"McBifana"}></TrendItem>
                <TrendItem title={"McBifana"}></TrendItem>
                <TrendItem title={"McBifana"}></TrendItem>
                <div className="show__more">
                    <span>Show More</span>
                </div>
            </div>
            
        </div>
    )
}

export default RightNavbar
