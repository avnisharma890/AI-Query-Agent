# Hello Agent — LLM Query App

A full-stack AI-powered query application that accepts user questions, generates concise summaries using an LLM, and returns structured, validated responses.

This project demonstrates practical integration of large language models into a production-style web architecture with strong input/output validation.

---

## 🚀 Overview

Hello Agent allows users to:

- Ask natural language questions  
- Receive beginner-friendly summaries  
- View a confidence score for each response  
- Interact through a clean Next.js interface  

Under the hood, the system enforces **schema-validated LLM outputs**, ensuring reliable and predictable responses.

---

## 🧠 Architecture

**High-level flow:**
User → Next.js Frontend → Express Backend → LLM Provider → Validated Response → UI



### Responsibilities

**Frontend (Next.js)**  
Handles user input, loading states, and rendering answers.

**Backend (Express)**  
Validates requests, calls the LLM, and returns structured results.

**LLM Layer (Groq / Gemini / OpenAI)**  
Generates summaries based on user queries.

**Schema Validation (Zod)**  
Ensures the model output always matches the expected contract.

---

## 🔄 Data Flow

1. User submits a question from the UI  
2. Frontend sends `POST /api/ask`  
3. Next.js rewrites request to Express backend  
4. Backend validates the query  
5. LLM generates a structured response  
6. Zod schema validates the output  
7. Response is returned and rendered in the UI  

---

## ✨ Key Features

- Full-stack LLM integration  
- Provider-agnostic model selection (Groq, Gemini, OpenAI)  
- Structured output enforcement with Zod  
- Clean API proxy via Next.js rewrites  
- Defensive input validation  
- Loading and error handling in UI  

---

## 🧩 Tech Stack

### Frontend
- Next.js (App Router)  
- React  
- TypeScript  
- Tailwind CSS  

### Backend
- Node.js  
- Express  
- TypeScript  

### AI / Validation
- LangChain chat models  
- Groq / Gemini / OpenAI APIs  
- Zod for schema validation  

---

## ⚙️ Environment Variables

Create a `.env` file in the backend:

```env
PROVIDER=groq
GROQ_API_KEY=your_key_here
GOOGLE_API_KEY=your_key_here
OPENAI_API_KEY=your_key_here
PORT=5000
```

Only the key for your selected provider is required.

---

### 🛠️ Local Setup
1. Clone the repository
git clone <your-repo-url>
cd <repo-name>
2. Install dependencies

Backend

cd backend
npm install

Frontend

cd client
npm install
3. Run the backend
npm run dev:server

Server runs on:

http://localhost:5000
4. Run the frontend
npm run dev

App runs on:

http://localhost:3000
🧪 Example Request
POST /api/ask

{
  "query": "Explain recursion in simple terms"
}
Example Response
{
  "summary": "Recursion is when a function calls itself...",
  "confidence": 0.82
}

---

### ⚠️ Notable Engineering Challenges

During development, a key challenge was handling LLM structured output reliability:

LLMs sometimes return numbers as strings

Schema mismatches can trigger silent retries

Retries increase latency and token usage

This was resolved using Zod coercion to safely normalize model output while preserving validation guarantees.

---


### 🔮 Future Improvements

User authentication

Persistent query history

Rate limiting per user

Streaming responses

Multi-step agent workflows

Cloud deployment
