const { GeradorDeCPF, GeradorDeNascimento} = require(`../Geradores/geradores`);

class Pessoa {

    _nome;
    _idade;
    _sexo;
    _cpf;
    _nascimento;

    constructor(nome, sexo) {
        this._nome = nome;
        this._sexo = sexo;
        this._idade = 0;
        this._cpf = GeradorDeCPF();
        this._nascimento = GeradorDeNascimento();
    }

    InfoPessoa() {
        console.log(`\n- - - - -\nNome: ${this._nome}\nSexo: ${this._sexo}\nIdade: ${this._idade}\nCPF: ${this._cpf}\nNascimento: ${this._nascimento}`);
    }

}

module.exports = { Pessoa };