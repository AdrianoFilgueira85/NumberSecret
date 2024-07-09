let listaDeNumerosSorteados = [];
let quantidadeLimiteDeNumero = 10;
let numerosecreto = gerarNumeroSecreto();
tentativa = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate : 1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function gerarNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * quantidadeLimiteDeNumero + 1);
    let quantidadeDeElementoNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementoNaLista == quantidadeLimiteDeNumero){
        listaDeNumerosSorteados = [];      
}

   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroSecreto();

   }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numerosecreto) {
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}`;

        exibirTextoNaTela('h1', 'Acertou');
        exibirTextoNaTela('p', mensagem);
        //Habilitando o botão novo jogo 
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numerosecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativa++;
        limparCampo();
    }


}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numerosecreto = gerarNumeroSecreto();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

exibirMensagemInicial();






