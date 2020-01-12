// 'use strict';

 let https = require ('https');












 //////Write here about your day/////////////////////////////////
let day='I am going to suicide .Its over.World doesnot need me';

/////Write here about your day/////////////////////////////////////














 let documents = {
    'documents': [
        { 'id': '1', 'language': 'en', 'text':day  }
         
     ]
 };


 let subscription_key = "key";
 let endpoint = "https://sentiment.azure.com/";

 let path = '/text/analytics/v2.1/sentiment';

 let response_handler = function (response) {
     let body = '';
     response.on('data', function (d) {
         body += d;
        
      

     });
     response.on('end', function () {
         let body_ = JSON.parse(body);
        // console.log(body_);
         let sentiment = parseInt(JSON.stringify(body_["documents"][0].score)*100);
         console.log("Your overall score for today is "+ sentiment)
         if(sentiment>90){
            console.log("Your day was awesome.Pass your positivity to others.Be grateful for everything you have got")
         }
         else if(sentiment>80){
             console.log("Your day was pretty good. Keep up the good work. Best is yet to come")
         }
         else if(sentiment>70){
             console.log("Your day was okay. Instead of digging up the negative sides, look at the bright sides. Work hard and dont give up")
         }
         else if(sentiment>60){
             console.log("Not a great day as you thought? Dont worry man. Things happen.Life is not easy as u think. Perseverance is the key ")
         }
         else if(sentiment>50){
             console.log("I know you are not happy of what you have gone through today. Learn from your mistakes and move on. Life is full of ups and downs and you will survive ")
         }
         else if(sentiment>30){
             console.lof("The day has been terrible for you. The word Giving up is not in your dictionary.You have survived much worse. Rise and shine. Something else is waiting for you")
         }
         else if(sentiment>10){
             console.log("THe day was really bad for you. Dont stay alone.Go out and hang out with friends.Losers give up and I know you are not one of  that kind. Be positive, work hard and success is yours")
         }
         else{
             console.log("Consult a counsellor or an advisor. Harming yourself does nothing but harm to you and your family. Express your concerns with friends and families. Go out and enjoy some fresh air. Wait for a better day.")
         }
         

     });
     response.on('error', function (e) {
         console.log('Error: ' + e.message);

     });
 };

 let get_sentiments = function (documents) {
     let body = JSON.stringify(documents);
     let request_params = {
         method: 'POST',
         hostname: (new URL(endpoint)).hostname,
         path: path,
         headers: {
             'Ocp-Apim-Subscription-Key': subscription_key,
         }
     };

     let req = https.request(request_params, response_handler);
     req.write(body);
    
    
     req.end();
 }



 get_sentiments(documents);



