/*function numero (valor){
    return valor*valor;
}
console.log (numero(10))*/


/*function incrementarJuros(valor,percentualDeJuros) {
    const valorDeAcrecimo =(percentualDeJuros/100)*valor;
    return valor + valorDeAcrecimo;
}
console.log(incrementarJuros(70,25))*/




function calcularImc(peso,altura){
    return peso/Math.pow(altura,2) //peso dividido por altura ao quadrado
}
function classificarImc (imc) {
    if (imc <18.5){
        return 'abaixo do peso';
    }else if  (imc >=18.5 && imc < 25) {
        return 'peso normal';
    }else if (imc >=25 && imc < 30) {
        return 'acima do peso';
    }else if (imc >=30 && imc < 40) {
        return 'obeso';
    }else{
        return 'obesidade morbida'
    }


    }
  /* function main(){
    const peso = 75
    const altura = 1.75
    const imc = calcularImc(peso,altura)
    console.log (classificarImc(imc))
    }
    main= function () {
        console.log ('posso fazer oque quiser ')
    }
    main()*/

    (function(){
        const peso = 75
        const altura = 1.75
        const imc = calcularImc(peso,altura)
        console.log (classificarImc(imc))
        })()                                 //com a funçao entre parenteses e invocada imediatamente e executada assim que definida
        