# Assignment
 -----
# Assignment-React-Node.js-

## 📌 Features
- ✅ User registration & login (no authentication logic)
- ✅ Full CRUD operations for Product (name, price, quantity)
- ✅ Frontend built with React
- ✅ Toast notifications and simple navigation

## 🛠️ Technologies Used
### 🔧 Backend
- Node.js
- Express.js
- MongoDB with Mongoose

### 🌐 Frontend
- React.js
- Axios
- React Router DOM
- React Toastify

---

## 🚀 How to Run

### 🖥️ Backend Setup
1. Clone the repository:

    ```bash
    git clone https://github.com/YOUR_USERNAME/rest-api-nodejs-mongo.git
    cd rest-api-nodejs-mongo
    ```

2. Install dependencies:

    ```bash
    npm install
    ```
3. Create a .env file:
    ```bash
    MONGO_URI=mongodb://127.0.0.1:27017/my_rest_api
    PORT=5000
    ```
4. Run the server:
    ```bash
    node server.js 
    ```

### 🌐 Frontend Setup

1. Go to the frontend directory:

    ```bash
    cd ../client
    ```

2. Install dependencies:

    ```bash
    npm install
    ```
    
3. Start the React app:
    ```bash
    npm start
    ```
---
**📮 API Endpoints**
**👤 Users**
| Method | Endpoint              | Description     |
| ------ | --------------------- | --------------- |
| POST   | `/api/users/register` | Register a user |
| POST   | `/api/users/login`    | Login a user    |
---
**📦 Products**
| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| POST   | `/api/products`     | Create new product |
| GET    | `/api/products`     | Get all products   |
| GET    | `/api/products/:id` | Get one product    |
| PUT    | `/api/products/:id` | Update product     |
| DELETE | `/api/products/:id` | Delete product     |
---
**Frontend Pages**
| Page     | Path            | Purpose                          |
| -------- | --------------- | -------------------------------- |
| Login    | `/` or `/login` | Login form                       |
| Register | `/register`     | User registration form           |
| Home     | `/home`         | Product manager (CRUD interface) |
---
**✅ Author**
:Shanchikkaj
---


