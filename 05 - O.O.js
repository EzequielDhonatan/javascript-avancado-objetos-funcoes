// ES5
function Pessoa (name, lastName) {
    this.name = name;
    this.lastName = lastName;

    this.fullName = function () {
        return `${this.name} - ${this.lastName}`
    }
}

var ezequiel = new Pessoa('Ezequiel', 'Dhonatan');
console.log(ezequiel.fullName());

var outro = new Pessoa('Outro', 'Dhonatan');
console.log(outro.fullName());

var outroNovo = new Pessoa('Outro Novo', 'Dhonatan');
console.log(outroNovo.fullName());