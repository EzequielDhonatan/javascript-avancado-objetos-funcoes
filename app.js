class DateConverter {

    static ptBr (date) {
        // 'YYYY-mm-dd' => 'dd/mm/YYYY'
        return date.split('-').reverse().join('/')
    }

    static en (date) {
        // 'dd/mm/YYYY' => 'YYYY-mm-dd'
        return date.split('/').reverse().join('-')
    }

}

var date = DateConverter.ptBr('2019-03-03')
console.log(date)

var date = DateConverter.en('03/03/2019')
console.log(date)