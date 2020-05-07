const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Import Routes
const authRoute = require('./routes/auth');

dotenv.config()

// connect to db
mongoose.connect(
  process.env.DB_CONNECT, { useNewUrlParser: true,useUnifiedTopology: true  },
  ()=>console.log('Connected to db!'))

// Middleware
app.use(express.json())

// Route Middleware
app.use('/api/user', authRoute);


app.listen(4000, ()=>console.log("Local Server started successfully"));
