// alexa-cookbook sample code

// There are three sections, Text Strings, Skill Code, and Helper Function(s).
// You can copy and paste the entire file contents as the code for a new Lambda function,
//  or copy & paste section #3, the helper function, to the bottom of your existing Lambda code.


// 1. Text strings =====================================================================================================
//    Modify these strings and messages to change the behavior of your Lambda function

var myRequest = 'drama';

// 2. Skill Code =======================================================================================================


var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
   var alexa = Alexa.handler(event, context);

   // alexa.appId = 'amzn1.echo-sdk-ams.app.1234';
   // alexa.dynamoDBTableName = 'YourTableName'; // creates new table for session.attributes

   alexa.registerHandlers(handlers);
   alexa.execute();
};

var handlers = {
   'LaunchRequest': function () {
       this.emit('MyIntent');
   },

   'MyIntent': function () {

       httpsGet(myRequest,  (myResult) => {
               console.log("sent     : " + myRequest);
               console.log("received : " + myResult);

               this.response.speak('Hier sind die Filme im ' + myRequest + ' Kategorie: ' + myResult);
               this.emit(':responseReady');

           }
       );

   }
};


//    END of Intent Handlers {} ========================================================================================
// 3. Helper Function  =================================================================================================


var https = require('https');
// https is a default part of Node.JS.  Read the developer doc:  https://nodejs.org/api/https.html
// try other APIs such as the current bitcoin price : https://btc-e.com/api/2/btc_usd/ticker  returns ticker.last

function httpsGet(myData, callback) {

   // GET is a web service request that is fully defined by a URL string
   // Try GET in your browser:
   // https://cp6gckjt97.execute-api.us-east-1.amazonaws.com/prod/stateresource?usstate=New%20Jersey
   
   //https://heimdall.maxdome.de/api/v1/assets/?appid=4a5fa26b&apikey=f6cb16de3b67b8b9d64d047a00a9dc55&filter=genre~drama&pageSize=20&pageStart=1

   // Update these options with the details of the web service you would like to call

   var options = {
       host: 'heimdall.maxdome.de',
       port: 443,
       path: '/api/v1/assets/?appid=4a5fa26b&apikey=f6cb16de3b67b8b9d64d047a00a9dc55&filter=genre~' + encodeURIComponent(myData),
       method: 'GET',
       headers: {
           accept:'application/json',
           client:'mxd_store',
           clienttype:'webportal',
           'content-type':'application/json',
           language:'de_DE',
           'maxdome-origin':'maxdome.de',
           platform:'web'
       }
   };

   var req = https.request(options, res => {
       res.setEncoding('utf8');
       var returnData = "";

       res.on('data', chunk => {
           returnData = returnData + chunk;
       });

       res.on('end', () => {
           // we have now received the raw return data in the returnData variable.
           // We can see it in the log output via:
           // console.log(JSON.stringify(returnData))
           // we may need to parse through it to extract the needed data

           //LM NOTES:
           //var listOfTitles = JSON.parse(returnData).assetList.map(asset=>asset.title);
           //assetList.slice(0, 4) returns the first 5 items from the results array;

           var listOfTitles = JSON.parse(returnData).assetList.slice(0, 4).map(asset=>asset.title);

          //listOfTitles.join(', ') returns a comma separated list of titles;
           callback(listOfTitles.join(', '));  // this will execute whatever function the caller defined, with one argument

       });

   });
   req.end();

}
