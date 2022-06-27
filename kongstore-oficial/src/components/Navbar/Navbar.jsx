import React from 'react'
import CartWidge from '../CartWidge/CartWidge';
import Search from '../Search/Search';
import Logotipo from '../Logotipo/Logotipo';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav id="nav">
      <Logotipo />
      <Search />

      <ul className='CartWidge'>
        <CartWidge />
      </ul>
    
    </nav>
  )
}

export default Navbar;

// rfc para crear el componente automaticamente