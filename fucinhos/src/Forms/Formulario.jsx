import React, { useEffect, useState } from 'react'
import { Input } from './Input'
import { OptionsSelector } from './OptionsSelector'
import { PiDogFill, PiCatFill, PiGenderMaleFill, PiGenderFemaleFill, } from "react-icons/pi";
import { UploadImage } from './UploadImage';

export const Formulario = ({pet, index, atualizarPet, removerPet, salvarPet, mensagemSalvar, erros}) => 
    {
        
  return (
    <div
      className="flex flex-col gap-3 border border-gray-300 rounded-2xl mb-10 p-5"
    >
      <span className="block self-end text-green-500!">{mensagemSalvar}</span>
      <Input
        type="text"
        placeholder="Adicione o nome do seu pet"
        name="nome"
        label="Nome pet"
        value={pet.nome}
        erro={erros[`nome-${index}`]}
        onChange={(e) => atualizarPet(index, "nome", e.target.value)}
      />
      <Input
        type="text"
        placeholder="3 anos"
        name="idade"
        label="Idade"
        value={pet.idade}
        erro={erros[`idade-${index}`]}
        onChange={(e) => atualizarPet(index, "idade", e.target.value)}
      />
      <div className="grid md:grid-cols-2 gap-2">
        <OptionsSelector
          label="Selecione a especie"
          value={pet.especie}
          erro={erros[`especie-${index}`]}
          options={[
            {
              value: "Cachorro",
              icon: <PiDogFill size="22" />,
              label: "Cachorro",
            },
            { value: "Gato", icon: <PiCatFill size="22" />, label: "Gato" },
          ]}
          onChange={(valor) => atualizarPet(index, "especie", valor)}
        />

        <OptionsSelector
          label="Sexo"
          value={pet.sexo}
          erro={erros[`sexo-${index}`]}
          options={[
            {
              value: "Femea",
              icon: <PiGenderFemaleFill size="22" />,
              label: "Femea",
            },
            {
              value: "Macho",
              icon: <PiGenderMaleFill size="22" />,
              label: "Macho",
            },
          ]}
          onChange={(valor) => atualizarPet(index, "sexo", valor)}
        />
        <OptionsSelector
          label="Porte"
          value={pet.porte}
          erro={erros[`porte-${index}`]}
          options={[
            { value: "Pequeno", icon: "", label: "Pequeno" },
            { value: "Medio", icon: "", label: "Medio" },
            { value: "Grande", icon: "", label: "Grande" },
          ]}
          onChange={(valor) => atualizarPet(index, "porte", valor)}
        />
      </div>

      <OptionsSelector
        label="Plano"
        value={pet.plano}
        erro={erros[`plano-${index}`]}
        options={[
          {
            value: "Petisco",
            icon: "",
            label: "Petisco",
            description: "R$ 49,00/mês",
          },
          {
            value: "Patinha",
            icon: "",
            label: "Patinha",
            description: "R$ 89,90/mês",
          },
          {
            value: "Xodó",
            icon: "",
            label: "Xodo",
            description: "R$ 149,00/mês",
          },
        ]}
        onChange={(valor) => atualizarPet(index, "plano", valor)}
      />
      <div className="md:grid grid-cols-2 gap-3">
        <Input
          type="text"
         erro={erros[`raca-${index}`]}
          placeholder="YorkShire"
          name="raca"
          label="Raça"
          onChange={(e) => atualizarPet(index, "raca", e.target.value)}
        />
        <Input
          type="text"
          erro={erros[`peso-${index}`]}
          placeholder="5kg"
          name="peso"
          label="Peso"
          onChange={(e) => atualizarPet(index, "peso", e.target.value)}
          
        />
      </div>

      <UploadImage
        foto={pet.foto}
        onChange={(e) => atualizarPet(index, "foto", e.target.files[0])}
      />
      {pet.foto && (
        <img
          src={URL.createObjectURL(pet.foto)}
          className="w-20 h-20 rounded-full object-cover"
        />
      )}
      <div className="flex gap-5 justify-center items-center mt-5">
        <button
          type="button"
          className="cursor-pointer text-green-500 hover:text-green-700"
        >
          Salvar
        </button>
        <button
          type="button"
          onClick={() => removerPet(index)}
          className=" py-3 px-4 self-center rounded-2xl text-red-500 hover:text-red-700 cursor-pointer"
        >
          Remover pet
        </button>
      </div>
    </div>
  );
}
