var express = require('express');
var router = express.Router();
var axios = require('axios');

var Bracketmodel = require('../models/bracketModel');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/getStartingBracket', function(req, res, next) {
   console.log('in the backend and getting the bracket');
    axios.get('https://trungics-gse00013027.integration.us2.oraclecloud.com:443/integration/flowapi/rest/GETBRACKETDATA/v01/getallteams', {
      headers: {
        Authorization: 'Basic Y2xvdWQuYWRtaW46cExVQ2t5QDNGbE9vcg==',
      }
    })
    .then(function (response) {
      console.log(response.data);
      res.send({"data": response.data});
    })
    .catch(function (error) {
      console.log(error);
    });
  //res.send('back from getStartingBracket')
  // res.render('index', { title: 'Express' });
});


router.post('/makeNewUser', function(req, res, next) {
  res.send('return from makeNewUser')
});

router.get('/allUsers', function(req, res, next) {
  res.send('inside get all users')
});

router.put('/updatePlayer/:gameNum:/:Team', function (req, res) {
  console.log('value of parameters: ', req.params);
  res.send('Hello from put player')

  // var company = req.company;
  //
  // company = _.extend(company, req.body);
  //
  // company.save(function(err) {
  // if (err) {
  //     return res.send('/company', {
  //         errors: err.errors,
  //         company: company
  //     });
  // } else {
  //     res.jsonp(company);
  // }

});


router.put('/updateActuals/:gameNum:/:Team', function (req, res) {
  console.log('value of parameters: ', req.params);
  res.send('Hello from put actual')

  // var company = req.company;
  //
  // company = _.extend(company, req.body);
  //
  // company.save(function(err) {
  // if (err) {
  //     return res.send('/company', {
  //         errors: err.errors,
  //         company: company
  //     });
  // } else {
  //     res.jsonp(company);
  // }

});


module.exports = router;
