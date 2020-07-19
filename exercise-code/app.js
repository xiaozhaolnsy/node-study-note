const express = require('express');
const app = express();
const port = 3000;
// const r = require('./routes/post');
const routes = require('./routes/post');


app.use(express.json());
// app.use('/r',r);

routes(app);

app.listen(port,()=>{
    console.log(`Express server listening at http://localhost:${port}`);
})