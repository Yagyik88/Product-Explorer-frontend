# 🛍️ Product Explorer Dashboard

A production-style frontend application built using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

The application fetches product data from a public API and allows users to explore products with search, filtering, favorites, and detailed views — demonstrating clean architecture and modern frontend practices.

---

## 🚀 Features

- 📦 Product listing displayed in a responsive grid
- 🔍 Search products by title (client-side)
- 🗂️ Filter products by category
- ❤️ Mark and unmark products as favorites
- 💾 Persist favorites using `localStorage`
- ⭐ Toggle to view only favorite products
- 🔎 Product details page using dynamic routing
- ⏳ Loading and error states for better UX
- 📱 Mobile-first, fully responsive design

---

## 🛠️ Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Fake Store API**  
  https://fakestoreapi.com

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── page.tsx
│   └── products/
│       └── [id]/
│           └── page.tsx
├── components/
├── hooks/
├── lib/
├── types/
└── utils/
▶️ Getting Started
Prerequisites

Node.js (LTS recommended)

Installation & Run
npm install
npm run dev


🧠 Assumptions & Trade-offs

Client-side filtering is used for simplicity and fast UI response

Favorites are persisted using localStorage instead of a backend

Server Components are used where appropriate for data fetching

No external state management library is used to keep the app lightweight






---


---




