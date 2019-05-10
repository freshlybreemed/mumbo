const paymentApi = require("./payments");
const ticketsApi = require('./gmail')
const configureRoutes = app => {
  paymentApi(app);
  ticketsApi(app)
};
module.exports = configureRoutes;