const frase : string = "Luiz Henrique"
const vogais = /[aeiou]/i;
let count = 0

for (var i = 0; i < frase.length; i++) {
    if (frase[i].match(vogais)){
        count++;
    }
}

console.log("o número de vogais na frase é: " + count);