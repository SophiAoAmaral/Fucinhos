import React, { useState } from 'react'
import { planosobj } from '../obj/Planoskbj';
import { Input } from '../Forms/Input';
import { Finalizar } from '../pages/Finalizar';
import { Link } from 'react-router';
export const ResumoPedido = ({pets, dono , tipoPlano, setTipoPlano, enviado}) => {

    const total = pets.reduce((soma, pet, index) => {
      const plano = planosobj.find((p) => p.value === pet.plano);

      if (!plano) return soma;

      const valor = tipoPlano === "mensal" ? plano.mensal : plano.anual;

      const valorFinal = index >= 1 ? valor * 0.85 : valor;

      return soma + valorFinal;
    }, 0);

    const parcelas = Array.from({ length: 12 }, (_, i) => ({
      vezes: i + 1,
      valor: total / (i + 1)
    }));

    


  return (
    <div className="bg-white rounded-3xl p-6 top-6 font-nunito">
      <span className="uppercase text-xs font-bold tracking-widest text-roxo">
        Resumo do pedido
      </span>
      <div className="flex gap-2 mb-5 items-center justify-center bg-roxo/50 p-1 rounded-2xl"> 
        <button type="button" onClick={() => setTipoPlano("mensal")} className={`py-2 px-4 ${tipoPlano === 'mensal' ? 'bg-white text-roxo-escuro' : 'ttext-roxo-escuro'} rounded-2xl`}>
           Mensal 
        </button> 
        <button type="button" onClick={() => setTipoPlano("anual")}   className={`py-2 px-4 ${tipoPlano === 'anual' ? 'bg-white text-roxo-escuro' : 'text-roxo-escuro '} rounded-2xl`}>
           Anual 
        </button> 
      </div>
    
      {pets.map((pet, index) => {

        const plano = planosobj.find((p) => p.value === pet.plano);
        const valor =
          tipoPlano === "mensal" ? (plano?.mensal ?? 0) : (plano?.anual ?? 0);

        const valorFinal = index >= 1 ? valor * 0.85 : valor;
      

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
                {!pet.especie && !pet.sexo && !pet.idade ? (
                  <p className="text-gray-500">Preencha os dados do pet</p>
                ) : (
                  <p className="text-gray-500">
                    {pet.especie} • {pet.sexo} • {pet.idade}
                  </p>
                )}
              </div>
            </div>

            {plano && (
              <div className="mt-5 bg-roxo/10 rounded-2xl p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs uppercase text-roxo font-bold">
                      Plano
                    </p>

                    <h3 className="font-fredoka text-lg">{plano.label}</h3>
                  </div>

                  <div className="text-right">
                    {index >= 1 && (
                      <p className="text-sm text-gray-400 line-through">
                        R$ {valor.toFixed(2)}
                        {tipoPlano === "mensal" ? "/mês" : "/ano"}
                      </p>
                    )}

                    <p className="text-xl font-semibold">
                      R$ {valorFinal.toFixed(2)}
                      {tipoPlano === "mensal" ? "/mês" : "/ano"}
                    </p>

                    {index >= 1 && (
                      <p className="text-xs text-green-600 font-semibold">
                        15% OFF
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      <div>
              <span className="uppercase text-xs font-bold tracking-widest text-roxo block mt-4">
                Responsável
              </span>
              <div>
                <h1 className="font-fredoka text-xl mt-1">{dono.nome}</h1>
                <p>{dono.email}</p>
              </div>
            </div>


      <div className="mt-2">
        <div className="flex justify-between items-center border-b border-gray-200 pb-5">
          <span className="font-nunito text-xl">Total mensal</span>

          <span className="">R$ {total.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-6 font-nunito flex flex-col gap-2">
        <span className="block uppercase mb-2 text-xs font-bold text-roxo">
          Dados de pagamento
        </span>
        <Input label="Nome completo" placeholder="Nome escrito no cartão" />
        <Input label="Número no cartão" placeholder="0000 0000 0000 0000" />
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="MM/AA" label="Data de validade" />
          <Input placeholder="CVV" label="CVV" />
        </div>

      {tipoPlano === 'anual' && (
        <select className='border px-4 py-3 rounded-2xl border-gray-300 focus:border-roxo-escuro mt-5'>
      
          {parcelas.map((parcela) => (
            <option key={parcela.vezes}>
              {parcela.vezes}x de R$ {parcela.valor.toFixed(2)}
            </option>
          ))}
            </select>
        )}
          

      
      </div>

     
          
    </div>
  );
}
