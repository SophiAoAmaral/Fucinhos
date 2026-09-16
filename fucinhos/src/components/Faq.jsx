import React, { useState } from 'react'
import { HiChevronDown } from "react-icons/hi2";

export const Faq = () => {
    const [aberto, setAberto] = useState(null)
    const perguntas = [
        { pergunta:'Tem carência?', resposta:'Consultas e teleorientação valem desde o primeiro dia. Exames e cirurgias eletivas têm 60 dias acidentes são cobertos em 24h.'},
        {pergunta:'Aceitam pet idoso ou com doença pré-existente?', resposta:'Aceitamos pets de qualquer idade. Condições já diagnosticadas entram no plano Xodó após uma avaliação simples, sem exame presencial.'},
        {pergunta:'Como funciona o desconto de família?', resposta:'Do segundo pet em diante são 15% off na mensalidade dele a partir do quarto, 20%. Vale mesmo com planos diferentes na mesma conta.'},
        {pergunta:'Posso usar meu veterinário de confiança?', resposta:'Se ele já é credenciado, é só apresentar a carteirinha digital. Se não for, você pode indicar a clínica e a gente convida costuma levar duas semanas.'},
        {pergunta:'Consigo cancelar quando quiser?', resposta:'Sim, pelo app, sem multa e sem ligação de retenção. O plano vale até o fim do período já pago.'},




    ]

  return (
    <article className=' mt-15 font-nunito pb-10 md:mb-10'>
        <div className='text-center'>
            <span className='uppercase text-roxo font-bold'>Dúvidas</span>
            <h2 className='text-4xl font-fredoka mb-6 font-semibold'>Antes de assinar</h2>
        </div>
        <div className='flex flex-col justify-center items-center'>
            {perguntas.map((item, i)=>(
                <div key={i} className='mb-3 bg-white md:text-center w-70 md:w-150 py-3 rounded-2xl px-4 md:px-8 '>
                    <button onClick={()=> setAberto(aberto === i ? null : i)}className="w-full flex justify-between items-center cursor-pointer">
                        <span className='font-fredoka text-roxo-escuro font-semibold block text-sm md:text-base'>{item.pergunta}</span>
                        <span className='block'><HiChevronDown className={`transition-transform duration-300 ${ aberto === i ? "rotate-180" : "" }`}/></span>
                    </button>
                    {aberto === i && (
                        <p className='mt-5 md:text-base text-sm'>{item.resposta}</p>
                    )}
                </div>
            ))}
        </div>
    </article>
  )
}
