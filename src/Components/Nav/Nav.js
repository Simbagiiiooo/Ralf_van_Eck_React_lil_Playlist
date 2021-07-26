import React from 'react';
import './Nav.css'
import {Link} from 'react-router-dom';


const Nav = () => {
    
    return (
        <header>
            <h1>Playlist</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
            </nav>
        </header>
    )
}

export default Nav;