function Conta (numero, titular) {
    this.saldo = 0
    this.numero = numero
    this.titular = titular

    this.deposita = function (valor) {
        this.saldo += valor
    }

    this.getSaldo = function () {
        return this.saldo
    }
}

function ContaCorrente (numero, titular) {
    Conta.call(this, numero, titular)

    this.deposita = function (valor) {
        this.saldo += (valor - 2)
    }
}

function ContaPupanca (numero, titular) {
    Conta.call(this, numero, titular)
}

var ezequiel = new ContaCorrente (231561, 'Ezequiel');
console.log(ezequiel.getSaldo());
ezequiel.deposita(10);
console.log(ezequiel.getSaldo());