import React, { useState } from 'react'
import { Link } from 'react-router';
import { FaCheckCircle } from "react-icons/fa";

export const Planos = () => {
    const [plano, setPlano] = useState(true);

    const mensal =[
        {id:'miúdo', nome:'Petisco', img:`${import.meta.env.BASE_URL}planos/plano1.jpg`, desc:'O básico bem feito para pets saudáveis e rotina em dia.', preco:49, beneficios:['4 consultas durante 12 meses', 'Vacinas anuais incluídas', 'Exames simples de rotina', 'Teleorientação 24h']},
        {id:'completo', nome:'Patinha', img:`${import.meta.env.BASE_URL}planos/plano2.jpg`, desc:'Rotina completa mais o susto de madrugada coberto.', preco:89, beneficios:['Consultas ilimitadas', 'Emergência 24h na rede toda', 'Exames de imagem e laboratório', 'Castração e cirurgias simples']},
        {id:'sem limite', nome:'Xodó', img:`${import.meta.env.BASE_URL}planos/plano3.jpg`, desc:'Para idosos, crônicos e para quem não quer pensar em teto.', preco:149, beneficios:['Tudo do Patinha, sem teto anual', 'Cirurgias complexas e internação', 'Fisioterapia e tratamento contínuo', 'Transporte para consultas veterinárias']},
    ];
    const anual = [
  {
    id: "miúdo",
    nome: "Petisco",
    img: `${import.meta.env.BASE_URL}planos/plano1.jpg`,
    desc: "O básico bem feito para pets saudáveis e rotina em dia.",
    preco: 41,
    valorTotal: 490,
    economia: 98,
    beneficios: [
      "4 consultas durante 12 meses",
      "Vacinas anuais incluídas",
      "Exames simples de rotina",
      "Teleorientação 24h",
    ],
  },

  {
    id: "completo",
    nome: "Patinha",
    img: `${import.meta.env.BASE_URL}planos/plano2.jpg`,
    desc: "Rotina completa e proteção para os imprevistos.",
    preco: 74,
    valorTotal: 890,
    economia: 178,
    beneficios: [
      "Consultas ilimitadas",
      "Emergência 24h na rede toda",
      "Exames de imagem e laboratório",
      "Castração e cirurgias simples",
    ],
  },

  {
    id: "sem limite",
    nome: "Xodó",
    img: `${import.meta.env.BASE_URL}planos/plano3.jpg`,
    desc: "Para pets idosos, crônicos ou que precisam de cuidados especiais.",
    preco: 124,
    valorTotal: 1490,
    economia: 298,
    beneficios: [
      "Tudo do Patinha, sem teto anual",
      "Cirurgias complexas e internação",
      "Fisioterapia e tratamento contínuo",
      "Transporte para consultas veterinárias",
    ],
  },
];


    

  return (
    <section className='md:mt-30 mt-10'>

        <div className='text-center'>  
            <span className='uppercase text-roxo font-nunito'>Planos</span>
            <h3 className='text-4xl font-fredoka font-bold'>Um plano para cada fase da vida</h3>
            <p className='text-sm font-nunito text-black/50 mt-2'>Escolha a cobertura ideal para cada pet e reúna todos em uma única fatura.</p>
       </div>
        <div className='flex items-center justify-center gap-7 mt-5 font-fredoka **:border **:py-2 **:px-4 **:rounded-2xl **:border-roxo  **:cursor-pointer '>
            <button onClick={()=> setPlano(true)} className={plano ? 'bg-roxo text-white' : 'bg-roxo/30 text-roxo-escuro'}>Mensal</button>
            <button onClick={()=> setPlano(false)} className={!plano ? 'bg-roxo text-white' : 'bg-roxo/30 text-roxo-escuro'}>Anual</button>
        </div>
        <span className='text-center block my-3 border border-amarelo-pastel bg-amarelo-pastel py-2 px-4 rounded-2xl text-roxo-escuro font-fredoka w-fit mx-auto'>  2 meses grátis no anual</span>

        {plano ? (
            <article className='grid md:grid-cols-3 gap-7 items-center justify-center font-nunito '>
                {mensal.map((mes)=>(
                    <div className={`${mes.id === 'completo' ? 'bg-roxo/20 text-roxo-escuro' : 'bg-white'} h-105 p-6 rounded-2xl teste `} key={mes.id}>
                        <div className='flex gap-2 items-center'>
                            <img src={mes.img} alt=""className='w-20  h-20 object-cover rounded-[50%]' />
                                <div>                           
                                    <span className='uppercase text-sm text-roxo font-semibold'>{mes.id}</span>
                                    <h3 className='font-fredoka text-2xl font-semibold'>{mes.nome}</h3>
                                </div>
                        </div>
                        <p className='mt-3 mb-2'>{mes.desc}</p>
                        <p className='text-black/50'>R$ <span className='text-4xl font-fredoka font-semibold text-roxo-escuro'>{mes.preco}</span>/mês por pet</p>
                        <span className='text-sm mt-2 block'>Cobrado todo mês, cancele quando quiser.</span>

                        <ul className='mt-4'>
                            {mes.beneficios.map((items)=>(
                                <li className='flex gap-2 items-center mb-2 '>
                                    <FaCheckCircle className="shrink-0 text-[#7B5AD9]" />
                                    
                                <span>{items}</span>
                               </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </article>
        ) : (
            <article className='grid md:grid-cols-3 gap-7 items-center justify-center font-nunito'>
                {anual.map((mes)=>(
                    <div className={`${mes.id === 'completo' ? 'bg-roxo/20 text-roxo-escuro' : 'bg-white'} h-120 p-6 rounded-2xl teste`} key={mes.id}>
                        <div className='flex gap-3 items-center text-roxo-escuro'>
                            <img src={mes.img} alt="" className='w-20  h-20 object-cover rounded-[50%]'/>
                                <div>                           
                                    <span className='uppercase text-sm text-roxo font-semibold'>{mes.id}</span>
                                    <h3 className='font-fredoka text-2xl font-semibold'>{mes.nome}</h3>
                                </div>
                        </div>
                        <p className='mt-3 mb-2'>{mes.desc}</p>
                        <p className='text-black/50'>R$ <span className='text-4xl font-fredoka font-semibold text-roxo-escuro'>{mes.preco}</span> /mês por pet</p>
                        <p className='mt-1 text-sm'>Total <span className='font-fredoka font-semibold'>R${mes.valorTotal},00</span> econimia de <span className='font-fredoka font-semibold'> R${mes.economia},00</span></p>
                        
                        <span className='text-sm my-2 block text-black/50'>Cobrado uma vez por ano  2 meses grátis inclusos.</span>


                        <ul className='mt-4'>
                            {mes.beneficios.map((items)=>(
                                <li className='flex gap-2 items-center mb-2 pb-2'>
                                    <FaCheckCircle className="shrink-0 text-[#7B5AD9]" />
                                    
                                <span>{items}</span>
                               </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </article>
        )}
        <Link to='/contratar' className='text-center mt-5 block border border-roxo bg-roxo text-creme w-fit mx-auto py-4 px-8 font-nunito hover:bg-purple-800 rounded-2xl '>Contratar um dos planos</Link>
    </section>
  )
}
