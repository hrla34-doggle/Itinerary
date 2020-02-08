const router = require('express').Router();
const controllers = require('./controllers');

router
.route('/')
.get(controllers.get)
.post(controllers.post)
.delete(controllers.delete)

router
.route('/:id')
.get(controllers.getOne)
module.exports = router;