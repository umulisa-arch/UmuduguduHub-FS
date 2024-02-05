const { Message } = require("twilio/lib/twiml/MessagingResponse");
const citizenModel = require("../models/citizen.model");
const express = require("express");

var dApp = express();
dApp.get("/getData", async (req, res) => {
  try {
    const allCitizens = await citizenModel.find({});
    console.log("All citizens", allCitizens);
    var totFamilies = allCitizens.length;
    var allPopulation = [];
    var allChildren = [];
    // var totp = 0;
    // var totf = 0;

    allCitizens.map((citiz) => {
      allPopulation.push(citiz.houseComp.numberOfHousePeople);
      allChildren.push(citiz.houseComp.numberOfChildren);
    });
    let totPeoples = allPopulation.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    let totChildren = allChildren.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    // for (let i = 0; i < allCitizens.length; i++) {
    //   // allPopulation.push(allCitizens[i].houseComp.numberOfHousePeople);

    //   console.log(`citizen ${i + 1}`, allCitizens[i].houseComp);
    //   totp += allCitizens[i].numberOfHousePeople;
    //   allChildren.push(allCitizens[i].numberOfChildren[i]);
    //   totf += allCitizens[i].numberOfChildren;
    // }
    // console.log("Population ", allPopulation);
    // console.log("Children ", allChildren);
    res.send({
      totPeoples,
      totChildren,
      totFamilies,
    });
  } catch (error) {
    res.send({ message: "Error loading page try again", error: error.message });
  }
});

module.exports = dApp;
