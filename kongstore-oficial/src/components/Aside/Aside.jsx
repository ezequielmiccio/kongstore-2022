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

                    <li>
                        <Link to='categoria/pc'>
                            <span>
                                PC
                            </span>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to='categoria/ps4'>
                            <span>
                                PS4
                            </span>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to='categoria/ps5'>
                            <span>
                                PS5
                            </span>
                        </Link>
                    </li>
                
                </ul>
                
            </div>
    )

}

export default Aside;

