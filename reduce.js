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
        weight: 16
    },
    {
        name: 'Pegeot',
        type: 'Bird',
        age:  5,
        weight: 1
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
        weight: 3
    }
]
/*
const totalIdade  = pets.reduce((total, petIdade)=>{
   return total + petIdade.weight
},0);
*/
/*
const totalIdade1  = pets.reduce((total, pet)=>{
    return {
        totalAge: total.totalAge  + pet.age,
        totalIdade: total.totalIdade  + pet.weight,
    }
 },{totalAge: 0, totalIdade: 0});
*/ 

const totalPesoDog = pets
 .filter((pet)=>{
        return pet.type === 'Bird';
    })
.reduce((total, pet)=>{
       return total  + pet.weight;
    }, 0);
console.log(pets);

console.log(totalPesoDog);