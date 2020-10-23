"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { stock, customers } = require("./data/inventory");

express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(bodyParser.json())

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  // Nothing to modify above this line
  // ---------------------------------
  // add new endpoints here 👇

  .post('/order', (req, res) => {
    const newCustomer = req.body;
    const {
      order, 
      size, 
      givenName, 
      surname,
      email,
      address,
      province,
      postcode,
      country,
      } = req.body;
    const customersDb = customers;
    const stockDb = stock;
    console.log(newCustomer);

    const isCustomerInDb = customersDb.find((customer) => 
      // refuse whose name is already in our database
      (customer.givenName.toLowerCase() === givenName.toLowerCase() &&
      customer.surname.toLowerCase() === surname.toLowerCase()) ||
      // refuse whose email is already in our database
      customer.email.toLowerCase() === email.toLowerCase() ||
      // whose address matches an address already in our database. 
      // Use only the street number and name for this.
      customer.address.toLowerCase() === address.toLowerCase()
      );
    

    if (order === 'tshirt' && stockDb[order][size] == 0) {
      // Validate that the item selected is actually in stock.
      res.status(400).json({
        status: "error", 
        error: "unavailable"
      })
    } else if (stockDb[order] == 0) {
      res.status(400).json({
        status: "error",  
        error: "unavailable"
      })
    } else if (isCustomerInDb) {
      res.status(400).json({
        status: "error",  
        error: "repeat-customer"
      })
    } else if (!email.includes('@')) {
      // Is the email, an email? Does it include @?
      // (No need to go crazy here. Just a cursory evaluation.)
      res.status(400).json({
        status: "error", 
        error: "missing-data"
      })
    } else if (country.toLowerCase() != 'canada') {
      // Validate that delivery address is within Canada.
      res.status(400).json({
        status: "error", 
        error: "undeliverable"
      })
    } else {
      res.status(200).json({
        status: "success",
        data: newCustomer
      })
      
    }

  })

  // add new endpoints here ☝️
  // ---------------------------------
  // Nothing to modify below this line

  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
