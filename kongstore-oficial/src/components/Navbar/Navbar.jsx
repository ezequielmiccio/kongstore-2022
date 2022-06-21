import React from 'react'
import CartWidge from '../CartWidge/CartWidge';

const Navbar = () => {
  return (
    <nav id="nav">

      <h2 className='logoStyle'>KONGSTORE</h2>


      <ul>

        <CartWidge />

      </ul>
    
    </nav>
  )
}

export default Navbar;

// rfc para crear el componente automaticamente