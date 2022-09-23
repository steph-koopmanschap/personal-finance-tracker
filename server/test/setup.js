//This file sets ups and initializes all the tests and its configs

const supertest = require('supertest');
const chai  = require('chai');
const sinonChai  = require('sinon-chai');
const index  = require('../src/index.js');

chai.use(sinonChai);
const { expect } = chai;
const server = supertest.agent(index);
const BASE_URL = '/api';

module.exports = {expect, server, BASE_URL};
