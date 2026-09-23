# LearnCourt

A full-stack learning platform built using modern web development architecture.

## Tech Stack

### Frontend

- React
- TypeScript
- Zustand
- React Testing Library
- Tailwind CSS
- shadcn/ui

### Backend

- NestJS
- TypeScript
- REST API
- Prisma
- PostgreSQL
- Redis
- BullMQ
- Jest

## Features

- User authentication and authorization
- Course management
- Lessons and quizzes
- Student progress tracking
- Admin dashboard
- Pagination and filtering
- Request validation with DTOs
- Redis caching and cache invalidation
- Background jobs with BullMQ
- Error handling
- Responsive UI
- Unit and component testing

## Architecture

```text
React + TypeScript
        │
        │ REST API
        ▼
NestJS + TypeScript
        │
   ┌────┴─────┐
   │          │
Prisma      Redis
   │          │
   ▼          ▼
PostgreSQL  BullMQ
```

## Project Structure

```text
learncourt/
├── frontend/    # React application
├── backend/     # NestJS application
├── .gitignore
└── README.md
```

## Getting Started

### Clone the repository

```bash
git clone <repository-url>
cd learncourt
```

### Frontend

```bash
cd frontend
pnpm install
pnpm dev
```

### Backend

```bash
cd backend
pnpm install
pnpm start:dev
```

## Environment Variables

Create the required `.env` files based on the provided `.env.example` files.

### Backend

```env
DATABASE_URL=
REDIS_HOST=
REDIS_PORT=
JWT_SECRET=
```

## Development

The frontend communicates with the NestJS backend through REST APIs.

The backend uses PostgreSQL for persistent data, Redis for caching and BullMQ for asynchronous background jobs.

## Testing

Frontend tests use React Testing Library.

Backend tests use Jest.

```bash
pnpm test
```

## Status

🚧 In development
