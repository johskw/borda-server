const express = require('express');
const router = express.Router();
const handler = require('../handlers/event');

router.get('/:id', handler.show);
router.post('/', handler.create);

module.exports = router;
