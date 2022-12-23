import React from 'react';
import ImagemHero from '../img/mulher_hero.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className="container mx-auto flex justify-around h-full">
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>Tendências 2023
          </div>
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
            COLEÇÃO OUTONO <br />
            <span className='font-semibold'>FEMININO</span>
          </h1>
          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>Saiba mais</Link>
        </div>
        <div className='hidden lg:block'>
          <img src={ImagemHero} alt="imagem-hero" className='max-w-[470px]'/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
