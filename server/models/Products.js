/**
 * Created by z062281 on 6/18/16.
 */
var mongoose = require('mongoose');
var category = require('./Category');

var schema = new mongoose.Schema({
    name: { type: String, trim: true, lowercase: true },
    description: { type: String, trim: true, lowercase: true },
    qty: { type: Number },
    prices: {
        mrp: { type: Number },
        dlp: { type: Number },
        rrp: { type: Number }
    },
    currency: {type: String, default: 'INR'},
    category: [{type: mongoose.Schema.Types.ObjectId, ref: category}],
    image: { data: Buffer, contentType: String },
    updated: { type: Date, default: Date.now }
});

mongoose.model('Product', schema);

// {
//     "product_id": "p1001",
//     "name": "Apple watch",
//     "description": "Wearable smart watch",
//     "qty": 20,
//     "prices": {
//     "mrp": 349,
//         "dlp": 299,
//         "regular": 349
// },
//     "category_ids": ["c111", "c112"],
//     "image": ""
// }