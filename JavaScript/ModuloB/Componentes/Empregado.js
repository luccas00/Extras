const { GeradorDeMatricula } = require("../Geradores/geradores");
const { Pessoa } = require("./Pessoa");

class Empregado extends Pessoa {

    _salario;
    _matricula;

    constructor(nome, sexo) {
        super(nome, sexo);
        this._salario = 1300.50;
        this._matricula = GeradorDeMatricula();
    }

    InfoEmpregado() {
        super.InfoPessoa();
        console.log(`Dados Contratuais\nSalario R$ ${this._salario}\nMatricula: ${this._matricula}\n`);
    }

    SetSalario(value) {
        if(value < 1300.50) {
            console.log("Valor Invalido, menor que salario minimo, tente novamente");
        } else {
            this._salario = value;
        }
    }

}

module.exports = {Empregado};