let names = []

names.push("Vincent", "Paul", "Arthur")

for(let i = 0; i < names.length; i++) {
    names[i] += " va à la pêche"
    //console.log(names[i])
}


let secondNames = []
secondNames.push("Vincent", "Paul", "Arthur")

secondNames.forEach( elt => {
    elt += " va à la pêche"
    console.log(elt)
})