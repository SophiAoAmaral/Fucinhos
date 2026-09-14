import React from 'react';
import dog1 from '../../public/dogcapa.jpg'
import {Link} from 'react-router'

export const Home = () => {
    const infos = [
        {title:'2.400+', text:'clínicas na rede'},
        {title:'24h', text:'emergência, todo dia'},
        {title:'15%', text:'off do 2º pet em diante'},
        {title:'3 min', text:'para contratar o plano'}]
  return (
    <section className='background'>
        <section className='container py-6 md:py-20'>
            <div className='grid grid-cols-[1fr_auto] text-center md:text-start md:gap-10 font-fredoka'>
                <div className='md:pt-20'>
                    <span className='bg-amarelo-pastel rounded-2xl py-2 px-4 text-roxo-escuro text-sm font-semibold '>Feito para casas com muitos fucinhos</span>
                    <h1 className='pt-5  font-semibold text-6xl md:text-7xl text-roxo-escuro'>Proteção e carinho para todos os seus pets, <span className='text-roxo'>o mês inteiro.</span></h1>
                    <p className='pt-6 font-nunito'>Consultas, vacinas, exames e atendimento emergencial 24 horas para todos os seus pets. Escolha o plano ideal para um ou vários companheiros e simplifique os cuidados em uma única fatura.</p>

                    <div className='flex gap-5 mt-5 md:mt-10 items-center mb-5 justify-center md:justify-start'>
                        <a className='text-roxo border border-roxo font-semibold py-3 px-4 hover:bg-roxo/20 rounded-2xl' href='#planos'>Escolher plano</a>
                        <a href='#coberturas' className='text-roxo py-3 px-4 hover:bg-roxo/20 rounded-2xl font-semibold'>Ver coberturas</a>
                    </div>
                    <span className='text-roxo-escuro/70  text-xs md:text-sm'> Sem carência para consultas · Cancele quando quiser · Pets de qualquer idade</span>
                </div>
                <div className='h-[600px] relative hidden md:inline-block'>
                    <img src={dog1} className='h-[100%] rounded-4xl' alt="" />
                    <span className='detail1 animate-float border-6 border-white '></span>
                    <span className='detail2 animate-float border-6 border-white '></span>
                </div>
            </div>


            <artcile className='flex bg-roxo/35 py-10 rounded-4xl mt-30 gap-20 text-center items-center justify-center'>
                {infos.map((info)=>(
                    <div>
                        <h3 className='font-bold font-fredoka text-5xl text-roxo-escuro'>{info.title}</h3>
                        <span className='text-black/50'>{info.text}</span>
                    </div>
                ))}
            </artcile>
        </section>
    </section>
  )
}
