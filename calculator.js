const http = require('http')

const url = require('url')

const accounting = require('accounting')


// start the server
http.createServer((req,res) => {
    res.writeHead(200)
    res.write('<h1> Tax Calculator</h1>')

    //use url to parse url para
    const query =url.parse(req.url , true).query

    // store url param "subtotal" in a local var 
    let subTotal =query.subtotal
    res.write(`<p>Sub Total ${accounting.formatMoney(subTotal)} </p>`)

    // cal and display 
    let tax = subTotal * 0.13
    res.write(`<p> Tax ${tax} </p>`)

    // cal and display total 
    let total = parseFloat(subTotal) + parseFloat(tax)
    res.write(`<p> total ${accounting.formatMoney(total)} </p>`)
    res.end()
}).listen(3000)

console.log('server is running on port 3000')