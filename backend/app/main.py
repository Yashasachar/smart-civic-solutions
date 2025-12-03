from fastapi import FastAPI

app = FastAPI()

# Root endpoint -> http://127.0.0.1:8000/
@app.get("/")
def read_root():
    return {"message": "Hello Sachin, backend is working!"}

# Health endpoint -> http://127.0.0.1:8000/health
@app.get("/health")
def health_check():
    return {"status": "ok"}

