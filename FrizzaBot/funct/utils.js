class utilsFun{
    shuffle = function(a){
        var array = a;
        return array.sort(() => Math.random() - 0.5); 
    }
    divide = function(a){
        var array = a;
        return [array.slice(0,array.length/2),array.slice(array.length/2)];
    }
    getRandomInt = function(max) {
            return Math.floor(Math.random() * max);
        }
    randTeam = function(){
        const teams = ["I Pedofili", "I Furry", "BDSM Enjoyer", "Mafia Malvagia della Sardegna", "TangaScomparso", "IBALLINMOONER", "I Coomer", "Saturazione ridotta", "EHI NARCOLESSIA DID YOU PAY MY 50$", "Partitina a Balatro??", "Galactus Tiburtina FanClub", "Chiaramente una canzone di Pesto", "Hanno cercato sessogay su soundcloud", "I finochietti", "FREDDY FAS BEAR, OH-OH-OHOH-OH", "Il posto dove mi bacio con uno", "La blunt rotation", "Le chat di Grindr aperte", "Tossici del cazzo", "Sigma skibidi Fortnite 0 costruzioni"];
        let x=this.getRandomInt(teams.length);
        return String(teams[x]);
    }
    divideBy = function(a, size){
        let arr = a;
        return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
          arr.slice(i * size, i * size + size)
        ); 
    }
}




module.exports = utilsFun;