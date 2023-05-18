const express = require('express');
let router = express.Router();
const logs = require('../models/logs.js')
const methodOverride = require('method-override');

router.use(methodOverride('_method'));
router.use(express.urlencoded({extended:false}));

router.route('/')
.get((req, res)=>{
    logs.find({}, (error, allLogs)=>{
        res.render('Index', {
            logs: allLogs
        });
    });
})
.post((req, res)=>{
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    logs.create(req.body, (error, createdLogs)=>{
        res.redirect('/logs');
    });
});

router.get(('/new'), (req, res) => {
    res.render('New')
})

router.route('/:id')
.get((req, res)=>{
    logs.findById(req.params.id, (err, foundLogs)=>{
        res.render('Show', {
            logs:foundLogs
        });
    });
})
.put((req, res)=>{
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    logs.findByIdAndUpdate(req.params.id, req.body, (err, updatedLogs)=>{
        console.log(updatedLogs)
        res.redirect(`/logs/${req.params.id}`);
    });
})
.delete((req, res)=>{
    logs.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/logs');
    });
});

router.get('/:id/edit', (req, res)=>{
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

module.exports = router;