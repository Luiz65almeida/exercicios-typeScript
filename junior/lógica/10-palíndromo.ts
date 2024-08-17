const texto3: String = "celular";


const texto3Invertido = texto3.split('').reverse().join('');

if (texto3 == texto3Invertido) {
    
    console.log( texto3 + " é uma palíndromo")
    console.log(texto3Invertido + " = " + texto3)
    
}else{
    console.log( texto3 + " NÃO é uma palíndromo")
    console.log(texto3Invertido + " != " + texto3)
}

