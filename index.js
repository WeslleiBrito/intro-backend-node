/* const nome = process.argv[2]
const sobrenome = process.argv[3]


console.log(`Meu nome é ${nome} e meu sobrenome é ${sobrenome}`) */

import { countries } from "./countries.js";

const paisBuscado = process.argv[2]

if(paisBuscado){
    const resultadoDaBusca = countries.filter(
        (pais) => {
             return pais.name.toLowerCase().includes(paisBuscado.toLowerCase())
        }
        
    )

    console.log(resultadoDaBusca)
}else{
    console.log('Informe um país válido')
}