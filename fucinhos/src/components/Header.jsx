import React, { useState } from 'react'
import {Link} from 'react-router'
export const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false)
  return (
    <header className='border-b border-roxo-escuro/20 bg-amarelo-pastel/20'>
      <section className='container'>
        <nav className=' flex justify-between items-center py-5'>
          <h2 className='font-fredoka font-bold text-2xl'>Fucinhos</h2>
          <ul className=' hidden md:flex gap-5 items-center **:hover:text-roxo font-fredoka'>
            <li><a className='' href="#">Planos</a></li>
            <li><a href="#planos">Coberturas</a></li>
            <li><a href="#matilha">A matilha</a></li>
            <li><a href="#duvidas">Dúvidas</a></li>
            <Link className='font-medium border rounded-2xl py-2 px-4 hover:bg-roxo/15' to='/planos'>Contratar</Link>
          </ul>

           <button
            className='md:hidden flex flex-col gap-1 '
            onClick={() => setMenuAberto(!menuAberto)}>
            <span className='w-6 h-0.5 bg-roxo'></span>
            <span className='w-6 h-0.5 bg-roxo'></span>
            <span className='w-6 h-0.5 bg-roxo'></span>
        </button>
    
    
        {menuAberto && (
            <ul className='md:hidden text-center md:text-start absolute top-16 right-0 bg-surface text-ink rounded-xl shadow-lg p-6 flex flex-col gap-4 min-w-48'>
              <li><a className='' href="#">Planos</a></li>
            <li><a href="#planos">Coberturas</a></li>
            <li><a href="#matilha">A matilha</a></li>
            <li><a href="#duvidas">Dúvidas</a></li>
            <Link className='font-medium border rounded-2xl py-2 px-4 hover:bg-roxo/15' to='/planos'>Contratar</Link>
            </ul>          
        )}
        </nav>
        </section>
    </header>
  )
}
