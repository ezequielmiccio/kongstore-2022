import React, { useState } from 'react';

const Search = () => {

  const [value, setValue] = useState('');
 
  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  const onHandlerSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <React.Fragment>
      <form onSubmit={onHandlerSubmit} className='d-flex'>
          <li>
            <input type="search" className="search" placeholder="¿Que estás buscando?" onChange={onChangeValue} />
          </li>

          <button>Buscar</button>
      </form>
    </React.Fragment>
  )
}

export default Search;