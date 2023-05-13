const { Empregado } = require("./Empregado");

class Gerente extends Empregado {

    _gerencia;

    constructor(nome, sexo, gerencia) {
        super(nome, sexo);
        this._gerencia = gerencia;
    }

    SetGerencia(gerencia) {
        this._gerencia = gerencia;
    }

    InfoGerente() {
        super.InfoEmpregado();
        console.log(`Gerente N: ${this._gerencia}\n`);
    }

}

module.exports = { Gerente };