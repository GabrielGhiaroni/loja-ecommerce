import React from 'react';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import DetalhesProduto from './pages/DetalhesProduto';

import BarraLateral from './components/BarraLateral';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/produto/:id' element={<DetalhesProduto />} />
      </Routes>
      <BarraLateral />
      <Footer />
    </Router>
  </div>;
};

export default App;
