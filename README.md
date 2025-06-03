# ElevateAI 🚀

**ElevateAI** is a powerful web application designed to empower job seekers and career changers by providing AI-driven tools for career planning, resume building, and interview preparation.

---
# Demo 
https://github.com/user-attachments/assets/30e8b7a3-f820-4fb7-b5ae-069ac5771ebf
---

## 🧠 Overview

ElevateAI helps users:
- Create a personalized account
- Choose their **career industry**, **specialization**, and **key skills**
- Visualize **real-world demand graphs** based on selected fields and skills
- Generate professional-grade **resumes** and **cover letters**
- Take **AI-powered interview prep quizzes** based on their selected career paths
- Track progress through performance graphs generated from quiz history

ElevateAI combines **data-driven insights** with **AI-powered content generation** to elevate your career journey.

---

## ✨ Key Features

### 🧑‍💼 Personalized Career Profile
- Select industry, specialization, and skills after account creation
- Tailored recommendations based on your selections

### 📊 Real-World Demand Graphs
- Visualize demand for your selected field
- See trending and in-demand skills
- Get a roadmap of what skills to acquire next

### 📄 Resume & Cover Letter Generator
- Automatically generate professionally formatted resume and cover letter
- Customize outputs for specific job roles or companies

### 🎯 Interview Prep Quizzes
- Take unlimited quizzes in your chosen field
- Get instant feedback with correct answers and explanations
- Improve with every attempt

### 📈 Performance Tracking
- View progress with performance graphs from all your past quizzes
- Identify strengths and areas for improvement

---

## 🛠 Tech Stack

### 🧩 Frontend
- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/)

### 🔐 Authentication
- **User Management & Auth:** [Clerk](https://clerk.dev/)

### 🔧 Backend
- **Runtime & Framework:** [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/)
- **Validation:** [Zod](https://zod.dev/)

### 🗃️ Database
- **ORM:** [Prisma](https://www.prisma.io/)
- **Database Platform:** [NeonDB](https://neon.tech/)

### ⚙️ Workflows & Scheduling
- **Background Jobs & Event Handling:** [Inngest](https://www.inngest.com/)

### 🤖 AI Integration
- **LLM API:** [Gemini API](https://ai.google.dev/)

### 📈 Analytics & Visualization
- **Graphs & Charts:** [Recharts.js](https://recharts.org/)

### 📑 Document Generation
- **PDF Export:** [html2pdf.js](https://ekoopmans.github.io/html2pdf.js/)

---

### Make sure to create a `.env` file with following variables -

```
DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=
```
