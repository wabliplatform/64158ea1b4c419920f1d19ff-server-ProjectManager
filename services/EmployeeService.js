/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Employee } = require('../models/Employee');

/**
* Creates the data
*
* employee Employee data to be created
* returns employee
* */
const createemployee = ({ employee }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Employee(employee).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* employeeId String the Id parameter
* no response value expected for this operation
* */
const deleteemployee = ({ employeeId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Employee.findOneAndDelete({ _id:employeeId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllemployee = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Employee.find().exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data based on user query
*
* filter String the query based on which the search is performed
* returns Object
* */
const getByParamsemployee = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Employee.find(JSON.parse( filter )).exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* employeeId String the Id parameter
* returns employee
* */
const getemployee = ({ employeeId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Employee.findById(employeeId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* employeeId String the Id parameter
* employee Employee data to be updated (optional)
* returns employee
* */
const updateemployee = ({ employeeId, employee }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Employee.findOneAndUpdate({ _id:employeeId },employee).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createemployee,
  deleteemployee,
  getAllemployee,
  getByParamsemployee,
  getemployee,
  updateemployee,
};
