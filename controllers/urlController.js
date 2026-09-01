const Click = require('../models/Click.js');
const Url = require('../models/Url.js');
const generateShortCode = require('../utils/generateShortCode.js');
const AppError = require('../utils/AppError.js');

const shortenUrl = async(req,res,next) => {
    try {
        const { originalUrl, customAlias } = req.body;

        let shortCode = customAlias;

        if(customAlias){
            const existing = await Url.findOne({ shortCode: customAlias });
            if(existing){
                return next(new AppError(`This alias is alreday taken`, 409));
            }
        } else{
            shortCode = generateShortCode();
        }

        const newUrl = await Url.create({ originalUrl, shortCode, user: req.userId });

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

const getMyUrls = async (req, res, next) => {
  try {
    const urls = await Url.find({ user: req.userId }).sort({ createdAt: -1 });
    res.json({ count: urls.length, urls });
  } catch (error) {
    next(error);
  }
};


module.exports = { shortenUrl, getUrlStats, getClicksByDay, getClicksByReferrer, getMyUrls};



