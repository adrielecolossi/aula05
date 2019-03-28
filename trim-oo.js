//funções executam sobre o this!

const Texto= { //Texto é um objeto com duas chaves, txt e trimLeft
    //txt guarda uma string,trimLeft uma função
    //o this nesse caso vai ser o txt
    txt:' meu texto ',
    trimLeft: function() {
        console.log(this);
        let r = '';
        let copy = false;
        for (let i = 0; i < this.txt.length; i++) {
            if (copy || this.txt[i] != ' ') {
                copy = true;
                r += this.txt.charAt(i);
            }

        }
        return r;
    }
}

console.log(Texto.trimLeft()); //'meu texto'

//ele vai usar o txt do this, que é ' meu texto '
