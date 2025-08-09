const express = require("express");
const router = express.Router();
const { generatePrompt } = require("../controllers/promptController");

router.post("/", generatePrompt);

module.exports = router;
