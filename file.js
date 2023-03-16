const twilio = require('twilio');

const accountSid = 'AC29d561c965e1b12777c06a370539be47'; // Your Account SID from www.twilio.com/console
const authToken = '5423ab45078d620ddaef1b545ee1006d'; // Your Auth Token from www.twilio.com/console

const client = require('twilio')(accountSid, authToken);

// msg = `
// Dear Ram Narayan,

// This message is regarding work for Mr. Anubhav Agrawal. The location of the customer is 16 Matia Mahal Bazar, Near Jama Masjid, Jama Masjid.

// For more details and verification, please contact the customer:-
// +918996375516

// To confirm booking, reply Y or N to cancel

// प्रिय राम नारायण,

// यह संदेश श्री अनुभव अग्रवाल के काम के बारे में है। ग्राहक की लोकेशन 16 मटिया महल बाजार, जामा मस्जिद के पास, जामा मस्जिद है। 

// अधिक जानकारी और सत्यापन के लिए, कृपया ग्राहक से संपर्क करें: –
// +918996375516

// बुकिंग की पुष्टि करने के लिए, रद्द करने के लिए Y या N का उत्तर दें`

msg = `Dear Ram Narayan,

This message is regarding booking confirmation with Mr. Anubhav Agrawal at 16 Matia Mahal Bazar, Near Jama Masjid, Jama Masjid. Your booking is CONFIRMED.

For further queries, please contact the customer:-
+918996375516

प्रिय राम नारायण, 

यह संदेश जामा मस्जिद, जामा मस्जिद के पास 16 मटिया महल बाजार में श्री अनुभव अग्रवाल के साथ बुकिंग पुष्टि के बारे में है। आपकी बुकिंग की पुष्टि हो गई है।

अधिक प्रश्नों के लिए, कृपया ग्राहक से संपर्क करें:
+918996375516`

client.messages
  .create({
    body: msg,
    to: '+919118882517', // Text this number
    from: '+15074364286', // From a valid Twilio number
  })
  .then((message) => console.log("Message sent with SID, " + message.sid));



//   const express = require('express');
//   const { MessagingResponse } = require('twilio').twiml;
  
//   const app = express();
  
//   app.post('/sms', (req, res) => {
//     const twiml = new MessagingResponse();
  
//     twiml.message('The Robots are coming! Head for the hills!');
  
//     res.type('text/xml').send(twiml.toString());
//   });
  
//   app.listen(3000, () => {
//     console.log('Express server listening on port 3000');
//   });
  
