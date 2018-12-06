const express = require('express');
const router = express.Router();
let db = require('../models')
const helpers = require('../helpers/todos.js')

router.get('/', helpers.getTodos)

router.post('/', helpers.createTodo)

router.get('/:todoId', helpers.getTodo)

router.put('/:todoId', helpers.update)

router.delete('/:todoId', helpers.delete)

module.exports = router;