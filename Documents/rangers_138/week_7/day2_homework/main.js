// Exercise 1
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
// Looping through an object with values that are arrays
for (const [key,value]  of Object.entries(person3)){
    if (Array.isArray(value)){
        console.log('${key}: ')
        value.forEach(thing => console.log(thing))

    } else{
        console.log('${key}: ${value}')
    }
}

// Exercise 2
console.log(person.age)
console.log(person['JeiA']['24'])


// Exercise 3

