const express = require('express');
const router = express.Router();

const entryController = require('../controllers/entryController.js');

// We use this technique to link various requests on one route -> Chained Route Handlers
// Passing Middleware auth
router
  .route('/')
  .get(entryController.getEntries)
  .post(entryController.createEntries);

router.route('/:id').get(entryController.getEntry);

module.exports = router;
