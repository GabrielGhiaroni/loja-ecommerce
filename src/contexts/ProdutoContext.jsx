import React, {createContext, useState, useEffect} from 'react';

//criar contexto
export const ProdutoContext = createContext();

const ProdutoProvider = ({children}) => {

  //estado produto
  const [produtos, setProdutos] = useState([]);

  //fetch produtos
  useEffect(() => {
    const fetchProdutos = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProdutos(data);
    };
    fetchProdutos();
  }, []);

  return <ProdutoContext.Provider value={{produtos}}>{children}</ProdutoContext.Provider>;
};

export default ProdutoProvider;
