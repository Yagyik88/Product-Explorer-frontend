# Product Explorer Dashboard

A production-style frontend application built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

The app fetches product data from a public API and allows users to explore, search, filter, favorite, and view detailed product information.

---

## 🚀 Features

- Product listing in a responsive grid
- Search products by title (client-side)
- Filter products by category
- Mark/unmark products as favorites
- Persist favorites using `localStorage`
- Filter to show only favorite products
- Product details page using dynamic routing
- Loading and error states
- Mobile-first, responsive UI

---

## 🛠️ Tech Stack

- **Next.js 16 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Fake Store API** (https://fakestoreapi.com)

---

## 📁 Project Structure


src/
├── app/
│ ├── page.tsx
│ └── products/[id]/page.tsx
├── components/
├── hooks/
├── lib/
├── types/
└── utils/

---

## ▶️ Getting Started

```bash
npm install
npm run dev

---
## 🧠 **Assumptions & Trade-offs**

Client-side filtering is used for simplicity and performance

Favorites are persisted using localStorage

Server components are used where appropriate for data fetching
