const mongoose =require('mongoose');
const Schema = mongoose.Schema;

/*
    Image Schema for storing images
*/

var ImageSchema = new Schema({

    imageName: {
        type: String,
        default:"none",
        required:true
    },
    imageData: {
        type: String,
        required: true
    }


});

var Image = mongoose.model('Image', ImageSchema);

module.exports = Image;
