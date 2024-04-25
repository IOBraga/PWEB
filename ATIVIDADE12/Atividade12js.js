function Retangulo(b,a){
    this.a = a;
    this.b = b;
    this.CalcArea = function(){
        return b*a;
    }
}

var a = prompt("Digite a altura do retângulo: ");
var b = prompt("Digite a base do retângulo: ");
var obj = new Retangulo(a, b);

alert("A área do retângulo é: " + obj.CalcArea(a,b));

//-------------------------------------------------------------------------------------------------------

class Conta{
    constructor(){
        this.nomecorretista = nomecorretista;
        this.banco = banco;
        this.numconta = numconta;
        this.saldo = saldo;
    }

    setNomecorrentista(value){
        this.nomecorretista = value;
    }
    getNomecorrentista(){
        return this.nomecorretista
    }
    setBanco(value){
        this.banco = value;
    }
    getBanco(){
        return this.banco;
    }
    setNumconta(values){
        this.numconta = values;
    }
    getNumconta(){
        return this.numconta;
    }
    setSaldo(values){
        this.saldo = values;
    }
    getSaldo(){
        return this.saldo
    }
}

class ContaCorrente extends Conta{
    constructor(){
        this.saldoespecial = saldoespecial; 
    }

    setSaldoEspecial(values){
        this.saldoespecial = values;
    }
    getSaldoEspecial(){
        return this.saldoespecial;
    }
}

class ContaPoupanca extends Conta{
    constructor(){
        this.juros = juros; 
        this.datavencimento = datavencimento;
    }
    setJuros(values){
        this.juros = values;
    }
    getJuros(){
        return this.juros;
    }
    setDataVenc(values){
        this.datavencimento = values;
    }
    getDataVenc(){
        return this.datavencimento;
    }
}

var objCorrente = new ContaCorrente();
objCorrente.setNomecorrentista(prompt("DIGITE O SEU NOME COMPLETO (CORRENTE): "))
objCorrente.setBanco(prompt("DIGITE O SEU BANCO (CORRENTO): "))
objCorrente.setNumconta(prompt("DIGITE O NÚMERO DA SUA CONTA (CORRENTE): "))
objCorrente.setSaldo(prompt("DIGITE O SEU SALDO: "))
objCorrente.setSaldoEspecial(prompt("DIGITE O SEU SALDO ESPECIAL: "))

alert(`
    NOME: ${objCorrente.getNomecorrentista()}
    \nBANCO: ${objCorrente.getBanco()}
    \nNÚMERO CONTA: ${objCorrente.getNumconta()}
    \nSALDO: ${objCorrente.getSaldo()}
    \nSALDO ESPECIAL: ${objCorrente.getSaldoEspecial()}
`)

var objPoupanca = new ContaPoupanca();
objPoupanca.setNomecorrentista(prompt("DIGITE O SEU NOME COMPLETO (CORRENTE): "))
objPoupanca.setBanco(prompt("DIGITE O SEU BANCO (CORRENTO): "))
objPoupanca.setNumconta(prompt("DIGITE O NÚMERO DA SUA CONTA (CORRENTE): "))
objPoupanca.setSaldo(prompt("DIGITE O SEU SALDO: "))
objPoupanca.setJuros(prompt("DIGITE O SEU JUROS: "))
objPoupanca.setDataVenc(prompt("DIGITE A SUA DATA DE VENCIMENTO: "))

alert(`
    NOME: ${objPoupanca.getNomecorrentista()}
    \nBANCO: ${objPoupanca.getBanco()}
    \nNÚMERO CONTA: ${objPoupanca.getNumconta()}
    \nSALDO: ${objPoupanca.getSaldo()}
    \nJUROS: ${objPoupanca.getJuros()}
    \nDATA VENCIMENTO: ${objPoupanca.getDataVenc()}
`)
