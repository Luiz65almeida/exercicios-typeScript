let numero: number = 7;
let ehPrimo: boolean = true;

if (numero > 1) {
    for (let i = 2; i < Math.sqrt(numero); i++) {
        if (numero % i == 0) {
            ehPrimo = false;
            break;
        }
    }
}else{
    ehPrimo = false;
}

if (ehPrimo) {
    console.log(numero + " é primo")
} else {
    console.log(numero + " é composto")
}