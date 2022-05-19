const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

router.get('/welcome',(req,res) => res.sendFile(__dirname + '/pages/main.html')) 
router.get('/contact',(req,res) => res.sendFile(__dirname + '/pages/contact.html')) 

module.exports = router