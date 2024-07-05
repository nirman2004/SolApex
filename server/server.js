const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

const start = () => {
    try {
        app.listen(port, () => {
            console.log(`Server running at ${port}.....`);
        })
    } catch (error) {
        console.log(error.message);
    }
}

start();