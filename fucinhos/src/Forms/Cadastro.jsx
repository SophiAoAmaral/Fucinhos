import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { Formulario } from './Formulario'
import patinha from '../../public/assets/favicon.png'
import { Sobre } from './Sobre'
import { ResumoPedido } from '../components/ResumoPedido'
export const Cadastro = () => {
    const[mensagemSalvar, setMensagemSalvar] = useState('');
    const[mensagem, setMensagem] = useState('');
    const [errosDono, setErrosDono] = useState({});
    const [errosPet, setErrosPet] = useState({});
    const mensagemErro = 'Preencha o campo';
    const [tipoPlano, setTipoPlano] = useState("mensal");
    const navigate = useNavigate()

    const [dono, setDono] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        cep:'',
        celular:''
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


function finalizarPedido(e) {

    e.preventDefault();

   const novosErros = {};

pets.forEach((pet, index) => {

    if (!pet.nome) {
        novosErros[`nome-${index}`] = {mensagemErro};
    }

    if (!pet.idade) {
        novosErros[`idade-${index}`] = {mensagemErro};
    }

    if (!pet.especie) {
        novosErros[`especie-${index}`] = {mensagemErro};
    }

    if (!pet.raca) {
        novosErros[`raca-${index}`] = {mensagemErro}
    }

    if (!pet.sexo) {
        novosErros[`sexo-${index}`] = {mensagemErro}
    }
    if (!pet.plano) {
        novosErros[`plano-${index}`] = {mensagemErro}
    }
    if (!pet.peso) {
        novosErros[`peso-${index}`] = {mensagemErro}
    }

    if (!pet.porte) {
        novosErros[`porte-${index}`] = {mensagemErro}
    }

});

setErrosPet(novosErros);



const novosErrosDono = {};

if (!dono.nome) {
    novosErrosDono.nome ={mensagemErro} ;
}

if (!dono.email) {
    novosErrosDono.email = {mensagemErro};
}

if (!dono.cep) {
    novosErrosDono.cep = {mensagemErro};
}

if (!dono.celular) {
    novosErrosDono.celular = {mensagemErro};
}

setErrosDono(novosErrosDono);

    if (Object.keys(novosErros).length > 0) {
        return;
    }

    console.log("Navegando...");
console.log({
  pets,
  dono,
});
  
    navigate('/finalizar', {state: {pets}})

    
};

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


function salvarDadosDono(e) {
  const { name, value } = e.target;
  setDono((prev) => ({
    ...prev,
    [name]: value,
  }));

    if (value.trim() !== "") {
    setErrosDono((prev) => {
      const copia = { ...prev };

      delete copia[name];

      return copia;
    });
  }

}
function atualizarPet(index, campo, valor) {
  const novosPets = [...pets];
  novosPets[index] = {
    ...novosPets[index],
    [campo]: valor,
  };
  setPets(novosPets);

  if (valor.trim() !== "") {
    setErrosPet((prev) => {
      const copia = { ...prev };

      delete copia[`${campo}-${index}`];

      return copia;
    });
  }

}

function salvarPet(e, index) {
  e.preventDefault()
  const novosPets = [...pets];
  novosPets[index] = {
    ...novosPets[index],
    salvo: true,
  };

  setPets(novosPets);

  setMensagemSalvar('Dados Salvos!')
  setTimeout(()=>{
    setMensagemSalvar('')
  },3000);

  console.log(pets)
}

function removerPet(index) {
  setPets((prev) =>
    prev.filter((_, i) => i !== index)
  );
  setMensagem('Pet Removido!')
  setTimeout(()=>{
    setMensagem('')
  },3000);

};


  return (
    <section className="background ">
      <section className="container ">
     <Link to='/' className='pt-10 md:pt-20 block font-fredoka text-roxo hover:underline'>← Voltar</Link>
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
        <form onSubmit={finalizarPedido} className="md:grid md:grid-cols-[auto_1fr]  auto-rows-auto  gap-10 md:items-start">
          <div>
          <div className="bg-white p-7 rounded-4xl mb-10">
            <span className='flex  font-semibold gap-2 text-xl mb-2 font-fredoka items-center'><span className='py-2 px-4 rounded-[100%] text-white font-bold bg-roxo'>1</span>Sobre o pet</span>
            {pets.map((pet, index) => (
              <Formulario
                key={index}
                pet={pet}
                index={index}
                atualizarPet={atualizarPet}
                removerPet={removerPet}
                salvarPet={salvarPet}
                mensagemSalvar={mensagemSalvar}
                erros={errosPet}
                tipoPlano={tipoPlano}
              />
            ))}
             <span className="text-green-500">{mensagem}</span>
            <button onClick={adicionarPet} type='button' className='m-auto block cursor-pointer py-3 px-4 bg-roxo/75 hover:bg-roxo-escuro hover:text-white transition rounded-2xl'>Adicionar outro pet</button>
          </div>
          <article className=' bg-white p-5 rounded-2xl flex flex-col  mb-10'>
              <span className='flex  font-semibold gap-2 text-xl mb-2 font-fredoka items-center'><span className='py-2 px-4 rounded-[100%] text-white font-bold bg-roxo'>2</span>Sobre você</span>
              <Sobre dono={dono} salvarDadosDono={salvarDadosDono} erros={errosDono}/>
              
            </article>
            </div>

            <div className=' top-6 self-start pb-10 md:pb-0'>
              <ResumoPedido pets={pets} dono={dono} tipoPlano={tipoPlano} setTipoPlano={setTipoPlano}/>

              <button  className='m-auto block mt-4  px-6 py-3 bg-roxo text-white rounded-2xl hover:bg-roxo-escuro cursor-pointer transition'>Contratar plano</button>
            </div>

           
        </form>
      </section>
    </section>
  );
}
