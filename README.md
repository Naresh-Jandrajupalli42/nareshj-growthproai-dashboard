# 📊 Local Business Dashboard

A responsive full-stack web application built with **Vite + React** and **Express.js**. Users can enter a business name and location to receive a dynamically generated SEO-friendly headline, rating, and review count. This project demonstrates frontend-backend integration without a database, using randomized logic to simulate real-world data.

---

## 🚀 Features

- 📥 Input form for business name and location
- ⚙️ Backend-generated:
  - ⭐ Business rating (4.0–5.0)
  - 📈 Review count (50–550)
  - 📰 SEO headline based on input
- 🔁 “Regenerate SEO Headline” button
- 📱 Fully responsive and mobile-friendly UI
- 🎨 Tailwind CSS styling
- ❌ Error handling for failed network requests

---

## 🧱 Tech Stack

- **Frontend**: Vite + React
- **Styling**: Tailwind CSS
- **Backend**: Node.js + Express.js
- **Communication**: REST API (JSON)

---

## 📂 Folder Structure

```
nareshj-growthproai-dashboard/
├── backend/                  # Express backend
│   ├── index.js              # Main server file
│   └── headlines.js          # Optional: headline templates
│
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── BusinessForm.jsx
│   │   │   └── BusinessCard.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── App.css
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── README.md
```

---

## 🧪 How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Naresh-Jandrajupalli42/nareshj-growthproai-dashboard.git
cd nareshj-growthproai-dashboard
```

### 2. Start the backend

```bash
cd backend
npm install
node index.js
```

> Backend will run at: `http://localhost:5000`

### 3. Start the frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

> Frontend will run at: `http://localhost:5173`

---

## 🌐 Live Demo (Optional)

- 🔗 Frontend: https://growthproai-dashboard-ig59xrxm1-ns-projects-a25b0e92.vercel.app 
- 🔗 Backend: https://growthproai-backend-rrya.onrender.com

> ⚠️ **Note**: The backend may take a few seconds to wake up due to Render’s free-tier cold start.

---

## 📸 Sample Output

```
Business Name: Itech
Location: Hyderabad

⭐ 4.5 Rating
143 Reviews
"Why Itech is Hyderabad's Sweetest Spot in 2025"
```

---

## 📌 Notes

- No database is used — all data is generated dynamically in the backend.
- The project is designed for demonstration purposes and simulates real-world behavior.
- All form inputs are validated before submission.
- The UI is fully responsive and accessible.
- Buttons use `cursor-pointer` for proper UX feedback.

---

## ✅ Status

🎯 Project is complete and fully aligned with the assignment requirements.
