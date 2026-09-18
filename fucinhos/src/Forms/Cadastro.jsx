import React, { useState } from 'react'
import { Link } from 'react-router'
import { Formulario } from './Formulario'
import patinha from '../../public/assets/favicon.png'
import { Sobre } from './Sobre'
export const Cadastro = () => {
    const [dono, setDono] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        endereco:'',
        numero: ''
    });

    const petInicial = {
    nome: "",
    especie: "",
    raca: "",
    idade: "",
    sexo: "",
    porte: "",
    peso: "",
    plano: "",
    foto: null,
    salvo: false,
};

const [pets, setPets] = useState([petInicial]);

   function adicionarPet() {
  setPets((prev) => [
    ...prev,
    {
      nome: "",
      especie: "",
      raca: "",
      idade: "",
      sexo: "",
      porte: "",
      peso: "",
      plano: "",
      foto: null,
    },
  ]);
}
function atualizarPet(index, campo, valor) {
  const novosPets = [...pets];
  novosPets[index] = {
    ...novosPets[index],
    [campo]: valor,
  };
  setPets(novosPets);
}

function salvarPet(index) {
  const novosPets = [...pets];
  novosPets[index] = {
    ...novosPets[index],
    salvo: true,
  };

  setPets(novosPets);
}

function removerPet(index) {
  setPets((prev) =>
    prev.filter((_, i) => i !== index)
  );
};


  return (
    <section className="background ">
      <section className="container">
     <Link to='/' className='pt-20 block font-fredoka text-roxo hover:underline'>← Voltar</Link>
        <div className=" text-center mb-5 flex flex-col items-center justify-center gap-2">
          <span className="inline-block rounded-[50%] bg-roxo/40">
            <img src={patinha} alt="" className="w-15 h-15" />
          </span>
          <h1 className="font-fredoka text-4xl text-roxo-escuro">
            Falta pouco para proteger quem faz parte da sua família
          </h1>
          <p className="md:w-200 text-roxo-escuro/80">
            Preencha as informações do seu primeiro pet. Depois, você poderá
            adicionar quantos outros desejar diretamente pelo aplicativo.
          </p>
        </div>
        <section className="md:grid md:grid-cols-[auto_1fr] gap-10 md:items-start">
          <div className="bg-white p-7 rounded-4xl">
            <span className='flex  font-semibold gap-2 text-xl mb-2 font-fredoka items-center'><span className='py-2 px-4 rounded-[100%] text-white font-bold bg-roxo'>1</span>Sobre o pet</span>
            {pets.map((pet, index) => (
              <Formulario
                key={pet.index}
                pet={pet}
                index={index}
                atualizarPet={atualizarPet}
                removerPet={removerPet}
                salvarPet={salvarPet}
              />
            ))}
            <button onClick={adicionarPet}>Adicionar outro pet</button>

            <article>
              <Sobre dono={dono} />
            </article>
          </div>
          <div className="bg-roxo/40 md:h-20"></div>
        </section>
      </section>
    </section>
  );
}
