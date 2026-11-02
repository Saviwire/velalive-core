import modal
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = modal.App("velalive-ai")
web_app = FastAPI()

# 👑 THIS ALLOWS CLOUDFLARE TO TALK TO MODAL
web_app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@web_app.get("/")
def health_check():
    return {
        "status": "online",
        "engine": "Velalive God Mode",
        "message": "The AI backend is running perfectly."
    }

@app.function()
@modal.asgi_app()
def fastapi_app():
    return web_app
