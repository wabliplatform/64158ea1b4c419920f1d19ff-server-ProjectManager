/**
 * The TaskController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/TaskService');
const createtask = async (request, response) => {
  await Controller.handleRequest(request, response, service.createtask);
};

const deletetask = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletetask);
};

const getAlltask = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAlltask);
};

const getByParamstask = async (request, response) => {
  await Controller.handleRequest(request, response, service.getByParamstask);
};

const gettask = async (request, response) => {
  await Controller.handleRequest(request, response, service.gettask);
};

const updatetask = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatetask);
};


module.exports = {
  createtask,
  deletetask,
  getAlltask,
  getByParamstask,
  gettask,
  updatetask,
};
