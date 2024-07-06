require('dotenv').config();
const express = require("express");
const app = express();
const connectDB = require('./utils/db');
const auth = require('./routers/authRoute');


app.use(express.json());
app.use('/api/auth', auth);

const PORT = 3000;

const uri = process.env.MONGODB_URI;

connectDB(uri).then(() => {
  app.listen(PORT, () => {
    console.log("Connected to Database, running on port ", PORT);
  });
});
