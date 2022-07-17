// COMPONENTES REACT
//import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
// COMPONENTES CREADOS
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/container/ItemListContainer';
//import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer';
//import Cart from './components/container/Cart/Cart';
// COMPONENTES STYLES
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { useEffect } from 'react';

function App() {

  const count = 0;

  return (
      <div className="App">
          <Navbar />
		  <ItemListContainer />
		  
{/*         <Routes>

          <Route index path='/' element={<ItemListContainer />} />
          <Route path='/detalle/:categoriaId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/404' element={<404NotFound />} />

          <Route path='*' element={<Navigate to='/404'/>} />

        </Routes> */}
        {count}
      </div>
  )
}

export default App;

// ternary: condition ? IfTrue : ifFalse
/* 

CODIGO PROFESOR:

import React, { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import axios from 'axios';

// COMPONENTS
import Header from './components/Header/Header';

const App = () => {
	const [value, setValue] = useState('');

	const onChangeValue = (e) => {
		/// console.log(e.target.value);
		setValue(e.target.value);
	};

	const onHandlerSubmit = (e) => {
		e.preventDefault();
		console.log('Value', value);
		// https://api.github.com/users/mojombo
	};

	return (
		<div className='App'>
			<Header />
			<form className='Form' onSubmit={onHandlerSubmit}>
				<TextField
					placeholder='Buscar Usuario'
					className='TextField'
					variant='outlined'
					value={value}
					onChange={onChangeValue}
				/>
				<button className='btn'>Buscar</button>
			</form>
		</div>
	);
};

export default App;


*/