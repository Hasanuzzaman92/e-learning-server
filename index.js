const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;


const courses = require('./data/data.json');




app.get('/', (req, res) =>{
    res.send('e-learning server is running')
})


app.listen(port, ()=>{
    console.log('server is running on port:', port)
})