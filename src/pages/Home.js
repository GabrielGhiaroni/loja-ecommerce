import React, {useContext} from 'react';

import { ProdutoContext } from '../contexts/ProdutoContext';

import Produto from '../components/Produto';

const Home = () => {
  //pegando produtos do ProdutoContext
  const {produtos} = useContext(ProdutoContext);

  //pegando apenas a categoria de roupas masculinas e femininas
  const produtosFiltrados = produtos.filter(item => {
    return item.category === "men's clothing" || item.category === "women's clothing";
  });

  return <section className='py-16'>
    <div className="container mx-auto">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
        {produtosFiltrados.map(produto => {
          return <Produto produto={produto} key={produto.id}/>
        })}
      </div>
    </div>
  </section>;
};

export default Home;
