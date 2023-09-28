class hero {
    constructor(name, attack, pv) {
        this.name = name
        this.attack = attack
        this.pv = pv
    }

    getLife() {
        console.log(this.pv)
    }
}

class monsters {
    constructor(pv, attack) {
        this.pv = pv
        this.attack = attack
    }
}

let reinor = new hero("Reinor", 120, 300)
let gnome = new monsters(10, 1200)

if (gnome.pv -= reinor.attack <= 0) {
    console.log("le gnome est mort")
}

reinor.getLife