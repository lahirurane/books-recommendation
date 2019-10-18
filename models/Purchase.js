const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PurchaseSchema = new Schema({
  data_id: {
   type: Schema.Types.ObjectId,
    ref: 'books'
  },
  user_id: {
    type: Number,
    required: true
  },
 date: {
    type: Date,
    default: Date.now
  }
  
});

module.exports = Purchase = mongoose.model('purchases', PurchaseSchema);
