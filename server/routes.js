const router = require('express').Router();
const controllers = require('./controllers');
// const controllers = require('./pgControllers.js');

router
.route('/')
.get(controllers.get)
.post(controllers.post)
.delete(controllers.delete)

router
.route('/:id')
.get(controllers.getOne)
.delete(controllers.deleteOne)

// router
// .route('/:id')
// .get(controllers.getOne)

module.exports = router;