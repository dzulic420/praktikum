let pricelist = [
    { from: '2020-01-01', to: '2020-02-01', price: 34.5 },
    { from: '2020-02-02', to: '2020-03-01', price: 37.0 },
    { from: '2020-03-02', to: '2020-05-15', price: 39.0 },
    { from: '2020-05-16', to: '2020-06-15', price: 37.0 },
]

function logPricelist(pricelist) {
    pricelist.sort((a, b) => a.price - b.price)

    let ispis = ""
    let prethodni={}
    pricelist.forEach(function (f) {
        if (f.price == prethodni.price) ispis += ' , '
        else ispis += '\n'
        ispis += `${f.price} : ${f.from} : ${f.to}`
        prethodni = f
    })

    console.log(ispis)
}

logPricelist(pricelist)
