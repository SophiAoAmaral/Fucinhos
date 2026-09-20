import React from 'react'

export const Input = ({label, placeholder,value,  type, name, onChange, removerPet, ...props}) => {
  return (
    <div className='flex flex-col text-roxo-excuro'>
        <label htmlFor={name} className='font-fredoka mb-1'>{label}</label>
        <input className='font-nunito border border-gray-300 rounded-2xl px-4 py-3 outline-none transition-all duration-200 focus:border-roxo-escuro inline-block ' type={type} placeholder={placeholder} name={name} id={name} onChange={onChange} value={value} {...props}/>
    </div>
  )
}
