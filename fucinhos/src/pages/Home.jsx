import React from 'react';
import dog1 from '../../public/dogcapa.jpg'
import {Link} from 'react-router'
import { Planos } from '../components/Planos';

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
        <div className="grid grid-cols-[1fr_auto] text-center md:text-start md:gap-10 font-fredoka">
          <div className="md:pt-20">
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

        <artcile className="hidden md:flex flex-wrap bg-roxo/35 py-10 rounded-4xl mt-30 gap-20 text-center items-center justify-center">
          {infos.map((info) => (
            <div>
              <h3 className="font-bold font-fredoka md:text-5xl text-roxo-escuro">
                {info.title}
              </h3>
              <span className="text-black/50">{info.text}</span>
            </div>
          ))}
        </artcile>

        <section id="matilha" className=" mt-10 md:mt-20 text-center">
          <span className="text-roxo mb-5 font-nunito">
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
      </section>
    </section>
  );
}
