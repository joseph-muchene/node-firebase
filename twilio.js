//===========
// task
//=== Twilio sms intergration with node

//==========

import twilio from "twilio";
const client = twilio(accountSid, authToken);

const accountSid = "AC8a924d3679159b7034e55486839d0db7";
const authToken = "ee078ebc156f58e446ad18026f5a62ee";

client.messages
  .create({ body: "Hi there", from: "+18632607213", to: "+254759689541" })
  .then((message) => console.log("message was sent", message.sid))
  .catch((err) => console.log(err));
