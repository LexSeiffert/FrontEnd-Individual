// Comentário de Linha

/* 
Comentário 
de
bloco 
*/

// 3 formas de declarar variáveis - var, let e const
// const nome = prompt("Digite seu nome: ");
// console.log(nome);
// alert(nome);

// Tipos no JS: Number, String, Boolean, Undefined, Object(null), function

let idade = function () {
    console.log("Função dentro da variável");
  };
  
  // console.log(typeof idade);
  
  // idade = "João";
  // console.log(idade);
  
  // Objetos
  const pessoa = {
    nome: "João Felipe",
    idade: 32,
    estaVivo: true,
    filho: {
      nome: "João",
      idade: 6,
    },
  };
  
  // console.log(pessoa.idade);
  
  // pessoa.idade = 33;
  
  // console.log(pessoa.idade);
  
  // ARRAY []
  
  const frutas = ["abacaxi", "maçã", "laranja"];
  // console.log(frutas);
  // console.log(frutas.length); tamanho do array
  
  const misturado = [12983, true, {}, [1, true, undefined]];
  
  // console.log(misturado);
  
  //Adiciona no final do Array
  frutas.push("manga");
  // console.log(frutas);
  
  //Retira do final do Array
  frutas.pop();
  // console.log(frutas);
  
  //Adiciona no Início do Array
  frutas.unshift("Goiaba");
  // console.log(frutas);
  
  //Retira do Início do Array
  frutas.shift();
  // console.log(frutas);
  
  // Estruturas de Decisão - if/else if/else | switch case
  // > < >= <= != ==
  //  == != Comparação Simple (valor)
  // === !== Comparação Estrita (valor e tipo)
  // && || !
  
  // const minhaIdade = 15;
  // const cpf = true;
  // console.log(!cpf);
  
  // if (minhaIdade >= 18 && cpf == true) {
  //   console.log("Maior de Idade");
  // } else if (minhaIdade < 0) {
  //   console.log("Você ainda não nasceu");
  // } else {
  //   console.log("Você é menor de Idade");
  // }
  
  // switch (18) {
  //   case 15:
  //     console.log("Você tem 15 anos");
  //     break;
  //   case 18:
  //     console.log("Você tem 18 anos");
  //     break;
  //   default:
  //     console.log("Caso não seja nenhuma opção anterior");
  //     break;
  // }
  
  // Peça dois números ao usuário e calcule e mostre a média  (num1 + num2)/2,
  // const num1 = parseFloat(prompt("Digite um número"));
  // console.log(num1);
  
  // Estruturas de Repetição for, while, do while
  
  const numeros = [1, 2, 3, 4, 5];
  
  // for (let index = 0; index < numeros.length; index++) {
  //   console.log(numeros[index]);
  // }
  
  // numeros.forEach((item, index) => {
  //   console.log("Index: ", index);
  //   console.log(item);
  // });
  
  const retornoArray = numeros.map((item, index) => {
    console.log("Index: ", index);
    console.log(item);
    return item + 1;
  });
  
  console.log(retornoArray);
  
  // for (let index = 0; index < 3; index++) {
  //   console.log(numeros[index]);
  // }
  
  // let count = 0;
  // while (count < 10) {
  //   console.log(count);
  //   count++;
  // }
  
  // do {
  // } while (condition);
  
  function somar(num1, num2) {
    const soma = num1 + num2;
    return soma;
  }
  
  // função Anônima
  const somaDoisNumeros = function (num1, num2) {
    const soma = num1 + num2;
    return soma;
  };
  
  // Arrow Function
  const somaNumeros = (num1, num2) => {
    const soma = num1 + num2;
    return soma;
  };
  
  const somas = (num1, num2) => num1 + num2;
  
  num1 = 1;
  num2 = 2;
  const retorno = somar(num1, num2);
  // console.log("A soma de " + num1 + " + " + num2 + " é igual a " + retorno + ".");
  // console.log(`A soma de ${num1} + ${num2} é igual a ${retorno}.`);