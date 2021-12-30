/*   Aqui estamos setando as variáveis que precisamos para guardar os dados que nosso programa irá utilizar. Variáveis são basicamente recipientes para valores (como números, ou strings ou textos). Variáveis são criadas com a palavra-chave var seguida de um nome para sua variável. Você pode atribuir um valor para sua variável com um sinal de igual (=) seguido do valor que você quer dar a ela.
    À primeira variável — numeroAleatorio — é atribuído um número aleatório entre 1 e 100, calculado usando um algoritmo matemático.  */

    //As últimas duas variáveis (contagemPalpites e botaoReinicio) são usadas para armazenar a contagem dos palpites do usuário, e o outro é uma referência para o botão de reset, que não existe ainda (mas irá existir).

    var numeroAleatorio= Math.floor(Math.random() * 100) + 1;

    var palpites = document.querySelector('.palpites');
    var ultimoResultado = document.querySelector('.ultimoResultado');
    var baixoOuAlto = document.querySelector('.baixoOuAlto');

    var envioPalpite = document.querySelector('.envioPalpite');
    var campoPalpite = document.querySelector('.campoPalpite');

    var contagemPalpites = 1;
    var botaoReinicio;

    //Funções são blocos reutilizáveis de código que você pode escrever uma vez e executá-lo de novo e de novo, eliminando a necessidade de repetir o código todas as vezes. Isso é realmente útil. Há várias formas de se definir funções, mas, por agora, vamos nos concentrar em um tipo simples. Aqui nós definimos uma função usando a palavra chave function, seguida de um nome, com parênteses colocados na sequência. Depois disso nós colocamos duas chaves ({ }). Dentro das chaves vai todo o código que queremos executar sempre que chamarmos a função.

    function conferirPalpite() {
var palpiteUsuario = Number(campoPalpite.value);
if (contagemPalpites === 1) {
palpites.textContent = 'Palpites anteriores: ';
}

palpites.textContent += palpiteUsuario + ' ';

if (palpiteUsuario === numeroAleatorio) {
ultimoResultado.textContent = 'Parabéns! Você acertou!';
ultimoResultado.style.backgroundColor = 'green';
baixoOuAlto.textContent = '';
configFimDeJogo();
} else if (contagemPalpites === 10) {
ultimoResultado.textContent = '!!!FIM DE JOGO!!!';
baixoOuAlto.textContent = '';
configFimDeJogo();
} else {
ultimoResultado.textContent = 'Errado!';
ultimoResultado.style.backgroundColor = 'red';
if(palpiteUsuario < numeroAleatorio) {
 baixoOuAlto.textContent = 'Seu palpite está muito baixo!';
} else if(palpiteUsuario > numeroAleatorio) {
 baixoOuAlto.textContent = 'Seu palpite está muito alto!';
}
}

contagemPalpites++;
campoPalpite.value = '';
campoPalpite.focus();
}

function configFimDeJogo() {
campoPalpite.disabled = true;
envioPalpite.disabled = true;
botaoReinicio = document.createElement('button');
botaoReinicio.textContent = 'Iniciar novo jogo';
document.body.appendChild(botaoReinicio);
botaoReinicio.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo() {
contagemPalpites = 1;

var reiniciarParas = document.querySelectorAll('.resultadoParas p');
for (var i = 0 ; i < reiniciarParas.length ; i++) {
reiniciarParas[i].textContent = '';
}

botaoReinicio.parentNode.removeChild(botaoReinicio);

campoPalpite.disabled = false;
envioPalpite.disabled = false;
campoPalpite.value = '';
campoPalpite.focus();

ultimoResultado.style.backgroundColor = 'white';

numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}