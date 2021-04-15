import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveNavbar } from './navbarSlice'
import './NavbarItem.css'

function NavbarItem({Icon, name, handleClick}) {
    const activeNavbar = useSelector(state => state.navbarSlice.activeNavbar)
    const dispatch = useDispatch()
    return (
        <div onClick={() => dispatch(setActiveNavbar(name))} className={`navbar__item ${activeNavbar === name ? `active` : ``}`}>
            { Icon && <Icon className="navbar__icon"></Icon>}
            <span>{name}</span>
        </div>
    )
}

export default NavbarItem
