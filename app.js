function People () {
    this._name

    this.setName = function (value) {
        this._name = value.toUpperCase()
    }

    this.getName = function () {
        return this._name
    }

}

var ezequiel = new People
ezequiel.setName('Ezequiel');
console.log(ezequiel.getName());