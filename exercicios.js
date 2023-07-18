/* // 1) crie uma funçao que retorne seu nome e se vc e maior ou menor de idade

function escrevaMeuNome(nome){
    return ('seu nome e ' + nome);
 }


function verificarIdade (idade) {

    if ( idade >=18 ) {
        console.log (escrevaMeuNome ('marcos')+ ' vc e maior de idade') ;
    } else {
        console.log (escrevaMeuNome ('marcos') + ' vc e menor de idade');
    }

}
verificarIdade (10);
*/

/*2) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1- À vista Débito, recebe 10% de desconto;
2- À vista no Dinheiro ou PIX, recebe 15% de desconto;
3- Em duas vezes, preço normal de etiqueta sem juros;
4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/

/*const precoEtiqueta = 100 ;

function aplicarDesconto(pagamento){
    if (pagamento === 1 ) {
        console.log (precoEtiqueta - (precoEtiqueta * 0.10));
    }else if (pagamento === 2){
        console.log (precoEtiqueta - (precoEtiqueta * 0.15));
    }else if(pagamento === 3){
        console.log (precoEtiqueta)
    }else if (pagamento === 4){
        console.log (precoEtiqueta + (precoEtiqueta * 0.2));
    }else{
        console.log ('escolha uma forma de pagamento')
    }
}
aplicarDesconto() */

// mesma funçao de outra forma

const precoEtiqueta = 100;
 const pagamento = 2;

function aplicarDesconto(valor,desconto){
    return (valor - (valor * (desconto/100)))
}
function aplicarJuros(valor,juros){
    return (valor + (valor * (juros/100)))
}
    if (pagamento === 1 ) {
        console.log (aplicarDesconto(precoEtiqueta ,10));
    }else if (pagamento === 2){
        console.log (aplicarDesconto(precoEtiqueta,15));
    }else if(pagamento === 3){
        console.log (precoEtiqueta)
    }else if (pagamento === 4){
        console.log (aplicarJuros(precoEtiqueta , 10));
    }else{
        console.log ('escolha uma forma de pagamento')
    }


  
