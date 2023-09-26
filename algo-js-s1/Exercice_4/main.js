var a = 3

while (a < 9) {

    a++

    if (a === 8) {
        break //on arrête la boucle
    }

    if (a === 7) {
        continue //on revient au début de la boucle
    }

    console.log(a)
}