const database = require("./database");
const express = require("express");

router = express.Router();

router.get("/users/by-user-id", (request, response) => {
  database.connection.query(
    `select first_name, last_name, high_risk, medium_risk, low_risk
    from users where user_id = ${request.query.user_id}`,
    (error, result) => {
      if (error) {
        console.log(error);
        response.status(500).send("Some error occurred at the Backend.");
      } else {
        response.status(200).send(result);
      }
    }
  );
});

router.get("/stock_records/by-user-id", (request, response) => {
  database.connection.query(
    `select exchange_code, stock_code, no_of_shares, purchase_cost, current_price from stock_records where user_id = ${request.query.user_id}`,
    (error, result) => {
      if (error) {
        console.log(error);
        response.status(500).send("Some error occurred at the Backend.");
      } else {
        response.status(200).send(result);
      }
    }
  );
});

router.get("/deposit_records/by-user-id", (request, response) => {
  database.connection.query(
    `select bank_name, deposit_type, deposit_amt, interest_rate from deposit_records where user_id = ${request.query.user_id}`,
    (error, result) => {
      if (error) {
        console.log(error);
        response.status(500).send("Some error occurred at the Backend.");
      } else {
        response.status(200).send(result);
      }
    }
  );
});

router.put("/users/by-user-id", (request, response) => {
  database.connection.query(
    `update users set high_risk = '${request.body.high_risk}', medium_risk = '${request.body.medium_risk}', low_risk = '${request.body.low_risk}' where user_id = ${request.body.user_id}`,
    (error, result) => {
      if (error) {
        console.log(error);
        response.status(500).send("Some error occurred at the Backend.");
      } else {
        response.status(200).send("Updated successfully!");
      }
    }
  );
});

module.exports = {
  router,
};
