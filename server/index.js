import express from "express";
import cors from "cors";
import { sendToYolo } from "./yolo.service.js";
// Middleware used to handle file uploads (images here)
import multer from "multer";

//to forward uploaded data to YOLO
import FormData from "form-data";
import fetch from "node-fetch";

const app = express();

app.use(cors());

const upload = multer();

//receives image from frontend, forwards it to YOLO, and returns the detected objects back to frontend
app.post("/match", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image uploaded" });
    }

    const formData = new FormData();

    // Append uploaded file buffer into request body
    formData.append("file", req.file.buffer, {
      filename: req.file.originalname,
      contentType: req.file.mimetype,
    });

    //receive data from YOLO and returns detected object labels
    const objects = await sendToYolo(req.file.buffer);
    res.json({ objects });

    //to receive data from YOLO and send it back
    const data = await response.json();

    res.json(data);

  } catch (err) {
    console.error("Forwarding error:", err);
    res.status(500).json({ error: "YOLO request failed" });
  }
});

// Start Express server on port 5000
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});