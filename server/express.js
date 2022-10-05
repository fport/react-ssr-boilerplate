const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.get(/\.(js|css|map|ico)$/, express.static(path.resolve(__dirname, '../dist')))

app.use('*', (req, res) => {
    let indexHTML = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), {
        encoding: 'utf8'
    })

    res.contentType('text/html')
    res.status(200)

    return res.send(indexHTML)
})

app.listen('9000', () => {
    console.log('Server started at localhost:9000')
})
