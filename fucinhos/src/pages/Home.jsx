import React from 'react';
import dog1 from '../../public/dogcapa.jpg'
import patinha from '../../public/assets/favicon.png'
import {Link} from 'react-router'
import { Planos } from '../components/Planos';
import { Coberturas } from '../components/Coberturas';
import pets from '../../public/pets.jpg'
import pets2 from '../../public/pets2.jpg'
import { Faq } from '../components/Faq';
import { comentarios } from '../obj/coments';

export const Home = () => {
    const infos = [
        {title:'2.400+', text:'clínicas na rede'},
        {title:'24h', text:'emergência, todo dia'},
        {title:'15%', text:'off do 2º pet em diante'},
        {title:'3 min', text:'para contratar o plano'}]

    const turminha = [
        {nome:'Nina', desc: 'Golden , 3 anos', img: `${import.meta.env.BASE_URL}pets/nina.jpg`},
        {nome:'Joaquim', desc: 'S/R , 6 anos', img: `${import.meta.env.BASE_URL}pets/joaquim.jpg`},
        {nome:'Lunna', desc: 'Yorkshire , 9 anos', img: `${import.meta.env.BASE_URL}pets/lunna.jpg`},
        {nome:'Tobias', desc: 'S/R , 5 anos', img: `${import.meta.env.BASE_URL}pets/tobias.jpg`}
    ]
  return (
    <section className="background">
      <section className="container py-6 md:py-20">
        <div className="grid grid-cols-[1fr_auto] text-center md:text-start md:gap-10 font-fredoka fadeUp ">
          <div className="md:pt-20 ">
            <span className="bg-amarelo-pastel rounded-2xl py-2 px-4 text-roxo-escuro text-sm font-semibold ">
              Feito para casas com muitos fucinhos
            </span>
            <h1 className="pt-5  font-semibold text-6xl md:text-7xl text-roxo-escuro">
              Proteção e carinho para todos os seus pets,{" "}
              <span className="text-roxo">o mês inteiro.</span>
            </h1>
            <p className="pt-6 font-nunito">
              Consultas, vacinas, exames e atendimento emergencial 24 horas para
              todos os seus pets. Escolha o plano ideal para um ou vários
              companheiros e simplifique os cuidados em uma única fatura.
            </p>

            <div className="flex gap-5 mt-5 md:mt-10 items-center mb-5 justify-center md:justify-start">
              <a
                className="text-roxo border border-roxo font-semibold py-3 px-4 hover:bg-roxo/20 rounded-2xl"
                href="#planos"
              >
                Escolher plano
              </a>
              <a
                href="#coberturas"
                className="text-roxo py-3 px-4 hover:bg-roxo/20 rounded-2xl font-semibold"
              >
                Ver coberturas
              </a>
            </div>
            <span className="text-roxo-escuro/70  text-xs md:text-sm">
              {" "}
              Sem carência para consultas · Cancele quando quiser · Pets de
              qualquer idade
            </span>
          </div>
          <div className="h-[600px] relative hidden md:inline-block">
            <img src={dog1} className="h-[100%] rounded-4xl" alt="" />
            <span className="detail1 animate-float border-6 border-white "></span>
            <span className="detail2 animate-float border-6 border-white "></span>
          </div>
        </div>

        <artcile className="hidden md:flex flex-wrap  bg-roxo/35 py-10 rounded-4xl mt-30 gap-20 text-center items-center justify-center">
          {infos.map((info) => (
            <div>
              <h3 className="font-bold font-fredoka md:text-5xl text-roxo-escuro">
                {info.title}
              </h3>
              <span className="text-black/50">{info.text}</span>
            </div>
          ))}
        </artcile>

        <section id="matilha" className=" mt-10 md:mt-20 text-center fadeUp ">
          <span className="text-roxo mb-5 font-nunito font-bold">
            A TURMINHA FUCINHOS
          </span>
          <p className="font-fredoka text-roxo-escuro font-bold text-4xl mb-2">
            Carinho que se multiplica{" "}
          </p>
          <p className="mb-7 text-sm font-nunito">
            Cada pet tem seu jeito especial de tornar nossos dias mais felizes.
          </p>
          <div className="flex snap-x snap-mandatory items-center justify-start gap-6 overflow-x-auto px-5 pb-4 md:justify-center">
            {turminha.map((pet) => (
              <div
                key={pet.id}
                className="flex shrink-0 snap-center flex-col text-center"
              >
                <img
                  src={pet.img}
                  alt={pet.nome}
                  className="mb-3 h-[200px] w-[200px] rounded-full border-7 border-white object-cover"
                />

                <h3 className="font-fredoka font-semibold text-roxo-escuro">
                  {pet.nome}
                </h3>

                <span className="font-nunito text-sm text-black/40">
                  {pet.desc}
                </span>
              </div>
            ))}
          </div>
        </section>

        <div id="planos">
          <Planos />
        </div>

        <Coberturas/>

      </section>

        <article className='grid md:grid-cols-2 bg-menta-pastel md:h-105  md:rounded-4xl md:w-[90%] m-auto'>
          <div className='md:p-10 px-5 font-nunito text-center md:text-start'>
            <span className='uppercase text-roxo text-xs font-bold pt-10 md:pt-0 block '>PARA TODA A FAMÍLIA</span>
            <p className='font-fredoka text-roxo-escuro font-semibold text-2xl md:text-4xl my-3 '>Todos os seus pets, uma só fatura</p>
            <p className='text-black/60 text-sm md:w-130 mb-5'>Cada pet conta com seu próprio plano, carteirinha digital e histórico de atendimento. Você reúne tudo em uma única cobrança e mantém os cuidados da família sempre organizados.</p>
            <ul className='mb-3 **:pb-1 text-black/60 text-sm md:text-base text-start '>
              <li className='flex gap-2'><span><img src={patinha}  className='w-5' alt="" /></span>15% de desconto a partir do segundo pet</li>
              <li className='flex gap-2'><span><img src={patinha}  className='w-5' alt="" /></span>20% de desconto a partir do quarto pet</li>
              <li className='flex gap-2'><span><img src={patinha}  className='w-5' alt="" /></span>Um plano diferente para cada necessidade</li>
              <li className='flex gap-2'><span><img src={patinha}  className='w-5' alt="" /></span>Carteirinha digital individual</li>
            </ul>
            <span className='block text-center text-sm text-roxo-escuro/60 pb-5 md:pb-0 mb-5'>Mais cuidado, menos complição</span>
          </div>

          <div className='hidden md:grid md:grid-cols-2 md:p-10 p-5 gap-3 md:pl-6'>
              <div className='relative'>
                <img src={pets} alt="" className='md:h-70  object-cover md:absolute top-4 rounded-2xl shadow-2xl'/>
              </div>
              <div>
                <img src={pets2} alt=""  className=' md:h-70 md:w-80 object-cover md:absolute rounded-2xl shadow-2xl'/>
              </div>
          </div>
        </article>

      <div className='  bg-amarelo-pastel mb-10 md:p-15 font-nunito mt-5 md:mt-20'>
            <div className='container pt-9 pb-10 md:pt-0 md:pb-0' >
              <span className='text-center block uppercase text-roxo font-semibold'>Quem usa recomenda</span>
              <h2 className='text-center font-fredoka text-3xl font-semibold text-roxo-escuro/90'>Cuidar dos seus pets ficou muito mais simples</h2>
              <div className='flex flex-wrap md:flex-nowrap justify-center items-center gap-6 mt-7 '>
                {
                  comentarios.map((comentario)=>(
                    <div className='bg-white p-5 w-80 rounded-2xl '>
                      <p className='font-fredoka font-medium text-roxo-escuro'>"{comentario.texto}"</p>
                        <span className='flex items-center gap-3 mt-4 text-sm text-roxo-escuro/80'><img src={comentario.img} alt="" className='w-10 h-10 rounded-[50%] object-cover'/>{comentario.nome}</span>
                    </div>
                  ))
                }
              </div>
            </div>
      </div>

        <Faq/>


        <section className='container bg-roxo/30 md:w-180  font-nunito md:text-center mb-20 p-8 md:p-15 flex flex-col justify-center items-center md:rounded-4xl'>
          <span className='w-15 bg-white rounded-[50%] inline-block'><img src={patinha} alt="" /></span>
                <h2 className='text-roxo-escuro font-fredoka text-4xl font-semibold md:w-90 mb-5 mt-5'>Proteja quem faz parte da sua família.</h2>
                <p className='text-roxo-escuro'>Cadastre seu pet em poucos minutos e tenha acesso a uma plataforma completa para acompanhar sua saúde, histórico e informações importantes sempre que precisar.</p>
                <div className='flex flex-wrap gap-5 md:gap-10 items-center justify-center mt-8 md:mt-2'>
                  <Link to='/contratar' className='bg-roxo text-white font-bold py-2 px-4 rounded-4xl hover:bg-roxo-escuro'>Contratar agora</Link>
                  <button>Falar com a gente</button>
                </div>
        </section>

        <section className='h-5'></section>
       
    </section>
  );
}
