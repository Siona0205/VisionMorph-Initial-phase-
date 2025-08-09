const { buildPrompt } = require("../promptGenerator");

const generatePrompt = (req, res) => {
  const prompt = buildPrompt(req.body);
  res.json({ prompt });
};

module.exports = { generatePrompt };
