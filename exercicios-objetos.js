/* 
1- crie uma classe para representar carros.
os carros possuem marca,uma cor e um gasto medio de combustivel por km rodado.
crie um metodo que dado a quantidade de quilometros e o preço do combustivel nos de o valor gasto em reais para realizar este percurso.*/

class Carro {
    marca;
    cor;
    consumoMedio;

    constructor (marca,cor,consumoMedio) {
        
        this.cor = cor;
        this.marca = marca;
        this.consumoMedio = consumoMedio;
        

    }
    
        calcularGastos(percursoEmKm,valorDoCombustivel,){
            return percursoEmKm * this.consumoMedio * valorDoCombustivel;
              
    }
}
   
const civic = new Carro ('honda','preto', 1 / 12);
console.log (civic.calcularGastos (50,5));
const cobalt = new Carro ('chevrolet','prata', 1 / 10);
console.log (cobalt.calcularGastos (50,5));




