from fastapi import (
    Depends,
    FastAPI,
    File,
    UploadFile,
    HTTPException,
    status,
    Cookie,
    Request,
)
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel

from model.model import chain

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Question(BaseModel):
    question: str

@app.post("/chat")
async def chat_endpoint(data: Question):
    result = chain.invoke(data.question)
    return result

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="localhost", port=8000)