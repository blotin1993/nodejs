const http = require('http')

http.createServer((req, res) => {
    console.log('Hola Mundo')

    // res.writeHead(200, {'Content-type': 'application/json'})
    res.writeHead(200, {'Content-type': 'application/csv'})

    // const user = {
    //    id: 123,
    //    name: 'Fernando'
    // }

    // res.write(JSON.stringify(user))
    res.write('id,name\n123,Fernando\n456,Marta')
    res.setHeader('Content-Disposition', 'attachment; filename = usuarios.csv')

    res.end()

}).listen(3000)