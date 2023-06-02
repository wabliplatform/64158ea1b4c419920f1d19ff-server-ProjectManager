/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Task } = require('../models/Task');

/**
* Creates the data
*
* task Task data to be created
* returns task
* */
const createtask = ({ task }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Task(task).save();
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
* taskId String the Id parameter
* no response value expected for this operation
* */
const deletetask = ({ taskId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Task.findOneAndDelete({ _id:taskId }).exec();
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
const getAlltask = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Task.find().populate(['taskEmployee']).exec();
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
const getByParamstask = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Task.find(JSON.parse( filter )).populate(['taskEmployee']).exec();
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
* taskId String the Id parameter
* returns task
* */
const gettask = ({ taskId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Task.findById(taskId)
      .populate(['taskEmployee']).exec();
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
* taskId String the Id parameter
* task Task data to be updated (optional)
* returns task
* */
const updatetask = ({ taskId, task }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Task.findOneAndUpdate({ _id:taskId },task).exec();
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
  createtask,
  deletetask,
  getAlltask,
  getByParamstask,
  gettask,
  updatetask,
};
