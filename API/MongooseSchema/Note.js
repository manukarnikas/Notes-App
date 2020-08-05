var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var NoteSchema  = new  Schema({


    title:{
        type: String,
        required: true
    },

    note:{
        type: String,
        required: true
    },

    // createdDate:  {
    //     type: Date,
    //     required: true
    // },

//     lastModifiedDate: {
//         type: Date,
//         required: true
//     }
},
{
    timestamps: true
});


var Note = mongoose.model('Note',NoteSchema);

module.exports = Note;



















