import { countries } from "./countries.js";

/* const buscaLetra = process.argv[2]

if(buscaLetra){
    const retornoBusca = countries.filter((letra) => {
        return letra.name[0].toLowerCase().includes(buscaLetra.toLowerCase())
    })

    console.log(retornoBusca)
}else{
    console.log('Informe uma letra válida!')
} */

const name = process.argv[2]
const code = process.argv[3]

if(name && code){

    const newCountries = {
        name: name,
        code: code
    }
    countries.push(newCountries)
    countries.sort((a, b) =>{
        if(a.name.toLowerCase() > b.name.toLowerCase()){
            return 1
        }else if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1
        } else {
            return 0
        }
    
    })

    console.log(countries)
}else{
    console.log('Informe o nome e o codigo')
}