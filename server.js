const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

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

app.listen(port, () => console.log(`Express running on port ${port}`));