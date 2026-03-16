let valor = 0;

function incrementar(){

let passo = parseInt(document.getElementById("passo").value);

if(isNaN(passo) || passo <= 0){
passo = 1;
}

valor += passo;

document.getElementById("contador").textContent = valor;

}

function resetar(){

valor = 0;

document.getElementById("contador").textContent = valor;

}