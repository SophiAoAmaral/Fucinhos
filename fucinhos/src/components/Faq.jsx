import React, { useState } from 'react'
import { HiChevronDown } from "react-icons/hi2";

export const Faq = () => {
    const [aberto, setAberto] = useState(null)
    const perguntas = [
        { pergunta:'Tem carência?', resposta:'Consultas e teleorientação valem desde o primeiro dia. Exames e cirurgias eletivas têm 60 dias; acidentes são cobertos em 24h.'},
        {pergunta:'Aceitam pet idoso ou com doença pré-existente?', resposta:'Aceitamos pets de qualquer idade. Condições já diagnosticadas entram no plano Xodó após uma avaliação simples, sem exame presencial.'},
        {pergunta:'Como funciona o desconto de família?', resposta:'Do segundo pet em diante são 15% off na mensalidade dele; a partir do quarto, 20%. Vale mesmo com planos diferentes na mesma conta.'},
        {pergunta:'Posso usar meu veterinário de confiança?', resposta:'Se ele já é credenciado, é só apresentar a carteirinha digital. Se não for, você pode indicar a clínica e a gente convida costuma levar duas semanas.'},
        {pergunta:'Consigo cancelar quando quiser?', resposta:'Sim, pelo app, sem multa e sem ligação de retenção. O plano vale até o fim do período já pago.'},




    ]

  return (
    <article className=' '>
        <div className='text-center'>
            <span>Dúvidas</span>
            <h2>Antes de assinar</h2>
        </div>
        <div className='flex flex-col justify-center items-center'>
            {perguntas.map((item, i)=>(
                <div key={i} className='mb-3 bg-white text-center w-150 py-3 rounded-2xl px-8'>
                    <button onClick={()=> setAberto(aberto === i ? null : i)}className="w-full flex justify-between items-center">
                        <span className='font-fredoka text-roxo-escuro font-semibold block'>{item.pergunta}</span>
                        <span className='block'><HiChevronDown className={`transition-transform duration-300 ${ aberto === i ? "rotate-180" : "" }`}/></span>
                    </button>
                    {aberto === i && (
                        <p>{item.resposta}</p>
                    )}
                </div>
            ))}
        </div>
    </article>
  )
}
