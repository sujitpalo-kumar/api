const dotenv = require('dotenv');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors())

// configure dot-env
dotenv.config({path : './config/config.env'});

app.use(express.json());
app.use(express.urlencoded({extended : false}));

const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

app.get('/', (request, response) => {
    response.send(`<h2>Welcome to Express Server REST API</h2>`);
});

app.use('/api', require('./Router/apiRouter'))
mongoose.connect(process.env.MONGO_DB_LOCAL_URL).then((response)=>{
    console.log(`connected to mongo db successfully...`)
}).catch((err)=>{
    console.error(err);
    
})



app.listen(port, hostname, () => {
    console.log(`Express Server Started at http://${hostname}:${port}`)
});


