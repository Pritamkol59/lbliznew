/* eslint-disable */

const express = require('express');
const firebase = require('firebase-admin');
const {db} = require('../connection');
const jwt = require('jsonwebtoken');
const router = express.Router();
const {
  create,
  dualmatchfind,
  singlematchfind,
  idfind,
  updatex,
  deletedata,
} = require('../model/database');

const { tokengen } = require('../helper/token');

