# 📝 Intern Registration Portal (Assignment)

This repository is created as an assignment for an internship. It demonstrates a full-stack intern registration portal built with **Node.js**, **Express**, **MongoDB**, and a simple HTML/CSS/JS frontend.

<div align="center">
  <img src="https://img.icons8.com/color/96/000000/internship.png" alt="Internship Icon" width="96"/>
</div>

---

## 🚀 Features

- 📝 **Intern Registration**: Collects intern details—name, gender, age, degree, graduation year, and contact number.
- 🛡️ **Admin Dashboard**: Secure admin login to view all registered interns.
- 🌐 **REST API**: Backend API for registration, login, and fetching intern data.
- 💾 **MongoDB Database**: All data is stored and validated in MongoDB.
- 🎨 **Responsive Frontend**: User-friendly HTML/CSS/JS interface.

---

## 📁 Project Structure

```
.
├── Models/            # Mongoose schemas
│   └── interndata.js
├── config/            # Database config
│   └── db.js
├── controllers/       # Business logic
│   └── authcontroller.js
├── public/            # Frontend assets
│   ├── index.html
│   ├── admin.html
│   └── script.js
├── routes/            # API routes
│   └── authroutes.js
├── server.js          # Main server file
└── .env               # Environment variables (not committed)
```

---

## 🛠️ Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/shivp0404/backend.git
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```
   LINK=your_mongodb_connection_string
   PORT=5000
   EMAIL=admin@example.com
   SECRET=your_admin_password
   ```

4. **Run the server**
   ```bash
   node server.js
   ```
   The app should now be running at `http://localhost:5000`

---

## 🧑‍💻 Usage

- **Interns**: Fill out the registration form on the main page.
- **Admins**: Click "Admin Login", log in with credentials from `.env`, and view all intern registrations.

---

## 📦 API Endpoints

- `POST /` : Register a new intern (expects JSON)
- `POST /login` : Admin login (expects JSON)
- `GET /intern` : Get all registered interns

---

## 🎓 Assignment Note

This project is a demonstration for an internship assignment. All information, functionality, and icons are included as required.

---

## 👨‍🎓 Author

- **shivp0404**  
  [GitHub Profile](https://github.com/shivp0404)

---

<div align="center">
  <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB" width="40"/>
  <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js" width="40"/>
  <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" width="40"/>
  <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML" width="40"/>
  <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS" width="40"/>
</div>

