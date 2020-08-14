
const Note = require('../MongooseSchema/Note');


/*
 * Add Note
 */
let addNote = async function(queryparam){
    try {
        var query = {
            title: queryparam.title,
            note: queryparam.note,
            // createdDate: queryparam.createdDate,
            // lastModifiedDate: queryparam.lastModifiedDate
        };
         var result = await Note.create(query);
         return result;
        } catch (err) {
        console.log(err);
        return err;
    }
}


/*
 *  get Notes
 */
let getNotes = async function () {
    try {
        var result = await Note.find({});
        return result;
    } catch (err) {
        return err;
    }
}


/**
 *  Update Note
 */
let updateNote = async function (data) {
    try {
        var result = await todo.findOneAndUpdate({
            _id: data.query.id
        }, data.update, {
            upsert: true,
            new: true,
            setDefaultsOnInsert: true
        });
        return result;
    } catch (err) {
        return err;
    }
};


/*
 *  delete Note
 */
let deleteNote = async function (data) {
    try {
        deldata = {
            _id: data.id
        }
        var result = await Note.deleteOne(deldata,function(err, obj) {
        if (err) throw err;
        });
        return result;
    } catch (err) {
        return err;
    }
};


module.exports = {
    addNote:addNote,
    getNotes: getNotes,
    updateNote: updateNote,
    deleteNote: deleteNote
};