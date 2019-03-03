var ezequiel = new pFis ('Ezequiel', 'Dhonatan', 156162);

function Pessoa (name, lastName) {
    this.name = name
    this.lastName =     lastName

    this.showInfo = function () {
        return `${this.name} ${this.lastName}`
    }
}

function pFis (name, lastName, cpf) {
    Pessoa.call(this, name, lastName)

    this.cpf = cpf
}

console.log(ezequiel.showInfo());
// pFis.prototype = new Pessoa ();


/* ############################################## */

var empresa = new pFis ('Eze', 'Dhon', 156162);

function pJur (name, lastName, cnpj) {
    Pessoa.call(this, name, lastName)

    this.cnpj = cnpj
}

console.log(empresa.showInfo());