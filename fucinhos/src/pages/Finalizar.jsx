import React from 'react'
import { useLocation, Link } from 'react-router'
import { proximosPassos } from '../obj/proximospassos';
import { HiCheckCircle } from "react-icons/hi2";


export const Finalizar = () => {
     const { state } = useLocation();
     console.log(state)
     const location = useLocation();

console.log(location);
console.log(location.state);
  return (
    <section className=" background">
      <div className="container md:h-[80vh] pb-20">
        <div className="flex flex-col items-center justify-center pt-10 font-nunito text-center md:text-start">
          <span className="bg-green-500/15 p-2 rounded-[50%]">
            <HiCheckCircle size={30} className="text-green-600" />
          </span>
          <h1 className="font-fredoka text-5xl text-roxo-escuro font-semibold mb-2">
            Bem vindo a matilha!
          </h1>
          <p className="text-roxo-escuro">
            Pedido confirmado. Já mandamos a carteirinha digital para o seu
            e-mail, plano pronto para ser utilizado nas próximas 24 horas.
          </p>
        </div>
        <div className="grid md:grid-cols-[500px_auto] gap-5 md:gap-10 mt-10 justify-center font-nunito mb-10 md:mb-0">
          <div className="bg-lilas-pastel p-5 flex flex-col gap-6 rounded-2xl">
            <h2 className='text-center font-fredoka text-2xl font-semibold text-roxo-escuro'>Informações dos planos</h2>
            {state?.pets.map((pet) => (
              <div className='flex  items-center gap-5 border-b pb-5 border-gray-300'>
             
                 {pet.foto && (
                   <img
                     src={URL.createObjectURL(pet.foto)}
                     className="w-18 h-18 rounded-full object-cover"
                   />
                 )}
                   
          
                  <div>
                  <h2 ><span className='font-fredoka font-semibold'>Pet:</span> {pet.nome}</h2>
                  <span><span className='font-fredoka font-semibold'>Numero carteirinha:</span>  {Math.floor(100000 + Math.random() * 900000)}</span>
                  <p><span className='font-fredoka font-semibold'>Plano:</span> {pet.plano}</p>
                  </div>
                
              </div>
            ))}
          </div>
          <div className="bg-white p-5  rounded-2xl">
            <h3 className="text-center mb-5 font-fredoka text-roxo-escuro font-bold">
              O que acontece agora
            </h3>

            <div className="flex flex-col gap-2">
              {proximosPassos.map((i) => (
                <div className="font-nunito flex flex-col justify-center m-auto">
                  <div className="flex items-center gap-4">
                    <span className={`${i.cor} p-2 rounded-[50%] `}>
                      {i.icon}
                    </span>
                    <h3 className="font-fredoka text-roxo-escuro font-semibold text-sm">
                      {i.title}
                    </h3>
                  </div>
                  <p className="text-xs ml-12 w-70 text-roxo-escuro/60">
                    {i.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <article className="bg-menta-pastel md:mt-10 p-10 font-nunito rounded-2xl md:w-300 md:m-auto flex flex-col md:flex-row  justify-between items-center text-center md:text-start">
          <div className=''>
            <h2 className="font-fredoka text-3xl text-roxo-escuro font-semibold tracking-wide mb-2">
              Casa cheia? Adicione os outros focinhos
            </h2>
            <p className="md:w-140 text-sm text-roxo-escuro/70">
              Do segundo pet em diante são 15% off na mensalidade dele, e a
              cobrança continua chegando junta num boleto só.
            </p>
          </div>
          <Link to="/" className='bg-roxo py-2 px-4 rounded-2xl text-white font-semibold hover:bg-roxo-escuro transition mt-5 md:mt-0'>Cadastre mais pets</Link>
        </article>

      </div>
    </section>
  );
}
