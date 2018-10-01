const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const {ObjectId} = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/search', (req, res) => {

    let query = req.query.q;
    
    axios.get(`https://api.iextrading.com/1.0/stock/${query}/company`)
    .then((response) => {

        console.log(`sending request to https://api.iextrading.com/1.0/stock/${query}/company`);
        console.info(`response status: ${response.status}`);
        
        if (response.status !== 404){
            res.send(response.data);
            console.info('data:', response.data);
        }
    }).catch(() => {
        res.send(`${query} symbol not found`);
    })
})

app.get('/chart', (req, res) => {

    let query = req.query.q;

    //GET /stock/{symbol}/chart/{range}
    
    axios.get(`https://api.iextrading.com/1.0/stock/${query}/chart/1m`)
    .then((response) => {

        console.log(`sending request to https://api.iextrading.com/1.0/stock/${query}/chart/1m`);
        console.info(`response status: ${response.status}`);
        
        if (response.status !== 404){
            res.send(response.data);
            console.info('data:', response.data);
        }
    }).catch(() => {
        res.send(`${query} symbol not found`);
    })
})

var db;

MongoClient.connect('mongodb://admin:spock1@ds115193.mlab.com:15193/spock', {useNewUrlParser: true}, (error, client) =>{

    console.log('mongo up');
    if(error) console.error(`Couldn't connect to mongodb`,  error);

    db = client.db(`spock`);
    app.listen(port, () => console.log(`Express running on port ${port}`));

})