import React from 'react'
import './TrendItem.css'
import { IoEllipsisHorizontalSharp } from 'react-icons/io5'

function TrendItem({title}) {
    return (
        <div className="trend__item">
            <div className="trend__item__header">
                <span>Trending in Portugal</span>
                <IoEllipsisHorizontalSharp class="trend__ellipsis"></IoEllipsisHorizontalSharp>
            </div>
            <span className="trend__title">{title}</span>
            <span className="tweets__number">1,832 tweets</span>
        </div>
    )
}

export default TrendItem