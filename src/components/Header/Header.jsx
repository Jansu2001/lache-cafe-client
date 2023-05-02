import React, { useContext } from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { AuthContext } from '../../AuthProvider/AuthProvider/AuthProvider';

const Header = () => {
    const {user,signOutUser}=useContext(AuthContext)

    const handleLogOut=()=>{
        signOutUser(null)
    }
    return (
        <>
            <Nav className='header'>

                <h1 className='logo ps-5'>Lache Cafe</h1>
                {/* {user&& <p>{user}</p>} */}
                <div>
                    <Link to='/'>Home</Link>
                    
                    <Link to='/blog'>Blog</Link>
                    <img title='User Name' className='profile' src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                   {
                    user? <Link onClick={handleLogOut} to='/login'>Log out</Link>: <Link to='/login'>Login</Link>
                   }
                </div>

            </Nav>
        </>
    );
};

export default Header;