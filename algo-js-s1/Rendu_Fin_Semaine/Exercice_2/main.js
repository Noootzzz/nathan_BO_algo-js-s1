class survivor{
    constructor(name, hp, characteristics, dyingProbability, damageProbability, dyingDamageProbability) {
        this.name = name
        this.hp = hp
        this.characteristics = characteristics
        this.dyingProbability = dyingProbability
        this.damageProbability = damageProbability
        this.dyingDamageProbability = dyingDamageProbability
    }
}

class killer{
    constructor(name, hp) {
        this.name = name
        this.hp = hp
    }

    attack(character) {
        let dyingProbability = Math.random()
        let damageProbability = Math.random()
        let dyingDamageProbability = Math.random()

        if (damageProbability < character.damageProbability) {
            this.hp -= 10
            console.log("Jason a perdu 10 hp par : " + character.name)
        }

        if (dyingProbability < character.dyingProbability) {
            character.hp = 0
            console.log("Jason a tué : " + character.name)
        }

        if (dyingDamageProbability < character.dyingDamageProbability) {
            console.log(character.name + " a infligé 15 points de dégats à Jason en donnant sa vie")
            character.hp = 0
            this.hp -= 15
        }
    }
}


var names = ["Camille", "Sacha", "Benjamin", "Lou", "Eden", "Charlie", "Antoine", "Florian", "Quentin", "Justine", "Enzo", "Charline", "Pierre", "Michel", "Andréa"]

var characteristics = ["nerd", "sportif", "blond", "jeune", "grand", "petit", "comique", "mystérieux", "alcoolique", "dépressif", "beau", "gentil", "riche", "naïf", "vieux"] 


function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

var jason = new killer("Jason", 100)

var firstSurvivor = new survivor(names[getRandomInt(15)], 50, characteristics[getRandomInt(15)], 0.4, 0.3, 0.3)
var secondSurvivor = new survivor(names[getRandomInt(15)], 50, characteristics[getRandomInt(15)], 0.4, 0.4, 0.2)
var thirdSurvivor = new survivor(names[getRandomInt(15)], 50, characteristics[getRandomInt(15)], 0.3, 0.5, 0.2)
var fourthSurvivor = new survivor(names[getRandomInt(15)], 50, characteristics[getRandomInt(15)], 0.2, 0.3, 0.5)
var fifthSurvivor = new survivor(names[getRandomInt(15)], 50, characteristics[getRandomInt(15)], 0.3, 0.1, 0.6)

var survivors = [firstSurvivor, secondSurvivor, thirdSurvivor, fourthSurvivor, fifthSurvivor]

var deadSurvivors = []


function moveSurvivor(sourceArray, destinationArray, survivor) {
    var index = sourceArray.findIndex(s => s === survivor)

    if (index !== -1) {
        sourceArray.splice(index, 1)
        destinationArray.push(survivor)
    }
}

while(jason.hp > 0 && survivors.length > 0 && deadSurvivors.length < 5) {

    let randomSurvivorIndex = getRandomInt(survivors.length - 1)
    let targetSurvivor = survivors[randomSurvivorIndex]

    jason.attack(targetSurvivor)
    
    if (targetSurvivor.hp <= 0) {
        if (survivors.includes(targetSurvivor)) {
            var indexToMove = survivors.indexOf(targetSurvivor)
            var removedSurvivor = survivors.splice(indexToMove, 1)[0]

            deadSurvivors.push(removedSurvivor)
        }
        
    }

    if (jason.hp <= 0) {
        console.log("Jason est mort " + "Il a : " + jason.hp + " HP ")        
    }
    if (survivors.length == 0) {
        console.log("Jason a tué tous les survivants, il avait " + jason.hp + " HP ")
    }
}

console.log("Ces survivants sont morts : " , deadSurvivors.map(deadSurvivor => deadSurvivor.name))
