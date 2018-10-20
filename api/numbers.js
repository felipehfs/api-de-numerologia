function getNumber(date) {
    let [day, month, year] = date.split("/").map(d => Number.parseInt(d))
    const dayAndMonth = sumDigits(day + month)
    year = sumDigits(year)
    year = sumDigits(year)
    return dayAndMonth + year
}

const sumDigits = (digit) => { 
    return digit.toString().split("")
    .map(d => Number.parseInt(d))
    .reduce((total, acum) => total + acum)
}

module.exports = {
    getNumber
}