import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

export default function Navbar() {
    const links = [
        {
            id: 1,
            path: '/',
            text: 'Home'
        },
        {
            id: 2,
            path: '/about',
            text: 'About'
        }
    ]

    const [navbarOpen, setnavbarOpen] = useState(false)

    const handleToogle = () => {
        setnavbarOpen(!navbarOpen)
    }

    const closeMenu = () => {
        setnavbarOpen(false)
    }

    return (
        <nav className='navBar'>
            <button onClick={handleToogle}>{navbarOpen ? (<MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />) : (<FiMenu style={{ color: "orangered", width: "40px", height: "40px" }} />)}</button>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                {links.map(link => {
                    return (
                        <li key={link.id}>
                            <NavLink to={link.path} activeClassName='active-link' exact onClick={closeMenu}>{link.text}</NavLink>
                        </li>
                    )}
                )}
            </ul>
        </nav>
    )
}
