function celular(armazenamento, memoriaram) { //objeto de abstração

    this.amarmazenamento = armazenamento
    this.memoriaram = memoriaram


}





function xiamoi(so, processador) {  //classe

    this.processador = processador
    this.sistemaOperacional = so
    celular.call(this, 64, 3)



}

function samsung(so, processador) { //classe


    this.processador = processador
    this.sistemaOperacional = so
    celular.call(this, 128, 6)

}

function iphone(so, processador) { //classe


    this.processador = processador
    this.sistemaOperacional = so
    celular.call(this, 128, 4)
}




const celular1 = new iphone('IOS 14.8', 'A14 BIONIC') //instância
const celular2 = new xiamoi('MIUI 10.11', 'SNAPDRAGON 680') //instância
const celular3 = new samsung('ONE UI 3.2', 'EXYNOS 2200') //instância

console.log(celular1)
console.log(celular2)
console.log(celular3)



