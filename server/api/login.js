const express = require('express');
const firebase = require('firebase-admin');
const {db} = require('../connection');
const jwt = require('jsonwebtoken');
const router = express.Router();

//Validation from fire base
router.post('/', async (req, res) => {
  const {phn, otp} = req.body;

  try {
    const usersRef = db.collection('users');
    const querySnapshot = await usersRef
      .where('phn', '==', phn)
      .where('otp', '==', otp)
      .get();
    if (querySnapshot.empty) {
      throw new Error('User not found');
    } else {
      const secretKey = 'mysecretkey';
      const token = jwt.sign({phn}, secretKey, {expiresIn: '30d'});

      console.log(token);

      res.status(200).json({token});

      // username,bankacno,ifsccode,address,accounttype,membership:0,email,businessname,expairy:0,photourl,signatureurl
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message});
  }
});

module.exports = router;
