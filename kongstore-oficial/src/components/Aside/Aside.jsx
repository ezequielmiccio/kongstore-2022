import React from 'react';
import { Link } from 'react-router-dom';

const Aside = () => {

    return(
            <div className='aside' style={{
                display:'flex',
                flexDirection: 'column',
                flexWrap:'wrap',
            }}
            >
                <ul>

                    <Link to={'/categoria/PC'}>
                        <li>
                            <span>
                                PC
                            </span>
                        </li>
                    </Link>
                    
                    <Link to='/categoria/PS4'>
                        <li>
                            <span>
                                PS4
                            </span>
                        </li>
                    </Link>
                    
                    <Link to='/categoria/PS5'>
                        <li>
                            <span>
                                PS5
                            </span>
                        </li>
                    </Link>
                
                </ul>
                
            </div>
    )

}

export default Aside;

