import React from 'react';
import './App.css';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';
import ItemDetail from './Pages/ItemDetail/ItemDetail';
import Error from './Pages/Error/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App () {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path='/itemlistcontainer' element={<ItemListContainer />} />
        <Route path='/detail' element={<ItemDetail />} />
        <Route path='*' element={<Error />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App
