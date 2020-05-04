/**
 * O método filter() cria um novo array com todos os
 * elementos que passaram 
 * no teste implementado pela função fornecida.
 */

//Criando um array de Pets
 const pets = [
            {
                name: 'Rex',
                type: 'Dog',
                age:  10
            },
            {
                name: 'Dino',
                type: 'Cat',
                age:  10
            },
            {
                name: 'Tuba',
                type: 'fish',
                age:  9
            },
            {
                name: 'Pegeot',
                type: 'Bird',
                age:  5
            }
    ]


// criando um filtro usando o metodo filter
const menorQueDez = (numero)=>{
    return numero < 10 ;
}

const novoPet = pets.filter((numero)=>  menorQueDez(numero.age));



    console.log(pets);
    console.log("Teste logico da funcao", novoPet)