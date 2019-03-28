/* --observação ESLINT--

let x=2;
 // ao passarmos o mouse por cima ele da um warning,
 // dizendo que devemos definir a variavel
// ele vai dizer quando faltar ; e outros
x=3;
const y=3;

console.log(x+y);
*/


// JSON
// Javascript
// Object
// Notation

// parte da POO(Programação Orientada a Objetos)

/*

anteriormente tinhamos
thNome='thiago';
thIdade=16;

agora temos*/

const th={ // json => {}
    nome: 'Thiago',
    idade: 16
};

// {chave:valor, chave2:valor, chave3:valor...}

// o valor da chave nome:'Thiago', o valor da chave idade:16
console.log(th.nome);
// vai buscar nome que esta na chave th
// {chave:valor, chave2:valor, chave3:valor...}
//se colocarmos console.log(nome) não vai aparecer nada


th.nome= 'Thiago Gomes';

//o th é uma constante, mas o objeto(o que esta dentro das chaves do th) pode ser redefinido
console.log(th); //{nome: 'Thiago Gomes', idade:16}

console.log(th['idade']); // 16
//th['idade'] é o mesmo que th.idade

th['idade']=th.idade+1;
console.log(th)// {nome: 'Thiago Gomes', idade: 17}

th['signo']='Escorpião';

console.log(th) //{nome:'Thiago Gomes', idade:17, signo:'Escorpião'}

//é possível começar com uma chave vazia e ir preenchendo dessa forma

console.log(Object.keys(th)); //['nome','idade','signo]

const keys= Object.keys(th);
console.log(keys); // ['nome','idade','signo]
console.log(th[keys[1]]); //17

//messe caso ele procura a keys[1] e depois procura no th a key, nesse caso idade

for(const k in th){
    console.log(`${k}: ${th[k]}`); //nome: Thiago Gomes, idade:17, signo:Escorpião
  //ta achando as chaves com o k e procurando no th com o th[k]
  //como colocamos o : entre eles temos nome : Thiago Gomes;
}

/*
const idades=[16,15,18,19,16];
for(let id of idades){ //para vetores/arrays
    console.log(id); //16,15,18,16
}

for(let id in idades){
   console.log(id); //0,1,2,3,4
}


EXEMPLO DE FOR OF

const idades=[16,15,18,19,16];
for(let id of idades){ //para vetores/arrays
    console.log(id); //16,15,18,16
}
*/



const curso={
    nome: 'INFO',
    horas: 1200,
    modalidade: 'integrado'
    };

    console.log(curso.modalidade); //integrado
    delete(curso.modalidade);
    console.log(curso.modalidade); //undefined
    console.log(curso.curriculo); //undefined

    if(curso.curriculo) console.log(curso.curriculo);
    //podemos colocar apenas curso.curriculo já que
    //o undefined funciona como um false, e se o if estiver como false ele não entra

    console.log(curso.curriculo || 'Sem curriculo'); //Sem curriculo
    //retorna o que for true

    curso.curriculo= 'um curriculo';

    if(curso.curriculo) console.log(curso.curriculo); //um curriculo
    console.log(curso.curriculo || 'Sem curriculo'); //um curriculo



    //this
//this.Math.pow(2,8) //256
//isso significa que o Math é uma key do this


/*

this['Math']

retorna (no navegador)
Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}

*/
//Objects.keys(this);

//retorna todas as keys

//o browser é o this
// this é o contexto, quando testamos no browser, ele é o browser
//o this tem bibliotecas

this['Math']['pow'](2,8) //retorna 256
//podemos ter uma chave dentro de uma chave


const artista={
    nome: 'Legião Urbana',
    albuns:[
       {
           nome: 'As quatro estações',
           cancoes:[
               {
                   titulo:'Pais e Filhos',
                   duracao: 5* 60+ 8
               },
            {
                titulo:'Mauricio',
                duracao: 3* 60 +18
            }
           ]
        },
       {
           nome:'V',
           cancoes:[
               {
                   titulo: 'Metal contra as nuvens',
                   duracao: 11*60 + 30
               }
           ]
       }
    ]
}

console.log(artista);
// {nome:'Legião Urbana', albuns: [{nome: 'As quatro estações'}, {nome:'V', cancoes[Object] } ] }

console.log(artista['albuns'][0]['nome']); //As quatro estações
console.log(artista.albuns[0].nome); //As quatro estações
console.log(artista['albuns'][0]['cancoes'][0]['duracao']);  //308
