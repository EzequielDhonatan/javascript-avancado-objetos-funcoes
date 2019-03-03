class Pessoa {
    constructor (name, lastName) {
        this.name = name
        this.lastName = lastName
    }

    showInfo () {
        return `${this.name} ${this.lastName}`
    }
}

class PFis extends Pessoa {
    constructor (name, lastName, cpf) {
        super(name, lastName)

        this.cpf = cpf
    }
}

let ezequiel = new PFis('Ezequiel', 'Dhonatan', 1655156165);
console.log(ezequiel.showInfo());

class PJur extends Pessoa {
    constructor (name, lastName) {
        super(name, lastName)
    }

    setCnpj (cnpj) {
        this.cnpj = cnpj
    }

    getCnpj () {
        return this.cnpj
    }
}

let empresa = new PJur('Eze', 'Dhon', 1125119811);
empresa.setCnpj(1561156165165);
console.log(empresa.getCnpj());