
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
Underscoreid:String , 


employeeName:String 



})

module.exports = {
  Employee : mongoose.model('employee', employeeSchema),
}

