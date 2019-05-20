
import express = require('express');

let port = 8080;
const app: express.Application = express();

app.get('/', (req,res)=>{
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});