const { Animal } = require("./Animal");

class Cachorro extends Animal {

    _raca;

    constructor(nome, peso, raca) {
        super(nome, peso);
        this._raca = raca;        
    }

    InfoCachorro() {
        super.InfoAnimal();
        console.log(`Raca ${this._raca}`);
    }

}

module.exports = {Cachorro};