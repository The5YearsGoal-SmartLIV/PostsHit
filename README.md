# PostsHit

**PostsHit** is an anonymous community platform where users can anonymously post content, like/dislike posts, challenge others, and join or create groups to share and collaborate on projects. Built using **Next.js** for the frontend and **Node.js** for the backend, the platform offers a fast, scalable experience. The backend is powered by **PostgreSQL** and **Prisma ORM** for seamless database interactions.

## Features

- **Anonymous Posting:** Users can post content anonymously without revealing their identity.
- **Like/Dislike System:** Engage with posts by liking or disliking them.
- **Challenges:** Challenge others to take part in various tasks or projects.
- **Groups:** Create or join groups to share content, updates, and collaborate on projects.
- **Real-Time Notifications:** Get notified when someone interacts with your post or accepts your challenge.
- **User-Friendly Interface:** A modern, responsive UI built using **Next.js**.

## Tech Stack

### Frontend
- **Framework:** Next.js
- **Styling:** CSS Modules / Tailwind CSS
- **State Management:** React Hooks / Context API

### Backend
- **Framework:** Node.js, Express.js
- **Database:** PostgreSQL
- **ORM:** Prisma ORM
- **Authentication:** JWT (JSON Web Tokens)
- **Caching:** Redis (optional for performance optimization)

### Deployment
- **Frontend:** Vercel (for Next.js)
- **Backend:** Heroku / AWS / DigitalOcean (for Node.js)
- **Database:** Hosted PostgreSQL (e.g., Heroku Postgres or AWS RDS)

## Project Structure

your-project/ │ ├── prisma/ │ ├── schema.prisma # Prisma schema definition │ └── migrations/ # Prisma migration files │ ├── src/ │ ├── backend/ │ │ ├── controllers/ │ │ │ └── postController.js # Controller logic for posts │ │ ├── middlewares/ │ │ │ └── authMiddleware.js # JWT authentication middleware │ │ ├── models/ │ │ │ └── postModel.js # Post model handled by Prisma │ │ ├── routes/ │ │ │ └── postRoutes.js # API routes for posts │ │ ├── utils/ │ │ │ └── prismaClient.js # Prisma client for database interaction │ │ └── app.js # Express app entry point │ └── frontend/ │ ├── pages/ │ │ ├── index.js # Main homepage │ │ ├── posts/ # Dynamic posts pages │ ├── components/ │ │ └── PostCard.js # Component for displaying posts │ ├── styles/ │ │ └── Home.module.css # Styling for homepage │ └── utils/ │ └── api.js # API calls to the backend │ ├── .env # Environment variables for backend ├── .env.local # Environment variables for frontend ├── package.json # Dependencies for both frontend and backend ├── server.js # Entry point for the backend server └── README.md # Project documentation

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/PostHit.git
   cd PostHit
### Install dependencies:
cd src/backend
npm install
cd src/frontend
npm install
Set up the environment variables:

Create a .env file in the root of the backend and frontend directories:

For backend (.env):
DATABASE_URL=postgresql://user:password@localhost:5432/postshit
JWT_SECRET=your_jwt_secret
For frontend (.env.local):
NEXT_PUBLIC_API_URL=http://localhost:5000/api
Prisma database setup:
npx prisma migrate dev --name init
npx prisma generate
Start the backend server:

In the src/backend directory, run:npm run dev
Start the frontend (Next.js):

In the src/frontend directory, run
## API Endpoints

### Posts API

- **Create Post**  
  Create a new post.
  ```http
  POST /api/posts/create
