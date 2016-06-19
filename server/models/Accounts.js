/**
 * Created by z062281 on 6/18/16.
 */
var mongoose = require('mongoose');

var AccountSchema = new mongoose.Schema({
    email: { type: String, trim: true, lowercase: true},
    image: { data: Buffer, contentType: String },
    name: { type: String, trim: true, lowercase: true},
    address: [{
        city: { type: String, trim: true},
        country: { type: String, trim: true},
        landmark: { type: String, trim: true},
        state: { type: String, trim: true},
        street: { type: String, trim: true},
        zip: { type: Number }
    }],
    phone: {
        home: [String],
        mobile: [String],
        office: [String]
    },
    subsidiary: [String],
    branches: [String],
    franchises: [String],
    proprietor: [String],
    url: { type: String, trim: true},
    updated: { type: Date, default: Date.now }
});

mongoose.model('Account', AccountSchema);

// var acc = new Account();
// acc = {
//   "address": {
//     "city": "Minneapolis",
//     "country": "United States",
//     "landmark": "Downtown",
//     "state": "MN",
//     "street": "110 W Grant St",
//     "zip": 55403
//   },
//   "email": "contact@ak.com",
//   "image": "",
//   "name": "AK",
//   "phone": {
//     "home": ["2093240200", "6153240200"],
//     "mobile": ["6123240200", "6123240200"],
//     "office": ["9523240200", "6153240200"]
//   },
//   "subsidiary": [],
//   "branches": [],
//   "franchises": [],
//   "proprietor": ["Arun Kalyanaraman"],
//   "type": "IT",
//   "url": "www.ak.com",
//   id: new mongoose.Types.ObjectId
// };
//
// acc.name = "nk1";
// acc.address.city = "Minneapolis";
// acc.address.country = "United States";
// acc.address.landmark = "Downtown";
// acc.address.state = "MN";
// acc.address.street = "110 W Grant St";
// acc.address.zip = 55403;
//
// acc.save(function (err, msg) {
//   console.log('Saved...');
// });
//
// Account.find({}, function (err, msg) {
//   if ( err ) res.json(err);
//
//   res.json(msg);
// })