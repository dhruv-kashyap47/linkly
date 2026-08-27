const Click = require('../models/Click.js');
const Url = require('../models/Url.js');
const generateShortCode = require('../utils/generateShortCode.js');
const AppError = require('../utils/AppError.js');

const shortenUrl = async(req,res,next) => {
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
        next(error);
    }
};

const getUrlStats = async(req, res, next) => {
    try{
        const { code } = req.params;

        const url = await Url.findOne({ shortCode: code });

        if (!url){
            return res.status(404).json({ error : `Short Url not found`})
        }

        res.json({
            originalUrl : url.originalUrl,
            shortCode : url.shortCode,
            totalClicks : url.clicks,
            createdAt: url.createdAt
        });
    } catch(error){
        next(error);
    }
};

const getClicksByDay = async(req, res, next) => {
    try {
        const { code } = req.params;

        const url = await Url.findOne({ shortCode : code });

        if (!url){
            return res.status(404).json({ error : `Short Url not found`});
        }

        const clicksByDay = await Click.aggregate([
            {
                $match: { url: url._id}
            },

            {
                $group: {
                    _id: {
                        $dateToString: { format: '%Y-%m-%d', date: '$timestamp'}
                    },
                    count: { $sum: 1}
                }
            },

            {
                $sort: {_id: 1}
            }
        ]);

        res.json({ shortCode: url.shortCode, clicksByDay})
    } catch (error){
        next(error);
    }
};

const getClicksByReferrer = async (req, res, next) => {
    try {
        const { code } = req.params;

        const url = await Url.findOne({ shortCode : code });

        if(!url){
            return res.status(404).json({ error: ` Short URL not found`})
        }

        const clicksByReferrer = await Click.aggregate([
            {
                $match : { url : url._id}
            },

            {
                $group: {
                    _id : '$referrer',
                    count: { $sum: 1 }
                }
            },

            {
                $sort: { count: -1 }
            },
        ]);
        res.json({ shortCode: url.shortCode, clicksByReferrer})
    } catch (error) {
        next(error);
    }
};


module.exports = { shortenUrl, getUrlStats, getClicksByDay, getClicksByReferrer};



