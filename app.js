function Pessoa (name, lastName) {
    this.name = name
    this.lastName =     lastName

    this.showInfo = function () {
        return `${this.name} ${this.lastName}`
    }
}

function PFis (name, lastName, cpf) {
    Pessoa.call(this, name, lastName)

    this.cpf = cpf
}

var ezequiel = new PFis ('Ezequiel', 'Dhonatan', 156162);
console.log(ezequiel.showInfo());
// PFis.prototype = new Pessoa ();


/* ############################################## */

function PJur (name, lastName, cnpj) {
    Pessoa.call(this, name, lastName)

    this.cnpj = cnpj

    this.showInfo = function () {
        return `Empresa: ${this.name}${this.lastName}` 
    }
}

var empresa = new PJur ('Eze', 'Dhon', 156162);
console.log(empresa.showInfo());