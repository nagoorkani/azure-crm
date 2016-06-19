/**
 * Created by z062281 on 6/18/16.
 */
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    categoryId: {type: String, trim: true, unique: true},
    name: {type: String, trim: true},
    title: {type: String, trim: true},
    subTitle: {type: String, trim: true},
    updatedOn: { type: Date, default: Date.now },
    image: { data: Buffer, contentType: String }
});

mongoose.model('Category', schema);
//
// {
//     "category_id": "c111",
//     "name": "Electronics",
//     "title": "Home, Entertainment and Auto",
//     "subTitle": ""
// },