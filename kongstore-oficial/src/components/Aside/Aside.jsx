import {NavLink } from 'react-router-dom';

const Aside = () => {

    return(
        <div className='aside' style={{
                                    display:'flex',
                                    flexDirection: 'column',
                                    flexWrap:'wrap',
                                }}
        >
            <NavLink to='/categoria'>PC</NavLink>
            <NavLink to='/categoria'>PS4</NavLink>
            <NavLink to='/categoria'>PS5</NavLink>
        </div>
    )

}

export default Aside;