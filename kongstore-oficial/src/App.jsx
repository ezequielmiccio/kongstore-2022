// COMPONENTES REACT
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
// COMPONENTES CREADOS
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/container/ItemListContainer';
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/container/Cart/Cart';
// COMPONENTES STYLES
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const count = 0;

  return (
    <BrowserRouter>
      <div className="App">
          <Navbar />
        <Routes>

          <Route index path='/' element={<ItemListContainer />} />
          <Route path='/detalle/:categoriaId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          {/* <Route path='/404' element={<404NotFound />} /> */}

          <Route path='*' element={<Navigate to='/404'/>} />

        </Routes>
        {count}
      </div>
    </BrowserRouter>
  )
}

export default App;