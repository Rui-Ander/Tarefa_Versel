let valor = 0;

function atualizarFonte(){

let contador = document.getElementById("contador");

let tamanho = 70;

contador.style.fontSize = tamanho + "px";

while(contador.scrollWidth > contador.clientWidth && tamanho > 30){

tamanho--;

contador.style.fontSize = tamanho + "px";

}

}

function incrementar(){

let passo = parseInt(document.getElementById("passo").value);

if(isNaN(passo) || passo <= 0){
passo = 1;
}

valor += passo;

document.getElementById("contador").textContent = valor;

atualizarFonte();

}

function resetar(){

valor = 0;

document.getElementById("contador").textContent = valor;

document.getElementById("contador").style.fontSize = "70px";

}