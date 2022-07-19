import React from 'react';
import { NavLink } from 'react-router-dom';


const Aside = () => {

    return(
            <div className='aside' style={{
                display:'flex',
                flexDirection: 'column',
                flexWrap:'wrap',
            }}
            >
                <ul>

                    <li>
                        <NavLink to='/pc'>
                            <a href='#pc'>
                                PC
                            </a>
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink to='/ps4'>
                            <a href='#ps4'>
                                PS4
                            </a>
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink to='/ps5'>
                            <a href='#ps5'>
                                PS5
                            </a>
                        </NavLink>
                    </li>
                
                </ul>
                
            </div>
    )

}

export default Aside;

