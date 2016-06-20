/**
 * Created by z062281 on 6/18/16.
 */
var mongoose = require('mongoose');
var account = require('./Accounts').Account;

var schema = new mongoose.Schema({
    orderId: { type: String, trim: true, unique: true },
    orderDate: { type: Date },
    completed: { type: Boolean, default: false },
    amount: { type: Number },
    accountId: { type: mongoose.Schema.Types.ObjectId, ref: account},
    products: [{
        productId: {type: String},
        name: {type: String},
        qty: {type: Number},
        price: {type: Number},
        discount: {type: Number},
        fulfillmentDate: {type: Date}
    }],
    updatedOn: { type: Date, default: Date.now }
});

mongoose.model('Order', schema);

// [{
//     "order_id": "c001",
//     "order_date": "10-Feb-2016",
//     "filfillment_date": "",
//     "total": 1649,
//     "account_id": 1,
//     "items": [{
//         "item_id": "p1000",
//         "name": "iPhone",
//         "qty": 2,
//         "cost": 650,
//         "discount": 2,
//         "fulfillment_date": "15-Feb-2016"
//     },
//         {
//             "item_id": "p1001",
//             "name": "Apple Watch",
//             "qty": 1,
//             "cost": 349,
//             "discount": 2,
//             "fulfillment_date": "12-Feb-2016"
//         }]
// },
//     {
//         "order_id": "c002",
//         "order_date": "20-Jan-2016",
//         "total": 3490,
//         "account_id": 2,
//         "items": [{
//             "item_id": "p1001",
//             "name": "iPhone",
//             "qty": 5,
//             "cost": 650,
//             "discount": 10,
//             "fulfillment_date": ""
//         }]