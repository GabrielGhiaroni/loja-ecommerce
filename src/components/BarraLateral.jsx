import React, {useContext} from 'react';

import { Link } from 'react-router-dom';

import {BsArrowRightShort} from 'react-icons/bs';
import {FiTrash2} from 'react-icons/fi';

import ItemCarrinho from '../components/ItemCarrinho';

import {BarraLateralContext} from '../contexts/BarraLateralContext';
import { CarrinhoContext } from '../contexts/CarrinhoContext';

const BarraLateral = () => {
  const {aberto, handleClose} = useContext(BarraLateralContext);
  const {carrinho, limparCarrinho, total, quantidadeItem} = useContext(CarrinhoContext);

  return (
      <div className={`${aberto ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-500 z-20 px-4 lg:px-[35px]`}>
        <div className='flex items-center justify-between py-6 border-b'>
          <div className='uppercase text-sm font-semibold'>Carrinho ({quantidadeItem})</div>
          <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
            <BsArrowRightShort className='text-2xl'/>
          </div>
        </div>
        <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>{carrinho.map(item => {
          return <ItemCarrinho item={item} key={item.id}/>
        })}</div>
        <div className='flex flex-col gap-y-3 py-4 mt-4'>
          <div className='flex justify-between items-center w-full pt-2'>
            <div className='font-semibold'><span className='mr-2'>Total: R${parseFloat(total).toFixed(2)}</span></div>
            <div className='cursor-pointer text-white bg-red-500 flex justify-center items-center text-xl w-12 h-12' onClick={() => limparCarrinho()}><FiTrash2 /></div>
          </div>
          <Link to={'/'} className='bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium'>Ver carrinho</Link>
          <Link to={'/'} className='bg-primary flex p-4 justify-center items-center text-white w-full font-medium'>Checkout</Link>
        </div>
      </div>
    )
};

export default BarraLateral;
