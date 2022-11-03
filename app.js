const express = require('express')
const bodyParser = require("body-parser");
const app = express()
app.use(bodyParser.json());


const applicants = [
    { name: "Thabo", studentId: 23 , subjects: ["math" , "english" , 'business'] , grade: 12 }, 
{ name: "Smith", studentId: 13  , subjects: ["arts" , 'business'] , grade: 11 }
]

app.get('/', (req, res) => {
    res.json(applicants)
})

app.get('/:studentId', (req, res) => {
    var studentId = req.params.studentId
    const foundStudent = applicants.filter(student => student.studentId == studentId)
    res.json(foundStudent)
})


app.post('/', (req, res) => {
    console.log("req", req.body)
    applicants.push(req.body)
    res.send(202)
})


app.listen(4004, () => { console.log("server running on port 4004") })