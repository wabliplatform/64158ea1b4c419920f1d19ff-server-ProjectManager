
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
Underscoreid:String , 


taskName:String , 


taskStatus:String , 


taskEmployee:  
  {
    type: Schema.Types.ObjectId,
    ref:'employee'
  }

 



})

module.exports = {
  Task : mongoose.model('task', taskSchema),
}

