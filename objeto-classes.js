/*class pessoa {
    nome;
    idade;

    descrever() {  //dentro de uma classe nao preciso por function
        console.log(`meu nome e ${this.nome} e minha idade e ${this.idade}`)
    }
}
const marcos = new pessoa();
marcos.nome = 'marcos';
marcos.idade = '37';

const renan= new pessoa();
renan.nome = 'renan';
renan.idade = '35';

marcos.descrever()
renan.descrever()*/

/*class pessoa {
    nome;
    idade;

    constructor(nome,idade) {
        this.nome=nome;
        this.idade=idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {  //dentro de uma classe nao preciso por function
        console.log(`meu nome e ${this.nome} e minha idade e ${this.idade}`); 
    }
}
const marcos =new pessoa ('marcos',37);
const renan =new pessoa ('renan',35);

console.log (marcos)
renan.descrever()*/

class pessoa {
    nome;
    idade;

    constructor(nome,idade) {
        this.nome=nome;
        this.idade=idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {  //dentro de uma classe nao preciso por function
        console.log(`meu nome e ${this.nome} e minha idade e ${this.idade}`); 
    }
}
function compararPessoas (p1,p2) {
    if (p1.idade > p2.idade) {
        console.log (`${p1.nome} e mais velho que ${p2.nome}`);
    }else if ((p2.idade > p1.idade)){
        console.log (`${p2.nome} e mais velho que ${p1.nome}`);
    } else {
        console.log (`${p1.nome} e  ${p2.nome} tem a mesma idade`);
    }

}
const marcos =new pessoa ('marcos',37);
const renan =new pessoa ('renan',35);

compararPessoas(marcos,renan);