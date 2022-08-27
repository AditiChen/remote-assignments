const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const router = express.Router()
const http = require('http');
const url = require('url');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let sum = (inputNumber) => {
    let changeNumber = Number(inputNumber);
    let firstNum = 1;
    let totalNum = (firstNum + changeNumber) * changeNumber / 2
    return totalNum;
}

app.use('/sum.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'sum.html'));
})

app.post('/getData', (req, res) => {
    res.json(sum(req.body.number));
})

app.listen(port, () => {
    console.log(`this runs in localhost: ${port}`)
})




