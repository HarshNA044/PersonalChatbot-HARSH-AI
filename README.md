# Personal Chatbot – H.A.R.S.H. AI

H.A.R.S.H. AI is a lightweight personal chatbot that uses FastAPI on the backend and a simple HTML/CSS/JavaScript interface on the frontend. It connects to the Groq Llama 3.1 8b instant model through LangChain to generate fast and accurate responses. The project is still under development, and more features will be added over time.

---

**How to Run the Project Locally**

1. Clone the repository

git clone https://github.com/HarshNA044/PersonalChatbot-HARSH-AI.git
cd PersonalChatbot-HARSH-AI

2. Backend setup

Go to the backend folder:

cd backend

Install dependencies:

pip install -r requirements.txt

Create a ".env" file:

GROQ_API_KEY=enter_your_api_key_here

Run the FastAPI server:

uvicorn main:app --reload

Your backend will start at:

http://127.0.0.1:8000/

3. Frontend setup

Go to the frontend folder:

cd frontend

Open "index.html" in your browser:

- Double-click the file, or
- Use a simple local server like:

python -m http.server 8080

Make sure "script.js" points to your local backend:

http://127.0.0.1:8000/

---

**Advantages**

- Simple and easy to understand
- Uses FastAPI, which is fast and clean
- Frontend is lightweight and requires no frameworks
- Works with Groq Llama models for fast responses
- Clear separation of backend and frontend
- Easy to modify and extend

---

**Limitations**

- No message history or memory
- No user authentication
- Not optimized for large-scale usage
- Requires Groq API key
- No streaming responses
- Basic UI, minimal styling
- Needs stable internet for LLM requests

---

**Project Status**

This project is actively under development.
More updates coming soon.
