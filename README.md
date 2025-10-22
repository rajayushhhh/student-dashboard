# 🎓 Student Dashboard

A **simple React + Firebase project** to manage student profiles. Admins can add, edit, and delete student information. The app includes **authentication, a responsive dashboard, and persistent data storage** using Firestore.  

This project is designed to be **beginner-friendly** and easy to understand for someone learning React and Firebase.  

---

## 🔹 Features

1. **Login & Signup** – Firebase Authentication for user management  
2. **Admin Detection** – Only `admin@student.com` can add or edit students  
3. **Add / Edit / Delete Students** – Admin can manage student profiles  
4. **Student Cards** – Displays students in a card layout (3 per row)  
5. **Responsive Design** – Works on desktop, tablet, and mobile  
6. **Persistent Storage** – All student data is stored in Firebase Firestore  

---

## 🛠️ Technologies Used

- **Frontend:** React  
- **Backend & Database:** Firebase (Auth + Firestore)  
- **Routing:** React Router DOM  
- **Styling:** Basic CSS (no frameworks)  

---

## 🚀 Installation & Running Locally

1. Clone the repository:  

```bash
git clone https://github.com/rajayushhhh/student-dashboard
cd student-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser at:

```
http://localhost:5173
```

> Note: Vite is used as the development server.  

---

## 🔑 Admin Credentials

- **Email:** `admin@student.com`  
- **Password:** `admin123`  

---

## 🏗️ Folder Structure

```
student-dashboard/
├── public/
├── src/
│   ├── components/
│   │   └── ProjectedRoute.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── Dashboard.jsx
│   ├── firebase.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── README.md
```

---

## 💡 Usage

1. Go to `/signup` to create a new account (optional for admin).  
2. Login using your credentials.  
3. Admin can:
   - Add new students by filling in **Name, Email, and Major**.  
   - Edit student information using the **Edit button**.  
   - Delete student profiles using the **Delete button**.  
4. All students are displayed as cards in a 3-per-row layout.  

---


