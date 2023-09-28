class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense 
        this.hp = hp
        this.luck = luck
    }

    attackPokemon(character) {
        let damageSuffered = this.attack - character.defense
        return character.hp -= damageSuffered
    }

    isLucky() {
        return this.luck > Math.random();
    }

    
}

var tortank = new Pokemon("TORTANK", 75, 30, 250, 0.4)
var leviator = new Pokemon("LEVIATOR", 100, 15, 200, 0.5)


console.log("Le combat commence entre " + "\x1b[34m" + tortank.name + "\x1b[0m" + " " + "\x1b[32m" + tortank.hp + " HP" + "\x1b[0m" + " et " + "\x1b[34m" + leviator.name + "\x1b[0m" + " " + "\x1b[32m" + leviator.hp + " HP" + "\x1b[0m")


while(tortank.hp > 0 && leviator.hp > 0) {

    if(tortank.isLucky()) {
        tortank.attackPokemon(leviator)
        console.log("\x1b[34m" + leviator.name + "\x1b[0m" + " a " + "\x1b[32m" + leviator.hp + " HP " + "\x1b[0m" + "car il vient de perdre " + "\x1b[32m" + (tortank.attack - leviator.defense) + " HP" + "\x1b[0m" + " par l'attaque de " + "\x1b[34m" + tortank.name + "\x1b[0m")
    } else {
        console.log("\x1b[34m" + tortank.name + "\x1b[0m" + "\x1b[31m" + " a raté son " + "attaque.\x1b[0m")
    }
    
    if (leviator.hp <= 0) {
        console.log("\x1b[34m" + leviator.name + "\x1b[0m" + " est " + "\x1b[31mmort\x1b[0m" + " et perd ce combat. " + "\x1b[34m" + tortank.name + "\x1b[0m" + " gagne avec " + "\x1b[32m" + tortank.hp + " HP" + "\x1b[0m" + " !")
        break
    }

    if (leviator.isLucky()) {
        leviator.attackPokemon(tortank)
        console.log("\x1b[34m" + tortank.name + "\x1b[0m" + " a " + "\x1b[32m" + tortank.hp + " HP " + "\x1b[0m" + "car il vient de perdre " + "\x1b[32m" + (leviator.attack - tortank.defense) + " HP " + "\x1b[0m" + "par l'attaque de " + "\x1b[34m" + leviator.name + "\x1b[0m")
    } else {
        console.log("\x1b[34m" + leviator.name + "\x1b[0m" + "\x1b[31m" + " a raté son " + "attaque.\x1b[0m")
    }
    
    if (tortank.hp <= 0) {
        console.log("\x1b[34m" + tortank.name + "\x1b[0m" + " est " + "\x1b[31mmort\x1b[0m" + " et perd ce combat. " + "\x1b[34m" + leviator.name + "\x1b[0m" + " gagne avec " + "\x1b[32m" + leviator.hp + " HP" + "\x1b[0m" + " !")
        break
    }
}