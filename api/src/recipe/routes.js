const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getRecipeSummary);

router.get("/:id", controller.getRecipeById);

module.exports = router;