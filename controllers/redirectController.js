const Url = require("../models/Url");
const Click = require("../models/Click");

const redirectToUrl = async (req, res) => {
  try {
    const { code } = req.params; // Get the short code from the request parameters, reads req.params.code from routes/redirectRoutes.js

    const url = await Url.findOne({ shortCode: code }); // Find the original URL associated with the short code

    if (!url) {
      return res.status(404).json({ error: "Short URL not found" }); // If the short code doesn't exist, return a 404 error
    }

    res.redirect(url.originalUrl); // Redirect the user to the original URL

    Url.updateOne({ _id: url._id }, { $inc: { clicks: 1 } }).exec(); // Increment the click count for the URL in the database

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

// Click.create ka kaam hai ki jab bhi koi user short URL pe click karega, to uska data Click collection me store ho jaye. Isme hum user ka IP address, referrer (jahan se user aaya), aur user agent (browser info) ko log kar rahe hain. Agar Click logging me koi error aata hai, to hum usko console me print kar rahe hain, lekin response me error nahi bhej rahe hain, taki user ka experience affect na ho.

module.exports = { redirectToUrl };
