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

<img width="1470" height="831" alt="Signup_page" src="https://github.com/user-attachments/assets/fc5b6a15-727b-438d-b682-95a20e9a75a9" />

<img width="1470" height="831" alt="Login_page" src="https://github.com/user-attachments/assets/0464c497-d50d-4c50-bee6-039d0549441c" />

<img width="890" height="757" alt="Dashboard" src="https://github.com/user-attachments/assets/affc69b2-c1a3-4998-ab27-83ede6d180dc" />

<img width="885" height="357" alt="Add_student" src="https://github.com/user-attachments/assets/6717a128-7a6b-47c5-bf5e-3871a6daf08b" />

<img width="886" height="390" alt="all_student_cards" src="https://github.com/user-attachments/assets/d2b137c3-05be-4015-be8a-fb0947433a86" />

<img width="300" height="184" alt="studentcard" src="https://github.com/user-attachments/assets/4c8c7a55-e91b-4ee4-b4a6-d62efc26701c" />



