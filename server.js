require('dotenv').config()

const mongoose = require('mongoose');
const express = require('express')
const app = express();
const port = 3000
const logs = require('./models/logs.js')
const methodOverride = require('method-override');

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());
app.use(express.urlencoded({extended:false}));
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.use(methodOverride('_method'));

app.get(('/'), (req, res) => {
    res.send('home')
})

app.get('/logs', (req, res)=>{
    logs.find({}, (error, allLogs)=>{
        res.render('Index', {
            logs: allLogs
        });
    });
});


app.post('/logs/', (req, res)=>{
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    logs.create(req.body, (error, createdLogs)=>{
        res.redirect('/logs');
    });
});

app.get(('/logs/new'), (req, res) => {
    res.render('New')
})

app.get('/logs/seed', (req, res)=>{
    logs.create([
        {
            title:'seedtitle',
            entry:'seedentry',
            shipIsBroken:true
        },
    ])
    .then((result) => {
        res.redirect('/logs')
    })
});

app.get('/logs/:id', (req, res)=>{
    logs.findById(req.params.id, (err, foundLogs)=>{
        res.render('Show', {
            logs:foundLogs
        });
    });
});

app.put('/logs/:id', (req, res)=>{
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    logs.findByIdAndUpdate(req.params.id, req.body, (err, updatedLogs)=>{
        console.log(updatedLogs)
        res.redirect(`/logs/${req.params.id}`);
    });
});

app.delete('/logs/:id', (req, res)=>{
    logs.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/logs');
    });
});

app.get('/logs/:id/edit', (req, res)=>{
    logs.findById(req.params.id, (err, foundLogs)=>{ 
      if(!err){
        res.render(
    		  'Edit',
    		{
    			logs: foundLogs
    		}
    	);
    } else {
      res.send({ msg: err.message })
    }
    });
});

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.listen(port, () => {
    console.log(`Server is listening on, ${port}`)
});