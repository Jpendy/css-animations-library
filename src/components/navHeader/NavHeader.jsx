import React from 'react'
import { Link } from 'react-router-dom'
import './NavHeader.css'

export default function NavHeader() {
    return (
        <>

            <nav>
                <Link to="/" >Home</Link>
                <Link to="/grids" >Grids</Link>
                <Link to="/animations" >Animations</Link>
            </nav>

        </>
    )
}
