class character {
    constructor(name, mentalHealth) {
        this.name = name
        this.mentalHealth = mentalHealth
    }

    trajet(musics) {

        let taxiChange = 0
        let pastRedLights = 0
        console.log("Feux rouges actuel : " + pastRedLights + "  | " + " Feux restants : " + (30-pastRedLights))


        while(this.mentalHealth > 0 && pastRedLights < 30 ) {

            let musicSelected = musics[getRandomInt(5)]


            pastRedLights += 1
            console.log("Feux rouges actuel : " + pastRedLights + "  | " + " Feux restants : " + (30-pastRedLights))


            if (musicSelected === "Anissa-Wejdene") {
                console.log("Malheureusement la musique : " + musicSelected + " est passée à la radio !!!")
                taxiChange += 1
                this.mentalHealth -= 1
                console.log("Changements de taxi : " + taxiChange)
                console.log("Santé mentale : " + this.mentalHealth)
            } else {
                console.log("La musique : " + musicSelected + " est passée à la radio !!!")
            }


            if (this.mentalHealth === 0) {
                console.log(this.name + " vient d'EXPLOSER au feu : " + pastRedLights)
                break
            }


            if (pastRedLights === 30) {
                console.log(this.name + " est bien arrivé et a changé " + taxiChange + " fois de taxis.")
                break
            }
        }
    }
}

var fabrice = new character("Fabrice", 10)

var playlist = ["Anissa-Wejdene", "Sprinter-Dave", "I Ain't Worried-OneRepublic", "goosebumps-Travis Scott", "Battle Cry-Imagine Dragons"]


function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

fabrice.trajet(playlist)