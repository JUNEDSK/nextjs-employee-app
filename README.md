# nextjs-employee-app

This project is a demonstration of my skills in building a modern web application using **Next.js**, **Redux Toolkit**, **JWT Authentication**, and **File Upload Handling**. It includes the following key features:

- **Login Authentication** via a dummy API
- **State Management** with Redux Toolkit
- **Profile Picture Upload** for employee records
- **Responsive UI** using Tailwind CSS or Bootstrap

---

## ✅ Features

### 1. **Authentication**
- Users can log in using their credentials (email and password).
- Authentication is handled via the dummy endpoint [`https://reqres.in/api/login`](https://reqres.in/api/login).
- Upon successful login, a token is saved securely (in localStorage or httpOnly cookies).
- This token is used to simulate authenticated requests in the app.

### 2. **Employee Management**
- List of employees fetched and managed via Redux state.
- Ability to **add** and **edit** employee details including:
  - Name
  - Email
  - Phone
  - Position
  - Profile Picture (uploaded from local device)

### 3. **Profile Page**
- Simulated user profile fetched using the stored token.
- Displays user info like name, email, and profile picture.

### 4. **Navigation**
- Simple navigation bar with links to:
  - Home
  - Employee List
  - Profile

---

## 🛠️ Technologies Used

- **Next.js** – React framework for SSR and routing
- **Redux Toolkit** – Efficient and scalable state management
- **Tailwind CSS** or **Bootstrap** – For fast, responsive styling
- **React Query** or `fetch()` – For API integration
- **JWT Token Handling** – For login simulation and protected routes
- **File Upload** – For employee profile pictures


---

## 🚀 Getting Started

### 1. **Clone the repository**
```bash
git clone https://github.com/your-username/nextjs-employee-app.git
cd nextjs-employee-app
