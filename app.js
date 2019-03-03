class People {

    constructor () {
        this._name
    }

    set name (value) {
        this._name = value.toUpperCase()
    }

    get name () {
        return this._name
    }
}

let ezequiel = new People
ezequiel.name = 'Ezequiel'
console.log(ezequiel.name)