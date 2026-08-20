const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(' Your mongoDb is connected successfully')
    } catch(error) {
        console.log('Mongo connection failed: ', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
