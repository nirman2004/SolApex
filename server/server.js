require('dotenv').config();
const express = require("express");
const cors = require('cors')
const app = express();
const connectDB = require('./utils/db');
const auth = require('./routers/authRoute');


app.use(express.json());

const corsOption = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true
}

app.use(cors(corsOption));

app.use('/api/auth', auth);

const PORT = 3000;

const uri = process.env.MONGODB_URI;

connectDB(uri).then(() => {
  app.listen(PORT, () => {
    console.log("Connected to Database, running on port ", PORT);
  });
});
