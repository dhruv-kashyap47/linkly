require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db.js');

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Linkly is alive!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
