import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Header.css"


function Header(){
        return (
            <header>
                <img className='logo' src='https://w7.pngwing.com/pngs/1011/407/png-transparent-movies-logo-the-film-television-logo.png'></img>
                <nav className='nav'>
                    <Navbar/> 
                </nav>
            </header>
        )
    }


export default Header