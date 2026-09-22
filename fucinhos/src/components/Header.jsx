import React, { useState } from 'react'
import {Link} from 'react-router'
import patinha from '../../public/logopatinhas.png'
export const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false)
  return (
    <header className='border-b border-roxo-escuro/20 background'>
      <section className='container'>
        <nav className=' flex justify-between items-center py-5'>
          <div className='flex gap-2'>
            <span className=''><img className='w-8' src={patinha} alt="" /></span>
            <Link to='/' className='font-fredoka font-bold text-2xl'>Fucinhos</Link>
          </div>
          <ul className=' hidden md:flex gap-5 items-center **:hover:text-roxo font-fredoka'>
            <li><a className='' href="#">Planos</a></li>
            <li><a href="#planos">Coberturas</a></li>
            <li><a href="#matilha">A matilha</a></li>
            <li><a href="#duvidas">Dúvidas</a></li>
            <Link className='font-medium border rounded-2xl py-2 px-4 hover:bg-roxo/15' to='/contratar'>Contratar</Link>
          </ul>

           <button
            className='md:hidden flex flex-col gap-1 '
            onClick={() => setMenuAberto(!menuAberto)}>
            <span className='w-6 h-0.5 bg-roxo'></span>
            <span className='w-6 h-0.5 bg-roxo'></span>
            <span className='w-6 h-0.5 bg-roxo'></span>
        </button>
    
    
        {menuAberto && (
            <ul className='md:hidden text-center md:text-start absolute top-16 right-0 bg-surface text-ink rounded-xl shadow-lg p-6 flex flex-col gap-4 min-w-48 bg-white z-50'>
            <li><a className='' href="#planos">Planos</a></li>
            <li><a href="#coberturas">Coberturas</a></li>
            <li><a href="#matilha">A matilha</a></li>
            <li><a href="#duvidas">Dúvidas</a></li>
            <Link className='font-medium border rounded-2xl py-2 px-4 hover:bg-roxo/15' to='/contratar'>Contratar</Link>
            </ul>          
        )}
        </nav>
        </section>
    </header>
  )
}
