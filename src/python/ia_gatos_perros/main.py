from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from keras.models import load_model
from PIL import Image
import numpy as np
import io

app = FastAPI()

# Permitir conexión desde React (localhost:3000, por ejemplo)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Puedes restringirlo a tu dominio
    allow_methods=["*"],
    allow_headers=["*"],
)

# Cargar el modelo
model = load_model("./src/python/ia_gatos_perros/modelo_perros_gatos.keras")

# Preprocesar imagen
def preprocess_image(image_bytes):
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    image = image.resize((150, 150))  # ajusta al input shape de tu modelo
    image = np.array(image) / 255.0
    image = image.reshape((1, 150, 150, 3))
    return image

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    image_bytes = await file.read()
    image = preprocess_image(image_bytes)
    prediction = model.predict(image)[0][0]
    label = "Perro 🐶" if prediction > 0.5 else "Gato 😺"
    return {"resultado": label, "confianza": float(prediction)}
