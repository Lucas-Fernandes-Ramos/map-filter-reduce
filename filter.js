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
                age:  10
            },
            {
                name: 'Pegeot',
                type: 'Bird',
                age:  5
            }
    ]


// criando um filtro usando o metodo filter
const novoPet = pets.filter((newPet)=>{
    return newPet.age < 10
})


    console.log(pets);
    console.log("Teste logico da funcao", novoPet)