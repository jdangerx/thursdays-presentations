module.exports = {
  TOKEN_SECRET: process.env.TOKEN_SECRET,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/presentation',
  HS_SECRET: process.env.HS_SECRET
};
