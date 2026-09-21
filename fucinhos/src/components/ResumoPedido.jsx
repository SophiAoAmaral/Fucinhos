import React from 'react'
import { planosobj } from '../obj/Planoskbj';
export const ResumoPedido = ({pets, dono}) => {
    
  return (
    <div className="bg-white rounded-3xl p-6 top-6 font-nunito">

    <span className="uppercase text-xs font-bold tracking-widest text-roxo">
        Resumo do pedido
    </span>

    {pets.map((pet, index) => {

        const plano = planosobj.find(
            p => p.value === pet.plano
        );

        return (

            <div
                key={index}
                className="mt-6 border-b border-gray-200 pb-5"
            >

                <div className="flex gap-4 items-center">

                    {pet.foto && (
                        <img
                            src={URL.createObjectURL(pet.foto)}
                            className="w-18 h-18 rounded-full object-cover"
                        />
                    )}

                    <div>

                        <h2 className="font-fredoka text-2xl">
                            {pet.nome}
                        </h2>

                        <p className="text-gray-500">
                            {pet.especie} • {pet.sexo} • {pet.idade}
                        </p>

                    </div>

                </div>

                <div className="mt-6 border-b border-gray-200 pb-5">

                    <span className="text-xs uppercase text-gray-500">
                        Plano escolhido
                    </span>

                    <div className="flex justify-between items-center mt-2 bg-roxo/10 rounded-2xl px-4 py-3 ">

                        <span className="font-semibold">
                            {plano?.label}
                        </span>

                        <span className="font-bold text-xl">
                            R$ {plano?.preco.toFixed(2)}
                        </span>

                    </div>

                   

                </div>

                 <div>
                     <span className="uppercase text-xs font-bold tracking-widest text-roxo block mt-4">Responsável</span>
                        <div>
                            <h1 className='font-fredoka text-xl mt-1'>{dono.nome}</h1>
                            <p>{dono.email}</p>
                        </div>
                 </div>

                

            </div>




        )

    })}
                     <span className="uppercase text-xs font-bold tracking-widest text-roxo block mt-4">Total</span>
</div>
  )
}
