require('dotenv').config()
const cfg = {};
cfg.port = process.env.PORT || 5000;
cfg.secret = process.env.APP_SECRET || 'Mercor';
cfg.twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
cfg.twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
cfg.twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
cfg.mongoUrl = process.env.MONGOURI;
module.exports = cfg;


N46B1RZ9B5EWFKFZKH7A49R7
