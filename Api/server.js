const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');

dotenv.config();

const app = express();
app.use(express.json());

// Connect to DB
connectDB();

//CORS Middleware
const cors = require('cors');
app.use(cors());


// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
