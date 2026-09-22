import React from 'react'
import { planosobj } from '../obj/Planoskbj';
import { Input } from '../Forms/Input';
export const ResumoPedido = ({pets, dono , tipoPlano, setTipoPlano}) => {

    const total = pets.reduce((soma, pet) => {
    const plano = planosobj.find(
        p => p.value === pet.plano
    );
         if (!plano) return soma;
    return soma + (
        tipoPlano === "mensal"
            ? plano.mensal
            : plano.anual
    );
}, 0);



  return (
    <div className="bg-white rounded-3xl p-6 top-6 font-nunito">

    <span className="uppercase text-xs font-bold tracking-widest text-roxo">
        Resumo do pedido
    </span>

    {pets.map((pet, index) => {

        console.log("pet.plano:", pet.plano);
            console.log(planosobj);

        const plano = planosobj.find(
            p => p.value === pet.plano
        );

        return (
          <div key={index} className="mt-6 border-b border-gray-200 pb-5">
            <div className="flex gap-4 items-center">
              {pet.foto && (
                <img
                  src={URL.createObjectURL(pet.foto)}
                  className="w-18 h-18 rounded-full object-cover"
                />
              )}

              <div>
                <h2 className="font-fredoka text-2xl">{pet.nome}</h2>

                <p className="text-gray-500">
                  {pet.especie} • {pet.sexo} • {pet.idade}
                </p>
              </div>
            </div>

            <div className="mt-6 border-b border-gray-200 pb-5">
              <span className="text-xs uppercase text-gray-500">
                Plano escolhido
              </span>
              <div className="flex bg-gray-100 rounded-2xl p-1">
                <button
                  onClick={() => setTipoPlano("mensal")}
                  type="button"
                  className={`flex-1 py-2 rounded-xl transition ${
                    tipoPlano === "mensal"
                      ? "bg-roxo text-white"
                      : "text-gray-600"
                  }`}
                >
                  Mensal
                </button>

                <button
                  onClick={() => setTipoPlano("anual")}
                  type="button"
                  className={`flex-1 py-2 rounded-xl transition ${
                    tipoPlano === "anual"
                      ? "bg-roxo text-white"
                      : "text-gray-600"
                  }`}
                >
                  Anual
                </button>
              </div>
              <div className="flex justify-between font-nunito items-center mt-2 bg-roxo/10 rounded-2xl px-4 py-3 ">
                <p>
                  {plano
                    ? tipoPlano === "mensal"
                      ? `R$ ${plano.mensal.toFixed(2)}/mês`
                      : `R$ ${plano.anual.toFixed(2)}/ano`
                    : "Selecione um plano"}
                </p>
              </div>
            </div>

            <div>
              <span className="uppercase text-xs font-bold tracking-widest text-roxo block mt-4">
                Responsável
              </span>
              <div>
                <h1 className="font-fredoka text-xl mt-1">{dono.nome}</h1>
                <p>{dono.email}</p>
              </div>
            </div>
          </div>
        );

    })}
    <div className="mt-2">
  <div className="flex justify-between items-center border-b border-gray-200 pb-5">
    <span className="font-nunito text-xl">
      Total mensal
    </span>

    <span className="">
      R$ {total.toFixed(2)}
    </span>
  </div>
</div>



<div className='mt-6 font-nunito flex flex-col gap-2'>
  <span className='block uppercase mb-2 text-xs font-bold text-roxo'>Dados de pagamento</span>
    <Input label='Nome completo' placeholder='Nome escrito no cartão'/>
    <Input label='Número no cartão' placeholder='0000 0000 0000 0000'/>
    <div className='grid grid-cols-2 gap-4'>
      <Input placeholder="MM/AA"  label='Data de validade'/>
      <Input placeholder="CVV" label='CVV'/> 
    </div>
</div> 
</div>
  )
}
