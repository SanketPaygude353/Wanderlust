# 🧭 Wanderlust – Property Listing Web Application

Wanderlust is a **full-stack web application** built using the **MERN stack** that allows users to explore, list, and manage properties such as villas, hotels, and homestays. The platform provides a seamless experience for both **hosts** and **travelers**, featuring authentication, property listings, and modern UI interactions.

---

## 🚀 Features

- 🏡 **Property Listings** – Users can explore properties like villas and hotels.
- 👤 **User Authentication** – Secure login and signup for both hosts and travelers.
- 🧩 **Role-Based Access** – Hosts can list and manage properties; travelers can browse and book stays.
- 🏗️ **MVC Architecture** – Ensures better maintainability and scalability.
- 🔄 **CI/CD Integration** – Deployed on **Render** with automatic updates via **GitHub Actions**.
- 💾 **Database Integration** – Uses **MongoDB** for data persistence.
- ⚡ **Responsive Design** – Fully responsive for all screen sizes.

---

## 🛠️ Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Frontend** | React.js, HTML5, CSS3, JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Authentication** | Passport.js / JWT (JSON Web Token) |
| **Deployment** | Render (with GitHub CI/CD) |
| **Version Control** | Git & GitHub |

---

## ⚙️ Installation & Setup

Follow these steps to run Wanderlust locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/yourusername/wanderlust.git

# 2️⃣ Navigate to the project directory
cd wanderlust

# 3️⃣ Install server dependencies
cd server
npm install

# 4️⃣ Install client dependencies
cd ../client
npm install

# 5️⃣ Create a .env file and add your environment variables
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

# 6️⃣ Run the application
npm run dev
