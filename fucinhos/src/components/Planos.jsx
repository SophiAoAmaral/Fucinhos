import React, { useState } from 'react'
import { Link } from 'react-router';
export const Planos = () => {
    const [plano, setPlano] = useState(true);

    const mensal =[
        {id:'miúdo', nome:'Petisco', img:'', desc:'O básico bem feito para pets saudáveis e rotina em dia.', preco:49, beneficios:['4 consultas durante 12 meses', 'Vacinas anuais incluídas', 'Exames simples de rotina', 'Teleorientação 24h']},
        {id:'Completo', nome:'Patinha', img:'', desc:'Rotina completa mais o susto de madrugada coberto.', preco:89, beneficios:['Consultas ilimitadas', 'Emergência 24h na rede toda', 'Exames de imagem e laboratório', 'Castração e cirurgias simples']},
        {id:'Sem limite', nome:'Xodó', img:'', desc:'Para idosos, crônicos e para quem não quer pensar em teto.', preco:149, beneficios:['Tudo do Patinha, sem teto anual', 'Cirurgias complexas e internação', 'Fisioterapia e tratamento contínuo', 'Transporte para consultas veterinárias']},
    ];
    const anual = [
  {
    id: "miúdo",
    nome: "Petisco",
    img: "",
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
    img: "",
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
    img: "",
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
    <section className='mt-30'>

        <div className='text-center'>  
            <span className='uppercase text-roxo'>Planos</span>
            <h3 className='text-4xl font-fredoka font-bold'>Um plano para cada fase da vida</h3>
            <p className='text-sm text-black/50 mt-2'>Escolha a cobertura ideal para cada pet e reúna todos em uma única fatura.</p>
       </div>
        <div className='flex items-center justify-center gap-7 mt-5 font-fredoka **:border **:py-2 **:px-4 **:rounded-2xl **:border-roxo  **:cursor-pointer '>
            <button onClick={()=> setPlano(true)} className={plano ? 'bg-roxo text-white' : 'bg-roxo/30 text-roxo-escuro'}>Mensal</button>
            <button onClick={()=> setPlano(false)} className={!plano ? 'bg-roxo text-white' : 'bg-roxo/30 text-roxo-escuro'}>Anual</button>
        </div>
        <span className='text-center  inline-block my-3 border border-amarelo-pastel bg-amarelo-pastel py-2 px-4 rounded-2xl text-roxo-escuro font-fredoka'>2 meses grátis no anual</span>

        {plano ? (
            <article className='flex gap-7 items-center justify-center'>
                {mensal.map((mes)=>(
                    <div className='bg-white h-80'>
                        <div>
                            <img src="" alt="" />
                                <div>                           
                                    <span>{mes.id}</span>
                                    <h3>{mes.nome}</h3>
                                </div>
                        </div>
                        <p>{mes.desc}</p>
                        <p>R$ <span>{mes.preco}</span>/mês por pet</p>
                        <span>Cobrado todo mês, cancele quando quiser.</span>

                        <ul>
                            {mes.beneficios.map((items)=>(
                                <li>{items}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </article>
        ) : (
            <article className='flex gap-7 items-center justify-center'>
                {anual.map((mes)=>(
                    <div className='bg-white h-80'>
                        <div>
                            <img src="" alt="" />
                                <div>                           
                                    <span>{mes.id}</span>
                                    <h3>{mes.nome}</h3>
                                </div>
                        </div>
                        <p>{mes.desc}</p>
                        <p>R$ <span>{mes.preco}</span>/mês por pet</p>
                        <p>Total R${mes.valorTotal},00 <span>econimia de R${mes.economia},00</span></p>
                        
                        <span>Cobrado uma vez por ano — 2 meses grátis inclusos.</span>


                        <ul>
                            {mes.beneficios.map((items)=>(
                                <li>{items}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </article>
        )}
        <Link to='/contratar'>Contratar um dos planos</Link>
    </section>
  )
}
