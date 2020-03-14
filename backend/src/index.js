const express = require('express')
const mongoose = require('mongoose')
const routes = require('../src/routes')

const app = express();

mongoose.connect('mongodb+srv://rocketweek10:rocketweek10@cluster0-ntywf.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json())
app.use(routes)

app.listen(3333)