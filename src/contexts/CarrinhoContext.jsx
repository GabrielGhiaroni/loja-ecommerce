import React, {createContext, useState, useEffect} from 'react';

//create context
export const CarrinhoContext = createContext();

const CarrinhoProvider = ({children}) => {
  //estado carrinho
  const [carrinho, setCarrinho] = useState([]);

  //estado quantidade de itens no carrinho
  const [quantidadeItem, setQuantidadeItem] = useState(0);

  //estado preço total
  const [totalPreco, setTotalPreco] = useState(0);

  useEffect(() => {
    const total = carrinho.reduce((acumulador, itemAtual) => {
      return acumulador + itemAtual.price * itemAtual.amount
    }, 0)
    setTotalPreco(total);
  }, [carrinho])

  //atualizando a quantidade de itens no carrinho
  useEffect(() => {
    if(carrinho) {
      const quantidade = carrinho.reduce((acumulador, itemAtual) => {
        return acumulador + itemAtual.amount
      }, 0);
      setQuantidadeItem(quantidade);
    }
  }, [carrinho]);
 

  //add to cart
  const adicionarAoCarrinho = (produto, id) => {
    const itemNovo = {...produto, amount: 1}
    
    //chegando se o item já está no carrinho
    const itemNoCarrinho = carrinho.find((item) => {
      return item.id === id;
    });

    //se o item já está no carrinho
    if (itemNoCarrinho) {
      const novoCarrinho = [...carrinho].map((item) => {
        if (item.id === id) {
          return {
            ...item, amount: itemNoCarrinho.amount + 1
          }
        } else {
          return item;
        }
      });
      setCarrinho(novoCarrinho);
    } else {
      setCarrinho([...carrinho, itemNovo]);
    }
  };

  //removendo um item específico carrinho
  const removerItemCarrinho = (id) => {
    const novoCarrinho = carrinho.filter(item => {
      return item.id !== id;
    });
    setCarrinho(novoCarrinho);
  };

  //removendo todos os itens do carrinho
  const limparCarrinho = () => {
    setCarrinho([]);
  };

  //aumentando a quantidade de um item
  const aumentarQuantidade = (id) => {
    const itemCarrinho = carrinho.find((item) => item.id === id);
    adicionarAoCarrinho(itemCarrinho, id);
  };

  //removendo a quantidade de um item
  const diminuirQuantidade = (id) => {
    const itemCarrinho = carrinho.find((item) => {
      return item.id === id;
    });
    if (itemCarrinho) {
      const novoCarrinho = carrinho.map((item) => {
        if (item.id === id) {
          return {...item, amount: itemCarrinho.amount - 1}
        } else {
          return item;
        }
      });
      setCarrinho(novoCarrinho);
    }
    if (itemCarrinho.amount < 2 ) {
      removerItemCarrinho(itemCarrinho.id);
    }
  };

  return <CarrinhoContext.Provider value={{carrinho, adicionarAoCarrinho, removerItemCarrinho, limparCarrinho, aumentarQuantidade, diminuirQuantidade, quantidadeItem, totalPreco}}>
    {children}
    </CarrinhoContext.Provider>;
};

export default CarrinhoProvider;
