// COMPONENTES REACT


// COMPONENTES CREADOS
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/container/ItemListContainer';

// COMPONENTES STYLES

/* 
function Name(props) {
  console.log(props);
  return(
    <div>
      <h1> Name </h1>
    </div>
  )
} 
*/

// de la siguiente forma reemplazamos lo de arriba y tambien podriámos indicar props.apellido ya que es un OBJETO. O definir apellido en prop y llamarla con {apellido}

function Name( {nombre, apellido} ) {
  return(
    <div>
      <h3> {nombre} </h3>
      <h3> {apellido} </h3>
    </div>
  )
}

function App() {

  const count = 0;
  const objStyle = {color: 'white', backgroundColor: 'blue'};

  // desde React podemos pasar valor de un componente padre a un componente hijo de la function Name creando variables locales en App.
  let nombre = 'Ezequiel';
  let apellido = 'Miccio';
  const saludo = () => console.log('Mostrando mensaje en pantalla desde ItemListContainer'); // esta funcion la enviamos por params

  return (
    <div className="App" style={ objStyle }>
      <Navbar />
      <ItemListContainer saludo={saludo()}/>
      {count} 
      <Name nombre={nombre} apellido={apellido} /> 
    </div>
  )
}

 /*   const condition = true;

  if(condition)
  {
    return(<div>'Juan'</div>);

  }else {
    result = 'incorrecto';
  }

  console.log(´result: ´) */


// PROPIEDADES DINAMICAS

// Sirve para poder modificar el campo de un valor de forma dinamica

/* let campo = 'edad';

const obj = {
   nombre = 'juan',
   apellido = 'perez',
   [campo]: '24' // de esta forma hacemos un valor                     dinámico
} */

// DESTRUCTURING = DESTRUCTURACION
// modificacion de campos, o agregacion de campos con valores
/* 
const {nombre} = obj
console.log(nombre);

// se puede modificar el nombre del campo de esta forma
const {nombre: name} = obj
console.log(name);

// si 'altura' como  no esta definido es undefined, si lo = a un valor, se define ese valor (en este caso 2)
const {nombre: name, altura = 2} = obj
console.log(´altura: ${altura}´); */


// POLYFILLS Y LA RETROCOMPATIBILIDAD:



export default App;




















/* 

CODIGO REACT POR DEFAULT

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );


*/