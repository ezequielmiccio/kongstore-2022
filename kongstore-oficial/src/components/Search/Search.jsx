import React from 'react';

const Search = () => {

  return (
    <React.Fragment>
          <li>
              <input type="search" className="search" placeholder="¿Que estás buscando?" />
          </li>
    </React.Fragment>
  )
}

export default Search;



/*   const [search, setSearch] = useState("");
  const [products, setProducts] = useState("");

  const getFetchApi = (url) => {
      fetch(url)
      .then( resp => {
          return resp.json()
      })
      .then( data => {
          console.table(data)
          setProducts(data)
      })
      .catch( err => console.log(err))
    }
  
    useEffect(() => {
      const url = `https://api.mercadolibre.com/sites/MLA/search?q=${search}`;
      getFetchApi(url);
    }) */