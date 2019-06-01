
import express = require('express');
import { generalController } from './controllers/general';
var path = require('path');

let port = 8080;
const app: express.Application = express();

/*
app.get('/', (req,res)=>{
    res.send('Hello World!');
});
*/

app.use('/general', generalController);

app.use(express.static(path.join(__dirname, "../dist/angularApp")));

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});