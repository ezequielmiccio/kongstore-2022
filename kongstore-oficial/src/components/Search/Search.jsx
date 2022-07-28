import React, { useState } from 'react';

const Search = () => {

  const [value, setValue] = useState('');

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  const onHandlerSubmit = (e) => {
    e.preventDefault();

    const gameInput = value.toLocaleLowerCase().replace(/ /g,  '');

    console.log(gameInput);

    if(gameInput !== undefined){
      fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${gameInput}`)
      .then(resp => resp.json)
      .then(json => console.log(json))
    }
    
    setValue('');
  }

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