require('dotenv').config()
const logs = require('./models/logs.js')
const mongoose = require('mongoose');
const express = require('express')
const app = express();
const port = 3000
const logsRouter = require('./controllers/logs')

app.use('/logs', logsRouter)
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

app.get(('/'), (req, res) => {
    res.send(`<a href='/logs'>Captain's Log</a>`)
})

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.listen(port, () => {
    console.log(`Server is listening on, ${port}`)
});