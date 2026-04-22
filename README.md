# Secure-campus-auth-pipeline-sample
This is a sub repo which is a derived from secure-campus-hub repo.This repository demonstrates the image-based second-factor authentication pipeline used in Secure Campus Hub. It integrates a React frontend, Express backend, and FastAPI YOLO detection microservice to verify admin selected objects during login.

<h2> Link for the full project</h2>
https://github.com/Naga-sharvani/secure-campus-hub

<h2> Archietecture Overview</h2>

<pre>
Frontend (React) 
    ↓
Express API (/match)
   ↓ 
FastAPI ML Service (/detect)
   ↓
YOLO Object Detection
</pre>

<h2> This sample showcases</h2>
<pre>
- Image based second-factor authentication
- Express → FastAPI microservice communication
- YOLOv8 object detection integration
- Modular backend service architecture
- Secure verification workflow design
</pre>

<h2> Folder Explanation </h2>
<pre>
server/
Contains Express API that receives login verification images and forwards them
to the YOLO detection service.

ml-service/
Contains FastAPI microservice running YOLOv8 object detection.

README.md
Explains architecture and usage of the authentication pipeline.
</pre>

<h2>How to run locally</h2>

<b>Run YOLO service:</b>

cd ml-service
uvicorn yolo_api:app --reload

<b>Run Express server:</b>

cd server \
node index.js

<h2>Example response</h2>
<pre>
{
  "objects": [
    "traffic light"
  ]
}
</pre>

<h2>Design Motivation</h2>
Traditional admin authentication relies only on passwords.This system introduces an object verification step using YOLO detection, making unauthorized access significantly harder even if credentials are compromised. 