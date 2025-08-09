const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { spawn } = require("child_process");
const path = require("path");

const app = express();
const PORT = 5000;

// app.use(cors());
const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
};

app.use(cors(corsOptions));



app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public"))); // To serve generated images

app.post("/api/generate-image", (req, res) => {
  const prompt = req.body.prompt;
  console.log("📩 Received prompt:", prompt);

  // Run Python script with prompt
  const process = spawn("python", ["generate_image.py", prompt]);

  let output = "";

  process.stdout.on("data", (data) => {
    output += data.toString();
  });

  process.stderr.on("data", (data) => {
    console.error("Python stderr:", data.toString());
  });

  process.on("close", (code) => {
    if (code === 0) {
      const imageUrl = output.trim();
      res.json({ imageUrl });
    } else {
      res.status(500).json({ error: "Image generation failed." });
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
