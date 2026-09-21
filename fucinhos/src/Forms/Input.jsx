import React from 'react'

export const Input = ({label, erro, placeholder,value,  type, name, onChange, removerPet, ...props}) => {
  return (
    <div className='flex flex-col text-roxo-excuro'>
        <label htmlFor={name} className='font-fredoka mb-1'>{label}</label>
        <input className={`font-nunito border  rounded-2xl px-4 py-3 outline-none transition-all duration-200  inline-block ${erro ? 'border-red-500' :  'border-gray-300 focus:border-roxo-escuro'}`} type={type} placeholder={placeholder} name={name} id={name} onChange={onChange} value={value} {...props}/>
        {erro && (<p className='text-red-500 text-sm font-nunito font-semibold'>{erro.mensagemErro}</p>)}
    </div>
  )
}
