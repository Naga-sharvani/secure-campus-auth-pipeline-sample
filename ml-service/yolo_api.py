# fastapi is used for backend
from fastapi import FastAPI, UploadFile, File

# for yolov8n.pt
from ultralytics import YOLO

# for CORS it acts as a bridge
from fastapi.middleware.cors import CORSMiddleware
# used to open image files
from PIL import Image
# used to read the uploaded file as bytes
import io

# creates fastApi app instance
app = FastAPI()

# enables cors to handle requests from frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load YOLOv8 model once when server starts (efficient)
model = YOLO("yolov8n.pt")
print("Model loaded successfully.")

# create post endpoint /detect
@app.post("/detect")
async def detect(file: UploadFile = File(...)):
    image = Image.open(io.BytesIO(await file.read()))
    results = model(image)

    objects = []
    for box in results[0].boxes:
        cls = int(box.cls)
        objects.append(model.names[cls])
    # return detected objects as json response
    return {"objects": objects}