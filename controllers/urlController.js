const Url = require('../models/Url.js');
const generateShortCode = require('../utils/generateShortCode.js');

const shortenUrl = async(req,res) => {
    try {
        const { originalUrl } = req.body;

        if(!originalUrl){
            return res.status(400).json({ error: `originalUrl is require` });
        }


        const shortCode = generateShortCode()

        const newUrl = await Url.create({
        originalUrl,
        shortCode
        })

        res.status(201).json({
        originalUrl: newUrl.originalUrl,
        shortCode: newUrl.shortCode,
        shortUrl:`http://localhost:3000/${newUrl.shortCode}`
        });

    } catch(error){
        res.status(500).json({ error: `Something went wrong` })
    }
};

module.exports = shortenUrl;


