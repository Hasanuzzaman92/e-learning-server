const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;


const courses = require('./data/data.json');


app.get('/', (req, res) =>{
    res.send('e-learning server is running')
})


app.get('/courses', (req, res) =>{
    res.send(courses);
})

app.get('/course/:id', (req, res)=>{
    const id = req.params.id;
    const singelCourse = courses.find(course => course.id == id);
    if(!singelCourse){
        res.send('data not found')
    }
    res.send(singelCourse)
})


app.listen(port, ()=>{
    console.log('server is running on port:', port)
})