const { Animal } = require("./Animal");

class Peixe extends Animal{

    _tipoHabitat;

    constructor(nome, peso, tipoHabitat) {
        super(nome, peso);
        this._tipoHabitat = tipoHabitat;
    }

    InfoPeixe() {
        super.InfoAnimal();
        console.log(`Tipo Habitat ${this._tipoHabitat}`);
    }
}

module.exports = {Peixe};