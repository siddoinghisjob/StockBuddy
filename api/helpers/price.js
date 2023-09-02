const axios = require("axios");
require("dotenv").config();

const price = async (tickr) => {
  try {
    let call = await axios.get(
      process.env.fhb + "quote?symbol=" + tickr + "&token=" + process.env.fhbkey
    );
    if (call.status == 200) {
      let data = call.data
      let { c, h, l } = data;
      let price = { curr: c, high: h, low: l };
      console.log({ success: true, price: price });
    } else {
      call = await axios.get(
        process.env.alpkey +
          "GLOBAL_QUOTE&symbol=" +
          tickr +
          "&apikey=" +
          process.env.alpkey
      );
      let data = call.data;
      if (Object.hasOwn(data, "note"))
        throw new Error("API Limit exceeded.");
      else {
        let price = data["Global Quote"];
        price = { curr: parseFloat(price['05. price']), high: parseFloat(price['03. high']), low: parseFloat(price['04. low']) };
        console.log({ success: true, price: price });
      }
    }
  } catch (err) {
    console.log("err");
  }
};
price("AAPL");
module.exports = price;
