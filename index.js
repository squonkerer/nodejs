const express = require('express')

const app = express()

function greet(req, res) {
    console.log(req.query)
    res.end(`
        <meta charset="UTF=8">
        <hrml>
            <body>
                <h1>hello, ${req.query.name}</h1>
            </body>
        </html>
        `)
}

app.get('/greeting', greet)

app.listen(3000)