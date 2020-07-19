const express = require('express');
const app = express();
const port = 3000;
const r = require('./routes/post');

app.use(express.json());
app.use('/r',r);


app.listen(port,()=>{
    console.log(`Express server listening at http://localhost:${port}`);
})