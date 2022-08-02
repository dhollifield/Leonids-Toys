const toys = [
    {
        id: 1,
        name: "Hot Wheels Super Ultimate Garage Playset",
        manufacturer: "Hot Wheels",
        weightInPounds: 28.16,
        price: 150,
        suggestedAge: "5-8 Years"
    },

    {
        id: 2,
        name: "Disney Princess Royal Shimmer - Tiana Doll",
        manufacturer: "Disney",
        weightInPounds: 0.3,
        price: 11,
        suggestedAge: "3 Years and Up"
    },

    {
        id: 3,
        name: "Azul Board Game",
        manufacturer: "Plan B Games",
        weightInPounds: 2.65,
        price: 32,
        suggestedAge: "8 Years and Up"
    }
]


// for (const toy of toys) {
//     console.log(toy.manufacturer)
// }

const playdohCaseOfImagination = {
    id: 4,
    name: "Play-Doh Case of Imagination",
    manufacturer: "Hasbro",
    weightInPounds: 3.75,
    price: 17,
    suggestedAge: "2 Years and Up"
}

const harryPotterHogwartsWizardChessKit = {
    id: 5,
    name: "LEGO Harry Potter Hogwarts Wizard's Chess Building Kit",
    manufacturer: "LEGO",
    weightInPounds: 2.76,
    price: 60,
    suggestedAge: "10 Years and Up"
}
toys.push(playdohCaseOfImagination)
toys.push(harryPotterHogwartsWizardChessKit)

console.log(toys)

for (const toyName of toys) {
    console.log(toyName.name)
}

for (const toyPrice of toys) {
    console.log(toyPrice.price)
}

for (const toyMaker of toys) {
     console.log(toyMaker.manufacturer)
}

for (const toyWeight of toys) {
    console.log(toyWeight.weightInPounds)
}

for (const toyAge of toys) {
    console.log(toyAge.suggestedAge)
}

for (const toy of toys) {
    console.log(`The ${toy.name} has a price of $${toy.price * 1.05}.`)
}

