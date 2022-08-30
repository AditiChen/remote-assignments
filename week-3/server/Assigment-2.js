const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const http = require('http');
const url = require('url');


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let calculation = (num) => {
    let start = 1;
    for (let i = 1; i < num; i++) {
        let j = i + 1;
        start = start + j;
    }
    return start
}

app.get('/getData', (req, res) => {
    let number = req.query.number
    // console.log(number)
    if (isInteger(number) && number > 0) {
        let test = calculation(number);
        res.send(test.toString());
    } else if (!isInteger(number) || number <= 0) {
        res.send('Wrong Parameter');
    } else {
        console.log(typeof number);
        res.send('Lake of Parameter');
    }
})


app.listen(port, () => {
    console.log(`this runs in localhost: ${port}`)
})


