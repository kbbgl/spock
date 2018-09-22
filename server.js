const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });

app.get('/search', (req, res) => {
    console.log(req.query.q);


})

app.listen(port, () => console.log(`Express running on port ${port}`));