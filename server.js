require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db.js');
const urlRoutes = require('./routes/urlRoutes.js');
const redirectRoutes = require('./routes/redirectRoutes.js')

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Linkly is alive!');
});

app.use('/api', urlRoutes);

app.use('/', redirectRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
