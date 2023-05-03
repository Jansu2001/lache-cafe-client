// import React, { useContext } from 'react';
// import './Header.css'
// import { NavLink } from 'react-router-dom';
// import { Nav } from 'react-bootstrap';
// import { AuthContext } from '../../AuthProvider/AuthProvider/AuthProvider';

// const Header = () => {
//     const {user,signOutUser}=useContext(AuthContext)

//     const handleLogOut=()=>{
//         signOutUser(null)
//     }
//     return (
//         <>
//             <Nav className='header'>

//                 <h1 className='logo ps-5'>Lache Cafe</h1>
//                 <p className='text-white'>{user&& <p>{user.email}</p>}</p>
//                 <div>
//                     <NavLink className={({isActive})=> isActive?'text-waring':''} to='/'>Home</NavLink>
                    
//                     <NavLink className={({isActive})=> isActive?'text-waring':''} to='/blogs'>Blog</NavLink>
//                     {
//                         user&&<img title={user.displayName
//                         } className='profile' src={user.photoURL} alt="" />
//                     }
//                    {
//                     user? <NavLink className={({isActive})=> isActive?'text-waring':''} onClick={handleLogOut} to='/login'>Log out</NavLink>: <NavLink className={({isActive})=> isActive?'text-waring':''} to='/login'>Login</NavLink>
//                    }
//                 </div>

//             </Nav>
//         </>
//     );
// };

// export default Header;