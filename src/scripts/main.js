let form=document.getElementById('calculadora')

document.addEventListener('DOMContentLoaded',function(){
    

form.addEventListener('submit',function(evento){
evento.preventDefault()

let nx= parseFloat(document.getElementById('n1').value)
let ny= parseFloat(document.getElementById('n2').value)

let resultado=nx+ny


document.getElementById('resultado').innerText=resultado


})

})