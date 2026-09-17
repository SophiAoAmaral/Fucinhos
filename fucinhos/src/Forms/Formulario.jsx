import React from 'react'
import { Input } from './Input'
import { OptionsSelector } from './OptionsSelector'
import { PiDogFill, PiCatFill, PiGenderMaleFill, PiGenderFemaleFill, } from "react-icons/pi";

export const Formulario = ({
    pet, index, atualizarPet, removerPet, salvarPet
}) => {
  return (
    <section className='flex flex-col gap-3 border border-gray-300 rounded-2xl mb-10 p-5'>
       
       <Input type='text' placeholder='Adicione o nome do seu pet' name='nome' label='Nome pet' onChange={(e)=> atualizarPet("nome",e.target.value) }/>
       <Input type='text' placeholder='3 anos' name='idade' label='Idade' onChange={(e)=> atualizarPet("idade",e.target.value)}/>
       <div className='grid grid-cols-2 gap-2'>
       <OptionsSelector label='Selecione a especie' value={pet.especie} options={
        [{value:'Cachorro', icon:<PiDogFill size='22'/>, label:'Cachorro'},
         {value:'Gato', icon:<PiCatFill size='22'/>, label:'Gato'}, 
        ]}
        onChange={(valor) => atualizarPet(index, "especie", valor)}
        />
        
            <OptionsSelector label='Sexo' value={pet.sexo} options={
            [{value:'Femea', icon:<PiGenderFemaleFill size='22'/>, label:'Femea'},
             {value:'Macho', icon:<PiGenderMaleFill size='22'/>, label:'Macho'},
            ]}
            onChange={(valor) => atualizarPet(index, "sexo", valor)}
            />
            <OptionsSelector label='Porte' value={pet.porte} options={
            [{value:'Pequeno', icon:'', label:'Pequeno'},
             {value:'Medio', icon:'' , label:'Medio'},
             {value:'Grande', icon:'' , label:'Grande'},
            ]}
            onChange={(valor) => atualizarPet(index, "porte", valor)}
            />
        </div>

        <OptionsSelector label='Plano' value={pet.plano} options={
        [{value:'Petisco', icon:'', label:'Petisco', description:"R$ 89,90/mês"},
         {value:'Patinha', icon:'' , label:'Patinha', description:"R$ 89,90/mês"}, 
         {value:'Xodó', icon:'' , label:'Xodo',description:"R$ 89,90/mês"}, 
        ]}
        onChange={(valor) => atualizarPet(index, "plano", valor)}
        />
       <div className='grid grid-cols-2 gap-3'> 
           <Input type='text' placeholder='YorkShire' name='raca' label='Raça' onChange={(e)=> atualizarPet("raca",e.target.value)}/>
           <Input type='text' placeholder='5kg' name='peso' label='Peso' onChange={(e)=> atualizarPet("peso",e.target.value)}/>
           
       </div>
        
    <div className='flex gap-5'>
        <button type="button" onClick={() => salvarPet(index)}>Salvar</button>
        <button
            type="button"
            onClick={() => removerPet(index)}
            className='bg-red-500 text-white py-2 px-4 self-center rounded-2xl hover:bg-red-600 cursor-pointer'
            >
            Remover pet
        </button>
    </div>

    </section>
  )
}
