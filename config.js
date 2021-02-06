// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }
require("dotenv").config();

module.exports = {
  apiKey: process.env.API_KEY,
  port: process.env.PORT,
};