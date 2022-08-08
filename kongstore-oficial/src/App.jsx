import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/container/Cart/Cart';
import Login from './components/Login/Login';
import Message from './components/Message/Message'
import Aside from './components/Aside/Aside';
import { GamesProvider } from './components/GamesContext/GamesContext';
import { CartProvider } from './components/GamesContext/GamesContext';
import './App.css';


// CONSULTAS TUTOR:

// COMPONENTE SEARCH, BÚSQUEDA INTERNA
// ENGLOBAR DOS CONTEXTOS Y PASAR TODO POR PARAMETRO O DISTINTOS
// IMAGENES EN TARJETAS
// PASAR EL STOCK DEL GAMESCONTEXT POR PROP AL GAMECOUNT

function App() {

  return (
	<CartProvider>
		<BrowserRouter>
			<GamesProvider>
					<div className="App">
						<Navbar />
						<Aside />

						<Routes>
							<Route index path='/' element={<ItemListContainer />} />
							<Route index path='/categoria/:categoryId' element={<ItemListContainer />} />
							<Route path='/detail/:detailId' element={<ItemDetailContainer />} />
							<Route path='/cart' element={<Cart />} />
							<Route path='/login' element={<Login />} />
							<Route path='/message' element={<Message />} />

							<Route path='*' element={<Navigate to='/' />} />
						</Routes>
						
					</div>
			</GamesProvider>
		</BrowserRouter>
	</CartProvider>
  )
}


export default App;

// ternary: condition ? IfTrue : ifFalse
/* 

/*         <Routes>

          <Route index path='/' element={<ItemListContainer />} />
          <Route path='/detalle/:categoriaId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/404' element={<404NotFound />} />

          <Route path='*' element={<Navigate to='/404'/>} />

        </Routes>

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