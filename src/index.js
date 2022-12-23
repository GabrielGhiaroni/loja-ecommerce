import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//provider produto
import ProdutoProvider from './contexts/ProdutoContext';
//provider barra lateral
import BarraLateralProvider from './contexts/BarraLateralContext';
import CarrinhoProvider from './contexts/CarrinhoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BarraLateralProvider>
    <CarrinhoProvider>
      <ProdutoProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProdutoProvider>
    </CarrinhoProvider>
  </BarraLateralProvider>
);
