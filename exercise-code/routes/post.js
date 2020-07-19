const app = require('express');
var route = app.Router();

route.get('/get',(req,res)=>{
    res.send(`hello`);
})

route.post('/post',(req,res)=>{
    console.log(`收到请求体：`,req.body);
    res.status(201).send({id:2,...req.body});
})

route.put('/:id',(req,res)=>{
    console.log(`收到请求参数 id：`,req.params.id);
    console.log(`收到请求体：`,req.body);

    res.send({id: req.params.id,...req.body});
})

route.delete('/:id',(req,res)=>{
    console.log(`收到请求参数 id：`,req.params.id);
    console.log(`收到请求体：`,req.body);

    res.status(204).send();
})

module.exports = route;