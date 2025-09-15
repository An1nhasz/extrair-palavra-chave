import {PALAVRAS_RUINS} from "./palavrasruins";

const botaomostrapalavras = document.querySelector ('#botaopalavrachave')

botaomostrapalavras.addEventListener ('click' , mostrapalavrachave);

function mostraPalavraschave () {
     const texto = document.querySelector ('entrada-de-texto').Value;
     const camporesultado = document.querySelector('#resultado-palavrachave')
     const palavrachave = processatexto(texto);

    camporesultado.textContent = mostraPalavraschave.join(",");
}

function processaTexto(texto) {
   let palavras = texto.split(/\P{L}+/u);

for (let i in palavras) {
    palavras []
}

   palavras


                  {

 }

 
 }