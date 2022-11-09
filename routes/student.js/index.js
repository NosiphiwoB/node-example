const Student = require('../../dbSchemas/Student');

const studentRoutes = (app) => {
    app.get('/', async (req, res) => {
        var students = await Student.find()
        res.json(students)
    })
    
    app.get('/:studentId', async (req, res) => {
        var studentId = req.params.studentId
        const studentFound = await Student.find({studentId : studentId})
        res.json(studentFound)
    })
    
    
    app.post('/', async (req, res) => {
        const { name, studentId, grade } = req.body
        try {
            const student = new Student({
                name: name,
                studentId: studentId,
                grade: grade
            })
            var id = await student.save()
            console.log(id)
            res.send(202)
        } catch (e) {
            console.log(e)
        }
    })


    app.put('/:id' , async (req , res) => {
        const {name , studentId } = req.body
        const {id } = req.params
        await Student.findByIdAndUpdate({_id : id }, {name : name , studentId : studentId})
        res.send(200)
    })
    
} 


module.exports = { studentRoutes}