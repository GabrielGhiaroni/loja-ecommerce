import React, {useContext} from 'react';

import { Link } from 'react-router-dom';

import {BsPlus, BsEyeFill} from 'react-icons/bs';

import {CarrinhoContext} from '../contexts/CarrinhoContext';

const Produto = ({produto}) => {
  const {adicionarAoCarrinho} = useContext(CarrinhoContext);

  const {category, id, image, price, title} = produto;

  return (
    <div>
      <div className='border border-[#e4e9e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center group-hover:cursor-pointer'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img src={image} alt="foto produto" className='max-h-[160px] group-hover:scale-110 transition duration-300'/>
          </div>
        </div>
        <div className='absolute top-2 -right-11 right-0 group-hover:right-5 p-2 flex flex-col justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button onClick={() => adicionarAoCarrinho(produto, id)}>
            <div className='flex justify-center items-center text-white w-10 h-10 md:w-8 md:h-8 bg-red-500'>
              <BsPlus className='text-3xl'/>
            </div>
          </button>
          <Link to={`/produto/${id}`} className='w-10 h-10 md:w-8 md:h-8 flex justify-center bg-white items-center text-primary drop-shadow-xl'>
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div>
        <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
        <Link to={`/produto/${id}`}>
          <h2 className='font-semibold mb-1'>{title}</h2>
        </Link>
        <div className='font-semibold'>R$ {price}</div>
      </div>
    </div>
  );
};

export default Produto;
