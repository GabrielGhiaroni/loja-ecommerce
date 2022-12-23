import React, {useContext, useState, useEffect} from 'react';
import { BarraLateralContext } from '../contexts/BarraLateralContext';
import { CarrinhoContext } from '../contexts/CarrinhoContext';
import {BsBag} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';

const Header = () => {
  //estado header
  const [headerAtivo, setHeaderAtivo] = useState(false);

  const {aberto, setAberto} = useContext(BarraLateralContext);
  const {quantidadeItem} = useContext(CarrinhoContext);

  //event listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setHeaderAtivo(true) : setHeaderAtivo(false);
    })
  });

  return ( 
    <header className={`${headerAtivo ? 'bg-white shadow-md py-4' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex items-center justify-between h-full'>
        <Link to={'/'}>
          <div>
            <img src={Logo} alt="logomarca" className='w-[40px]'/>
          </div>
        </Link>
        <div onClick={() => setAberto(!aberto)} className='cursor-pointer flex relative'>
          <BsBag className='text-2xl'/>
          <div className='absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center bg-red-500'>{quantidadeItem}</div>
        </div>
      </div>
    </header>
  )
};

export default Header;
