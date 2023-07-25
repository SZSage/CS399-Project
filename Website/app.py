from fastapi import FastAPI 
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
import os

app = FastAPI()


# mount static files directories (only for static file like css)
app.mount("/css", StaticFiles(directory="css"), name="css")


# this function does nothing yet
@app.get("/data")
async def get_data():
    # replace with actual data
    return {"message": "Test"}

@app.get("/", response_class=HTMLResponse)
async def read_root():
    # reads Wordle.html file and returns html file
    with open(os.path.join('html', 'Wordle.html'), 'r') as f:
        html_content = f.read()
    return HTMLResponse(content=html_content, status_code=200)



