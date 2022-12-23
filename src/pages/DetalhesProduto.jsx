import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import {CarrinhoContext} from '../contexts/CarrinhoContext';
import {ProdutoContext} from '../contexts/ProdutoContext';
import ImagemErro from '../img/error.webp';

const DetalhesProduto = () => {

  //pegando o id do produto do parâmetro da url
  const {id} = useParams();

  const {produtos} = useContext(ProdutoContext);
  const {adicionarAoCarrinho} = useContext(CarrinhoContext);

  //pegando um único produto baseado no id da url
  const produto = produtos.find((produto) => {
    return produto.id === parseInt(id);
  });

  if(!produto) {
    return (
      <section className='h-screen flex justify-center items-center flex-col text-center'>
        <div>
          <img src={ImagemErro} alt="" className='max-w-[500px]'/>
        </div>
        <h1 className='text-primary text-3xl mb-6 font-semibold'>PRODUTO NÃO ENCONTRADO</h1>
        <p className='text-primary font-light text-xs w-[300px] lg:text-base lg:w-auto'>Ok, isso é um pouco constragedor... mas não conseguimos encontrar o produto buscado.</p>
      </section>
    )
  };

  //desestruturando o produto
  const {title, price, description, image} = produto;

  return (
    <section className='mt-28 mb-12 lg:py-32 h-screen flex items-center'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row items-center'>
            <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
              <img src={image} alt="imagem produto" className='max-w-[200px] lg:max-w-sm'/>
            </div>
            <div className='flex-1 text-center flex flex-col justify-center items-center'>
              <h1 className='text-[20px] lg:text-[26px] font-medium mb-2 max-w-[450px] mx-auto'>{title}</h1>
              <div className='text-x font-medium mb-6 text-red-500'>R$ {price}</div>
              <p className='mb-8 text-sm text-center'>{description}</p>
              <button onClick={() => adicionarAoCarrinho(produto, produto.id)} className='bg-primary text-white px-8 py-4'>Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
    </section>
  ) 
};

export default DetalhesProduto;
