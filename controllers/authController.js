const jwt = require('jsonwebtoken');
const User = require('../models/User');
const AppError = require('../utils/AppError')

const generateToken = (userId) => {
    return jwt.sign( { id: userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

const register = async (req, res, next) => {
    try {
        const { email, password } = req.body

        const existingUser = await User.findOne({ email })

        if (existingUser) {
            return next(
                new AppError(`Email already registered`, 409)
            )
        }

        const newUser = await User.create({
            email,
            password
        })

        const userToken = generateToken(newUser._id);

        res.status(201).json({
            user: {
                id: newUser._id,
                email : newUser.email
            },

            userToken
        })
    } catch (error){
        next(error)
    }
};



