import React from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <>
            <Nav className='header'>

                <h1 className='logo'>Lache Cafe</h1>

                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/profile'>Profile</Link>
                    <Link to='/login'>Login</Link>
                </div>

            </Nav>
        </>
    );
};

export default Header;