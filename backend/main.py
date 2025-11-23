from fastapi import FastAPI
from pydantic import BaseModel
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

class chatRequest(BaseModel):
    message : str

app=FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True
    )

def get_llmResponse(user_msg):
    message=user_msg.lower()
    llm = ChatGroq(
    model="llama-3.1-8b-instant",
    temperature=1,
    max_tokens=None,
    max_retries=2,)
    messages = [("system","You are HARSH AI - Helpful Assistant for Research Study & Help AI, build/your father/created by Harsh. You are a personal assistant of Harsh who answer only the specified fields of questions related to different papers in college, repectfully answer sikhism questions, and coding. Answer the questions only from the authentic sources and do well research for sikhism and different papers related questions. If user ask questions other than these topics then you should calmly motivate to ask questions related to these topics only. Write short concise and only answer too the point not write too much.",),
    ("user", message),]

    ai_msg = llm.invoke(messages)
    return ai_msg.content


@app.post("/")
async def chat(request:chatRequest):
    reply=get_llmResponse(request.message)
    return {"reply":reply}
