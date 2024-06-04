class utilsFun {
    shuffle = function (a) {
        var array = a;
        return array.sort(() => Math.random() - 0.5);
    }

    /*cercascemi = function (a, tipo) {
        var array = a;
        var ohno = false;
        do {

            array = this.shuffle(array)
            if (tipo == "normal") {
                array = this.divide(array);
            } else {
                array = this.divideBy(array, 2)
            }

            ohno = array.some(element => {
                if (Array.isArray(element)) {
                    return element.includes("LudoAmica") && element.includes("ILDraduxxo");
                } else if (typeof element === "string") {
                    return element.includes("LudoAmica") && element.includes("ILDraduxxo");
                } else {
                    return false;
                }
            });

        } while (!ohno);

        return array;
    }*/
    cercascemi = function (arr, tipo) {
        let found = false;
        if (tipo == "normal") {
            arr = this.divide(arr);
        } else {
            arr = this.divideBy(arr, 2)
        }
        while (!found) {

            arr.forEach((innerArr) => {

                innerArr = this.shuffle(innerArr);

            });
            found = arr.some((innerArr) => innerArr.includes("ILDraduxxo") && innerArr.includes("LudoAmica"));

        }
        return arr;
    }


    divide = function (a) {
        var array = a;
        array = [array.slice(0, array.length / 2), array.slice(array.length / 2)];
    }
    getRandomInt = function (max) {
        return Math.floor(Math.random() * max);
    }
    randTeam = function () {
        const teams = ["I Pedofili", "I Furry", "BDSM Enjoyer", "Mafia Malvagia della Sardegna", "TangaScomparso", "IBALLINMOONER", "I Coomer", "Saturazione ridotta", "EHI NARCOLESSIA DID YOU PAY MY 50$", "Partitina a Balatro??", "Galactus Tiburtina FanClub", "Chiaramente una canzone di Pesto", "Hanno cercato sessogay su soundcloud", "I finochietti", "FREDDY FAS BEAR, OH-OH-OHOH-OH", "Il posto dove mi bacio con uno", "La blunt rotation", "Le chat di Grindr aperte", "Tossici del cazzo", "Sigma skibidi Fortnite 0 costruzioni"];
        let x = this.getRandomInt(teams.length);
        return String(teams[x]);
    }
    divideBy = function (a, size) {
        let arr = a;
        return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        );
    }
}




module.exports = utilsFun;