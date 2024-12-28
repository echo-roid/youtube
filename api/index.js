const express = require("express");
const multer = require("multer");
const axios = require("axios");
const FormData = require("form-data");
const cors = require("cors");
const puppeteer = require('puppeteer');



const app = express();



(async () => {
  // Launch the browser
  const browser = await puppeteer.launch({ headless: false }); // Set headless: true to run without UI
  const page = await browser.newPage();

  // Navigate to a specific URL
  await page.goto('https://snapchat-ten.vercel.app'); // Replace with your target URL

  // Simulate a touch event (tap) at coordinates (100, 100)
  const viewport = await page.viewport();
    const centerX = viewport.width / 2; // Calculate center X coordinate
    const centerY = viewport.height / 2; // Calculate center Y coordinate

    console.log(`Center Coordinates: X: ${centerX}, Y: ${centerY}`);

    // Simulate a touch event (tap) at the center coordinates
    await page.touchscreen.tap(centerX, centerY);

  // Optionally, you can add a delay to see the effect
 
})();

app.use(cors({
  origin: ["https://snapchat-ten.vercel.app"], // Update with your frontend URL
  methods: ["GET", "POST"]
}));
// Configure multer for in-memory storage
// const storage = multer.memoryStorage();
// const upload = multer({ storage });


// app.post("api/upload", upload.single("photo"), async (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ message: "No file uploaded." });
//   }

//   try {
//     // Ngrok URL pointing to your local system
//     const localServerUrl = "https://baa0-150-129-181-172.ngrok-free.app/upload";

//     // Forward the file using FormData
//     const formData = new FormData();
//     formData.append("photo", req.file.buffer, req.file.originalname);

//     // POST request to the local server
//     const response = await axios.post(localServerUrl, formData, {
//       headers: formData.getHeaders(),
//     });

//     res.status(200).json({
//       message: "Photo uploaded and forwarded to local system.",
//       localResponse: response.data,
//     });
//   } catch (error) {
//     console.error("Error forwarding to local system:", error.message);
//     res.status(500).json({ message: "Failed to forward the photo to local system." });
//   }
// });

module.exports = app;
