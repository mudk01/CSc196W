'use strict';
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.type('text').status(200).send('Try any of these routes:\n/hello\n/math/circle/radius with radius being any number\n/hello/name?first=firstName&last=lastName replacing firstName and lastName with your first and last name respectively')
})
app.get('/hello', (req, res) => {
    res.type('text').status(200).send('Hello World!');
});

app.get('/math/circle/:r', (req, res) => {
    if (req.params.r) {
        let radius = req.params.r
        //if radius is number, query string is parsed to int, if not number, radius is NaN
        radius = parseInt(radius)
        //check if paramater is not number
        if (isNaN(radius)) {
            res.type('text').status(400).send('Error, Bad Request!')
        } else {
            let resultJson = calculate(radius)
            res.type('json').status(200).send(resultJson)
        }
    } else {
        res.type('text').status(400).send('Error, Bad Request!')
    }    
})

app.get('/hello/name', (req, res) => {
    if (!req.query.first || !req.query.last) {
        res.type('text').status(400).send('Error, Bad Request!')
    } else {
        let firstName = req.query.first
        let lastName = req.query.last
        res.type('text').status(200).send(`Hello ${firstName} ${lastName}!`)
    }
})

function calculate(radius) {
    let r = radius
    let area = Math.PI * r * r
    let circum = Math.PI * (2 * r)
    return {"area": area, "circumference": circum}
}

app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);
