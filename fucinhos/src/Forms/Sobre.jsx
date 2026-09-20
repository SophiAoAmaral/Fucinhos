import React from 'react'
import { Input } from './Input'

export const Sobre = ({dono, salvarDadosDono}) => {
  return (
    <section className='flex flex-col gap-3 border border-gray-300 rounded-2xl mb-10 p-5'>
        <div className='grid md:grid-cols-2 gap-6'>
          <Input label='Nome completo' placeholder='Nome completo' onChange={salvarDadosDono}/>
          <Input label='Email' placeholder='seuemail@email.com' onChange={salvarDadosDono}/>
        </div> 
         <div className='grid md:grid-cols-2 gap-6'>
          <Input label='CEP' placeholder='12345-1232' onChange={salvarDadosDono}/>
          <Input label='Celular' placeholder='(12) 34567-3322' onChange={salvarDadosDono}/>
        </div> 

        <button onClick={salvarDadosDono} className='mt-2 py-3 px-4 bg-roxo/75 self-center rounded-2xl cursor-pointer hover:bg-roxo-escuro hover:text-white transition'>Salvar Informações</button>
    </section>
  )
}
