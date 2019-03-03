function DateConverter () {
}

DateConverter.ptBr = function (date) {
    // 'YYYY-mm-dd' => 'dd/mm/YYYY'
    return date.split('-').reverse().join('/')
}

var date = DateConverter.ptBr('2019-03-03')
console.log(date)