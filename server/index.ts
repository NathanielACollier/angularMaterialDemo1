
import express = require('express');
import { generalController } from './controllers/general';

let port = 8080;
const app: express.Application = express();

app.get('/', (req,res)=>{
    res.send('Hello World!');
});

app.use('/general', generalController);

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});