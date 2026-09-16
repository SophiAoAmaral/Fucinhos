import React from 'react'
import patinha from '../../public/assets/favicon.png'


export const Footer = () => {
  const items = [
    {title:'Atendimento', topicos:['WhatsApp (11) 4002-8922', 'oi@focinho.com.br', 'Seg a sex, 8h às 20h']},
    {title:'Planos', topicos:['Petisco', 'Patinha',  'Xodó']},
    {title:'A gente', topicos:['Coberturas', 'Dúvidas frequentes',  'Rede credenciada']},

    
  ]
  return (
    <footer className=' background'>
        <div className='container md:py-10'>
          <div className='flex flex-wrap justify-between p-7 font-nunito'>
            <div>
              <h3 className='flex items-center font-fredoka font-semibold'><img src={patinha} className='w-10'></img>Focinho</h3>
              <p className='text-sm text-roxo-escuro/70'>Convênio de saúde para pets..</p>
            </div>
            <div className='flex gap-5 md:gap-10 flex-wrap mt-2'>
              {
                items.map((i)=>(
                  <ul>
                    <h3 className='font-fredoka text-roxo-escuro font-semibold'>{i.title}</h3>
                    {i.topicos.map((topico)=>(
                      <li className='text-roxo-escuro/80 hover:text-roxo cursor-pointer text-sm'>{topico}</li>
                    ))}
                  </ul>
                ))
              }
            </div>
          </div>
        </div>
    </footer>
  )
}
