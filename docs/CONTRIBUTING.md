# Contributing Guidelines

## Branches

- `main`: stable, demo-ready code.
- `dev`: active integration branch.
- `feature/*`: one branch per task.
  - Example: `feature/backend-auth`, `feature/frontend-submit-complaint`.

## Workflow

1. Create your feature branch from `dev`.
2. Commit small, meaningful changes.
3. Push your branch to GitHub.
4. Open a Pull Request (PR) into `dev`.
5. At least one teammate reviews before merge.

## Code Style

- **Backend (Python)**
  - Use FastAPI + SQLModel.
  - Run `black` before committing.
- **Frontend (React)**
  - Use functional components and hooks.
  - Run `npm run lint` (once configured).

## Commit Messages

- Use clear messages, e.g.:
  - `feat: add user register API`
  - `fix: handle invalid login`
  - `chore: update docs`
