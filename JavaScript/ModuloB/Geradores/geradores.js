
function GeradorDeCPF() {

    const base = "9274806351";
    let cpfGerado = "";
  
    for (let i = 0; i < 11; i++) {
        let index = Math.floor(Math.random() * base.length);
        cpfGerado += base.charAt(index);
    }
  
    cpfGerado = cpfGerado.replace(/(\d{3})(\d{3})(\d{3})/, "$1.$2.$3-");
  
    return cpfGerado;
}

function GeradorDeNascimento() {

    let dia = "";
    let mes = "";
    let ano = "";

    dia = Math.floor(Math.random() * 31) + 1;
    mes = Math.floor(Math.random() * 12) + 1;
    ano = Math.floor(Math.random() * 40) + 1990;
  
    dia = dia.toString().padStart(2, "0");
    mes = mes.toString().padStart(2, "0");
    
    const dataGerada = `${dia}/${mes}/${ano}`;
    
    return dataGerada;

}

function GeradorDeMatricula() {

    const base = "9274806351";
    let matriculaGerada = "";
  
    for (let i = 0; i < 7; i++) {
        let index = Math.floor(Math.random() * base.length);
        matriculaGerada += base.charAt(index);
    }
  
    matriculaGerada = matriculaGerada.replace(/(\d{2})(\d{1})/, "$1.$2.");
  
    return matriculaGerada;
}

module.exports = { GeradorDeCPF, GeradorDeNascimento, GeradorDeMatricula };

  