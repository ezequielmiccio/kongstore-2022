import { Link, NavLink } from 'react-router-dom';
import React from 'react'
import CartWidge from '../CartWidge/CartWidge';
import Login from '../Login/Login';
import Message from '../Message/Message';
import Search from '../Search/Search';
import Logotipo from '../Logotipo/Logotipo';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav id="nav">
      <NavLink to='/'>
        <Logotipo />
      </NavLink>

      <Search />

      <ul className='CartWidge'>

        
        <Login />
        <Message />

        <Link to='/cart'>
          <CartWidge />
        </Link>
      </ul>
    
    </nav>
  )
}

export default Navbar;

// rfc para crear el componente automaticamente