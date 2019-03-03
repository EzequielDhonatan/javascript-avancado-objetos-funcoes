// ES6
class Pessoa {
    constructor(name, lastName) {
        this.name = name
        this.lastName = lastName
    }

    fullName () {
        return `${this.name} ${this.lastName}`
    }
}

let ezequiel = new Pessoa('Ezequiel', 'Dhonatan');
console.log(ezequiel.fullName());