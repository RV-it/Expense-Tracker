const mongoose = require('mongoose');

const transectionSchema = new mongoose.Schema({
   userid:{
      type:String,
      requied:true,
   },
   amount:{
    type:Number,
    required:[true, "amount is required"]
   },
   type:{
      type:String,
      requied:[true, 'type is required']
   },
   category:{
      type:String,
      requires:[true, 'category is required']
   },
   refrence:{
    type:String,
   },
   description:{
    type:String,
    required:[true, 'description is required']
   },
   date:{
    type: Date,
    required:[true, 'Date is required']
   }
},{timestamps: true})

const transectionModel = mongoose.model('transections', transectionSchema);

module.exports = transectionModel;