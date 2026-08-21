const Url = require("../models/Url");
const Click = require("../models/Click");

const redirectToUrl = async (req, res) => {
  try {
    const { code } = req.params;

    const url = await Url.findOne({ shortCode: code });

    if (!url) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    res.redirect(url.originalUrl);

    Url.updateOne({ _id: url._id }, { $inc: { clicks: 1 } }).exec();

    Click.create({
      url: url._id,
      ipAddress: req.ip,
      referrer: req.get("Referrer") || "Direct",
      userAgent: req.get("User-Agent"),
    }).catch((err) => console.error("Click logging failed:", err.message));
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { redirectToUrl };
