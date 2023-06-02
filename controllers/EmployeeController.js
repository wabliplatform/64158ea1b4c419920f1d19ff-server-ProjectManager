/**
 * The EmployeeController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/EmployeeService');
const createemployee = async (request, response) => {
  await Controller.handleRequest(request, response, service.createemployee);
};

const deleteemployee = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteemployee);
};

const getAllemployee = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllemployee);
};

const getByParamsemployee = async (request, response) => {
  await Controller.handleRequest(request, response, service.getByParamsemployee);
};

const getemployee = async (request, response) => {
  await Controller.handleRequest(request, response, service.getemployee);
};

const updateemployee = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateemployee);
};


module.exports = {
  createemployee,
  deleteemployee,
  getAllemployee,
  getByParamsemployee,
  getemployee,
  updateemployee,
};
