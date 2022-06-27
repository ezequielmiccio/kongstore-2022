// COMPONENTES REACT
import React from 'react';
// COMPONENTES CREADOS
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/container/ItemListContainer';
// COMPONENTES STYLES
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const count = 0;

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      {count}
    </div>
  )
}

export default App;