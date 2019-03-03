class Conta {
    constructor(numero, titular) {
        this.numero = numero
        this.titular = titular

        this.saldo = 0
    }

    deposita (valor) {
        this.saldo += (valor)
    }

    saque (valor) {
        if (this.saldo > 0 && this.saldo >= valor) {
            this.saldo -= valor
        } else {
            console.log(`Saque não permitido, saldo atual ${this.saldo}, valor de tentativa de saque: ${valor}`);
        }
    }

    getSaldo () {
        return this.saldo
    }

}

class ContaCorrente extends Conta {
    constructor(numero, titular) {
        super (numero, titular)
    }
}

class ContaPoupanca extends Conta {
    constructor(numero, titular) {
        super (numero, titular)
    }
}

let ezequiel = new ContaCorrente('Ezequiel Dhonatan', 123456);
console.log(ezequiel.getSaldo());
ezequiel.deposita(100);
ezequiel.saque(50);
ezequiel.deposita(100);
console.log(ezequiel.getSaldo());

let outro = new ContaPoupanca('Outro Dhonatan', 123456);
console.log(outro.getSaldo());
outro.deposita(100);
console.log(outro.getSaldo());