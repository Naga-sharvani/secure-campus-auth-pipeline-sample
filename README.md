# Secure-campus-auth-pipeline-sample
A 2FA Image-Based Authentication System powered by YOLOv8, FastAPI, and Express.

Part of the <a href="https://github.com/Naga-sharvani/secure-campus-hub">Secure Campus Hub</a> ecosystem.

<h2>Inspiration </h2>
Traditional admin authentication relies only on passwords.This system introduces an object verification step using YOLO detection, making unauthorized access significantly harder even if credentials are compromised. 

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

<h2> Key Features</h2>
<pre>
- Image based second factor authentication
- Express → FastAPI microservice communication
- YOLOv8 object detection integration
- Modular backend service architecture
- Secure verification workflow design
</pre>

<h2> Project Structure </h2>
<pre>
server/
Contains Express API that receives login verification images and forwards them
to the YOLO detection service.

ml-service/
Contains FastAPI microservice running YOLOv8 object detection.
</pre>

<pre>
<h2>How to run locally</h2>

<b>Run YOLO service:</b>

cd ml-service
pip install -r requirements.txt
uvicorn yolo_api:app --reload 
Runs on:
http://localhost:8000

<b>Run Express server:</b>

cd server 
npm install 
node index.js
Runs on:
http://localhost:5000
</pre>

<h2>Example response</h2>
<pre>
{
  "objects": [
    "traffic light"
  ]
}
</pre>

<h2> Try it out!! </h2>
https://secure-campus-hub.vercel.app
🧪 Test Image Authentication:
Login as admin (The username should end with @admin) and the password is pass123

Logout

Select Image Verification

Enter object label (example: cake)

Login again

Upload image related to the label you choose.(Please Wait for the image to be verified it takes some time)

Access granted

The backend is on: https://secure-campus-hub-server.onrender.com/

The ml-service is on: https://secure-campus-hub.onrender.com
 

