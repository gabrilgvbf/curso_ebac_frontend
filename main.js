const form = document.getElementById('formNumeros');
const numeroA=document.querySelector('.nro-a')

const numeroB=document.querySelector('.nro-b')

let resultado=false

function verificar ( nA, nB ){
    let verifique=nA>nB

    return verifique
}
form.addEventListener('submit', function(e){
        resultado= verificar (numeroA.value,numeroB.value)
    e.preventDefault();
    if (!resultado){
alert(' POSITIVO - DENTRO DO ESPERADO')
    }else{
        alert('NEGATIVO -  FORA DO ESPERADO') 
    }
}
)