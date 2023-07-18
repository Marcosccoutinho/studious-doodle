/*const carro = {
    cor: 'azul',
    motor: '1.0',
    modelo: 'sedan',
    
}
 carro.nome = 'siena'; //add uma propriedade
 delete carro.cor;  // deleta uma propriedade
 console.log (carro.cor) */

 const carro = {
    cor: 'azul',
    motor: '1.0',
    modelo: 'sedan',
    nome: 'fiat siena',
  descrever:function(){
    console.log (`carro ${this.nome} modelo ${this.modelo} motor ${this.motor} cor ${this.cor}`) //palavra reservada this substitui o objeto carro
  }
};
carro.descrever()