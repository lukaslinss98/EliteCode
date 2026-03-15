# EliteCode

## Prerequisites

- Python 3.11+
- Node.js 18+
- Docker

## Getting Started

### 1. Start the database

```bash
docker-compose up -d
```

This starts PostgreSQL on port `5432` and pgAdmin on port `8080`.

### 2. Environment variables

Create a `.env` file in the `backend/` directory:

```bash
SECRET_KEY=your_secret_key_here
```

### 3. Backend

```bash
cd backend
pip install -r requirements.txt
fastapi dev app/main.py
```

The API runs at `http://localhost:8000`.

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

The app runs at `http://localhost:5173`.
