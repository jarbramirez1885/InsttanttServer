const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');

router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.put('/:id', userController.updateUser);

module.exports = router;