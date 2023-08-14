import { useEffect } from 'react';
import { CartWidget } from './components/CartWidget';
import Contacto from './components/Contacto';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={ <ItemDetailContainer/>} />
          <Route path="/productos" element={ <ItemListContainer />} />
          <Route path="/productos/:categoria" element={ <ItemListContainer />} />
          <Route path="/contacto" element={ <Contacto />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App