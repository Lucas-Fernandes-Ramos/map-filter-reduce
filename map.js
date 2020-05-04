/**
 * ******MAP******
 * O método map() invoca a função callback passada por
 * argumento para cada elemento do Array e devolve um 
 * novo Array como resultado.
 * Referencia: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
 const pets = [
    {
        name: 'Rex',
        type: 'Dog',
        age:  10,
        weight: 6
    },
    {
        name: 'Dino',
        type: 'Cat',
        age:  10,
        weight: 4
    },
    {
        name: 'Tuba',
        type: 'fish',
        age:  9,
        weight: 6
    },
    {
        name: 'Pegeot',
        type: 'Bird',
        age:  5,
        weight: 0.01
    },
    {
        name: 'Pegeot',
        type: 'Bird',
        age:  5,
        weight: 0.01
    },
    {
        name: 'Pegeot',
        type: 'Bird',
        age:  5,
        weight: 7
    },
    {
        name: 'Pegeot',
        type: 'Bird',
        age:  5,
        weight: 0.01
    }
]
const petNames = pets.map((novoPetName)=>{
    return novoPetName.name
})

console.log(petNames)