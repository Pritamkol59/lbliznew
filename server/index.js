// /* eslint-disable */

// const functions = require("firebase-functions");

// // // Create and deploy your first functions
// // // https://firebase.google.com/docs/functions/get-started
// //
// // exports.helloWorld = functions.https.onRequest((request, response) => {
// //   functions.logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });

// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// app.use(bodyParser.json());
// const firebase = require('firebase-admin');
// const userRouter = require('./api/user'); //api path call
// const productRouter = require('./api/product'); //api path call
// const otpRouter = require('./api/otp'); //api path call
// const loginRouter = require('./api/login');
// const photoRouter = require('./api/photo');
// const tokenfetchRouter = require('./api/fetchtoken'); 

// app.get('/',(req,res) =>{   
  
//     res.send(`Welcom`); 
// });
// app.use('/users', userRouter); //for frontend api call 
// app.use('/product', productRouter); //for  frontend api call 
// app.use('/otp', otpRouter); //for frontend api call
// app.use('/login', loginRouter);
// app.use('/photo', photoRouter);
// app.use('/fat', tokenfetchRouter);

// // app.listen(process.env.PORT, () => console.log('Elish Enterprise Server is ready on localhost:' + process.env.PORT));

// exports.app = functions.https.onRequest(app);  





// //http://localhost:5001/lableiz-da897/us-central1/api/


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const firebase = require('firebase-admin');
const userRouter = require('./api/user'); //api path call
const productRouter = require('./api/product'); //api path call
const otpRouter = require('./api/otp'); //api path call
const loginRouter = require('./api/login');
const photoRouter = require('./api/photo');
const tokenfetchRouter = require('./api/fetchtoken');

app.use('/users', userRouter); //for frontend api call
app.use('/product', productRouter); //for frontend api call
app.use('/otp', otpRouter); //for frontend api call
app.use('/login', loginRouter);
app.use('/photo', photoRouter);
app.use('/fat', tokenfetchRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});