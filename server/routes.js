const router = require('express').Router();
const controllers = require('./controllers');

router
.route('/')
.get(controllers.get)
.post(controllers.post)
.delete(controllers.delete)

module.exports = router;