# Smart Civic Solutions – Architecture (Draft)

## Overview

- Web frontend built with React (Vite).
- Backend API built with FastAPI (Python).
- Database: PostgreSQL.
- Frontend talks to backend via REST (JSON over HTTP).

## Current Components

- `/frontend`:
  - React app with routes:
    - `/` Home
    - `/login`
    - `/register`
    - `/submit`
    - `/my-complaints`
- `/backend`:
  - FastAPI app with:
    - `GET /health` – health check endpoint.

## Near-term Plan

- Add user authentication (JWT) in backend.
- Add user register/login UI in frontend.
- Add complaint model and CRUD APIs.
- Connect complaint submission form to backend.
