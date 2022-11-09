const mongoose = require('mongoose');

//Attributes of the Course object
var student = new mongoose.Schema({
    name: {
        type: String,
    },
    studentId: {
        type: String
    },
    grade: {
        type: String
    },
});

module.exports = mongoose.model('Student', student);