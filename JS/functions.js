// Manipulação dos objetos DOM (Document Object Model)
// Representação de dados dos objetos que compõem uma estrutura 
// e o conteudo de um documento web

// Essencial para manipular e interagir com elementos de uma pagina
// document.querySelector()

// Exemplo:

const titulo = document.querySelector('h1');
titulo.textContent = 'Texto Modificado'; // Modifica o texto do elemento

// Uso principal: buscar e modificar elementos HTML

// Document.createElement()

// Cria novos elementos dinamicamente

// Exemplo:

const novoElemento = document.createElement('p');
novoElemento.textContent = 'Paragrafo Adicionado';
document.body.appendChild(novoElemento);

// Uso principal: Adicionar novos elementos ao DOM

// addEventListener()
// funções que lidam com interações dos usuarios
// Sua função é adicionar um ouvinte para eventos (como cliques)

const botao = document.querySelector('button');
botao.addEventListener('click', () => {
    alert('Botão Clicado!');
});

// Uso principal: Criar interatividade como cliques ou movimentos do mouse

// setTimeout()
// Controlam ações que ocorrem em intervalos ou apos um tempo
// Executa uma função apos um periodo de tempo (unidade de medida > milisegundos)

setTimeout(() => {
    alert('Executado apos 2 segundos!');
},2000);

// alert > ele executa o toString do seu objeto e apresenta em tela
// console.log > ele registra a informação no console no navegador ficando restrita ao conhecimento do desenvolvedor
// Uso prinicipal atrasar execuções ou criar temporizadores

// Aula JavaScript > DOM e Functions