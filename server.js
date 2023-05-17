require('dotenv').config()

const mongoose = require('mongoose');
const express = require('express')
const app = express();
const port = 3000

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());
app.use(express.urlencoded({extended:false}));
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.get(('/'), (req, res) => {
    res.send('home')
})

app.get(('/logs/new'), (req, res) => {
    res.render('New')
})

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.listen(port, () => {
    console.log(`Server is listening on, ${port}`)
});