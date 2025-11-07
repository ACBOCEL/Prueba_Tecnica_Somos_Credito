const express = require('express');
const router = express.Router();

const getAll = require('./sucursales/getTodo');
const getById = require('./sucursales/getId');
const create = require('./sucursales/create');
const update = require('./sucursales/update');
const remove = require('./sucursales/delete');

router.get('/sucursales', getAll);
router.get('/sucursales/:id', getById);
router.post('/sucursales', create);
router.put('/sucursales/:id', update);
router.delete('/sucursales/:id', remove);

module.exports = router;