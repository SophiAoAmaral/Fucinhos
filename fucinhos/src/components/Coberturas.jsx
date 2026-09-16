import React from 'react'
import {FaStethoscope, FaSyringe, FaKitMedical, FaFlask, FaScissors, FaCommentDots,} from "react-icons/fa6";

export const Coberturas = () => {
    const coberturas = [
      {
        id: 1,
        titulo: "Consultas e retornos",
        descricao:
          "Atendimento com clínicos gerais e especialistas da rede credenciada.",
        icone:  <FaStethoscope/>,
        cor: 'bg-roxo/15'
      },
      {
        id: 2,
        titulo: "Vacinas",
        descricao:
          "Proteção preventiva para manter a vacinação do seu pet sempre em dia.",
        icone: <FaSyringe/>,
        cor:'bg-rosa-pastel'
      },
      {
        id: 3,
        titulo: "Emergência 24 horas",
        descricao:
          "Atendimento veterinário para urgências e emergências a qualquer hora.",
        icone: <FaKitMedical/>,
        cor: 'bg-amarelo-pastel'
      },
      {
        id: 4,
        titulo: "Exames",
        descricao:
          "Exames laboratoriais e de imagem para auxiliar em diagnósticos e tratamentos.",
        icone: <FaFlask/>,
        cor:'bg-menta-pastel'
      },
      {
        id: 5,
        titulo: "Cirurgias",
        descricao:
          "Cobertura para procedimentos cirúrgicos, conforme as condições de cada plano.",
        icone: <FaScissors/>,
        cor: 'bg-roxo/15'
      },
      {
        id: 6,
        titulo: "Orientação veterinária",
        descricao:
          "Converse com profissionais para esclarecer dúvidas sobre a saúde do seu pet.",
        icone: <FaCommentDots/>,
        cor: 'bg-amarelo-pastel'
      },
    ];
  return (
    <section className='my-20 font-nunito'>
        <span className='uppercase text-roxo text-sm text-center block'>O que está coberto</span>
        <h2 className='text-center font-fredoka text-3xl font-semibold'>Da consulta de rotina ao susto de madrugada</h2>
        <span className=' md:hidden text-center block mt-5 font-semibold text-roxo-escuro'>Deslize para ver mais</span>
        <div className='flex gap-7 md:flex-wrap mt-8 snap-x snap-mandatory overflow-x-auto md:justify-center md:items-center '>
            {coberturas.map((item)=>(
                <div className='bg-cartoesbg h-50 w-70 p-5 rounded-4xl font-nunito'>
                    <div className={`${item.cor} w-8 h-8 flex items-center justify-center rounded-[50%]`}><span className='text-roxo '>{item.icone}</span></div> 
                    <h3 className='font-fredoka font-semibold my-2 text-xl'>{item.titulo}</h3>
                    <p className='w-50 text-black/40 text-sm'>{item.descricao}</p>
                </div>
            ))}
        </div>
        
    </section>
  )
}
