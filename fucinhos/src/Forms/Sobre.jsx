import React from 'react'
import { Input } from './Input'

export const Sobre = ({dono, salvarDadosDono, erros}) => {
  return (
    <section className='flex flex-col gap-3 border border-gray-300 rounded-2xl mb-10 p-5'>
        <div className='grid md:grid-cols-2 gap-6'>
          <Input erro={erros.nome}  label='Nome completo' value={dono.nome} name='nome' placeholder='Nome completo' onChange={salvarDadosDono}/>
          <Input erro={erros.nome} label='Email' value={dono.email} name='email' placeholder='seuemail@email.com' onChange={salvarDadosDono}  />
        </div> 
         <div className='grid md:grid-cols-2 gap-6'>
          <Input erro={erros.nome} label='CEP' value={dono.cep} name='cep' placeholder='12345-1232' onChange={salvarDadosDono}/>
          <Input  erro={erros.nome} label='Celular' value={dono.celular} name='celular' placeholder='(12) 34567-3322' onChange={salvarDadosDono}/>
        </div> 
    </section>
  )
}
